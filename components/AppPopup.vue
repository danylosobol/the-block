<script setup lang="ts">
import type { IModelValueEmit, IModelValueProp } from "@/types/interfaces";

export interface IAppPopupProps extends IModelValueProp<boolean> {}

interface IAppPopupEmits extends IModelValueEmit<boolean> {
  (e: "click:close", value: Event): void;
  (e: "transition:end", value: unknown): void;
}

const props = withDefaults(defineProps<IAppPopupProps>(), {});
const emit = defineEmits<IAppPopupEmits>();

defineOptions({
  inheritAttrs: false,
});

const popupValue = computed<boolean>({
  get: () => props.modelValue,
  set: (value) => emit("update:model-value", value),
});

const clickHandler = (emitName: keyof IAppPopupEmits, event: Event): void => {
  emit(emitName, event);
  if (emitName === "click:close") {
    popupValue.value = false;
  }
};
</script>

<template>
  <Transition
    @after-leave="(hook) => emit('transition:end', hook)"
    name="app-fade"
  >
    <AppOverlay
      v-show="popupValue"
      @click.self="(event) => clickHandler('click:close' as keyof IAppPopupEmits, event)"
    >
      <div
        class="sm:p-10 p-6 min-w-full min-h-full sm:min-w-auto sm:min-h-auto bg-base-light relative z-0 sm:rounded-sm shadow-sm max-h-full flex"
        v-bind="$attrs"
      >
        <button
          class="font-bold cursor-pointer absolute top-3 right-3 leading-none flex w-4 h-4 justify-center items-center"
          @click="(event) => clickHandler('click:close' as keyof IAppPopupEmits, event)"
        >
          &#10005;
        </button>
        <div class="overflow-auto w-full">
          <slot></slot>
        </div>
      </div>
    </AppOverlay>
  </Transition>
</template>
