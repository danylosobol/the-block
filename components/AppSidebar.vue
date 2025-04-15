<script setup lang="ts">
import type { IModelValueEmit, IModelValueProp } from "~/types/interfaces";

interface IAppSidebarProps extends IModelValueProp<boolean> {}
interface IAppSidebarEmits extends IModelValueEmit<boolean> {
  (e: "click:outside", value: MouseEvent): void;
}

const props = defineProps<IAppSidebarProps>();
const emits = defineEmits<IAppSidebarEmits>();

const sidebarValue = computed<boolean>({
  get: () => props.modelValue,
  set: (value: boolean) => emits("update:model-value", value),
});

const target = useTemplateRef<HTMLElement>("sidebarElement");
const isFirstClick: Ref<boolean> = ref(true);

onClickOutside(target, (event) => {
  if (isFirstClick.value) {
    isFirstClick.value = false;
    return;
  }
  if (sidebarValue.value) {
    emits("click:outside", event);
  }
});

watch(
  () => props.modelValue,
  (newValue) => {
    if (!newValue) {
      isFirstClick.value = true;
    }
  }
);
</script>

<template>
  <AppOverlay v-show="sidebarValue"> </AppOverlay>
  <div
    ref="sidebarElement"
    :class="{ 'translate-x-[-100%]': !sidebarValue }"
    class="fixed left-0 top-0 h-full z-6 bg-base-light w-full max-w-md transition-transform"
  >
    <div class="relative max-h-full h-full">
      <button
        class="absolute cursor-pointer top-3 right-3 h-[24px] aspect-square font-bold text-base-dark"
        type="button"
        @click="sidebarValue = false"
      >
        <IconClose
          class="max-h-full aspect-square w-auto fill-base-dark"
        ></IconClose>
      </button>
      <div class="pt-9 h-full">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
