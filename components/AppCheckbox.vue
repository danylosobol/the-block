<script setup lang="ts">
import type { IModelValueEmit, IModelValueProp } from "~/types/interfaces";

interface IAppCheckboxProps extends IModelValueProp<boolean> {
  label?: string | null;
  errorMessage?: string | null;
}
interface IAppCheckboxEmits extends IModelValueEmit<boolean> {}

const props = withDefaults(defineProps<IAppCheckboxProps>(), {
  label: null,
  errorMessage: null,
});
const emits = defineEmits<IAppCheckboxEmits>();
const uniqueId: string = useId();
const checkboxValue = computed<boolean>({
  get: () => props.modelValue,
  set: (value) => emits("update:model-value", value),
});
</script>

<template>
  <div class="relative w-full">
    <div class="flex items-center">
      <input
        type="checkbox"
        class="shrink-0 mr-2"
        v-model="checkboxValue"
        :id="uniqueId"
      />
      <label class="text-sm" v-if="props.label" :for="uniqueId">{{
        props.label
      }}</label>
    </div>
    <span class="text-base-red text-sm" v-if="props.errorMessage">{{
      props.errorMessage
    }}</span>
  </div>
</template>
