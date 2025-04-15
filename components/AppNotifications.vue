<script setup lang="ts">
import { useAppStore } from "@/stores/app";
import { type Ref, ref, watch, onUnmounted } from "vue";
import type { IAppMessage } from "~/types/interfaces";
import type { TAppMessageType } from "~/types/types";

const appStore = useAppStore();
const list: Ref<IAppMessage[]> = ref([]);
const timeouts: Ref<ReturnType<typeof setTimeout>[]> = ref([]);
const duration: number = 1500;
const maxNotifications: number = 3;

const getClassNames = (type: TAppMessageType): string => {
  const classNames = {
    error: "bg-base-red text-base-light",
    success: "bg-base-green text-base-light",
    info: "bg-base-blue text-base-light",
  };
  return classNames[type];
};

const removeItem = (index: number): void => {
  list.value.splice(index, 1);
};

const startTimerForNewMessage = () => {
  const timeout = setTimeout(() => {
    removeItem(0);
  }, duration);

  timeouts.value.push(timeout);
};

watch(
  () => appStore.messages,
  (newValue) => {
    if (Array.isArray(newValue) && newValue.length > 0) {
      const messages = appStore.getMessages();
      messages.forEach((message) => {
        if (list.value.length >= maxNotifications) {
          removeItem(0);
        }
        list.value.push(message);
        startTimerForNewMessage();
      });
    }
  },
  { deep: true }
);

onUnmounted(() => {
  timeouts.value.forEach((timeout) => clearTimeout(timeout));
});
</script>

<template>
  <TransitionGroup
    name="list"
    class="fixed p-2 z-7 top-0 bottom-0 pointer-events-none flex justify-end flex-col left-[50%] -translate-x-[50%] w-full max-w-md"
    tag="ul"
  >
    <li
      class="py-1 px-3 text-sm text-center rounded-md mb-2"
      v-for="(listItem, index) in list"
      :key="index"
      :class="getClassNames(listItem.type)"
    >
      {{ listItem.text }}
    </li>
  </TransitionGroup>
</template>

<style scoped lang="scss">
.list-enter-active,
.list-leave-active {
  transition: opacity var(--default-transition-duration)
      var(--default-transition-timing-function),
    transform var(--default-transition-duration)
      var(--default-transition-timing-function);
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
