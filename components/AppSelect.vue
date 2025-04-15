<script setup lang="ts">
import { computed, ref } from "vue";
import type { IModelValueEmit, IModelValueProp } from "~/types/interfaces";

export interface IAppSelectOption {
  value: any;
  label: string;
  disabled?: boolean;
}

export interface IAppSelectProps extends IModelValueProp<any | any[]> {
  options: IAppSelectOption[];
  placeholder?: string;
  label?: string | null;
  errorMessage?: string | null;
  multiple?: boolean;
  searchMode?: boolean;
  loading?: boolean;
  searchValue?: string;
}

export interface IAppSelectEmits extends IModelValueEmit<any | any[]> {
  (e: "scrollend", value: Event): void;
  (e: "filter", value: string): void;
  (e: "keydown:enter", value: Event): void;
  (e: "update:search-value", value: string): void;
}

const props = withDefaults(defineProps<IAppSelectProps>(), {
  label: null,
  errorMessage: null,
  multiple: false,
  inputMode: false,
  placeholder: "Select an option",
  loading: false,
  searchValue: "",
});

const emits = defineEmits<IAppSelectEmits>();

const computedOptions = computed<IAppSelectOption[]>(() => props.options || []);
const uniqueId: string = useId();
const isOpened = ref<boolean>(false);
const target = useTemplateRef<HTMLElement>("selectElement");

const searchValue = computed<string>({
  get: () => props.searchValue ?? "",
  set: (value) => emits("update:search-value", value),
});

const selectValue = computed<any | any[]>({
  get: () => props.modelValue,
  set: (value) => emits("update:model-value", value),
});

const scrollEndHandler = (event: Event): void => {
  const target = event.target as HTMLElement;

  if (target && target.scrollTop + target.clientHeight >= target.scrollHeight) {
    emits("scrollend", event);
  }
};

const displayValue = computed<string>(() => {
  if (props.multiple && Array.isArray(selectValue.value)) {
    return selectValue.value.length > 0
      ? `Selected ${selectValue.value.length} option(s)`
      : props.placeholder;
  }

  if (!props.multiple && !Array.isArray(selectValue.value)) {
    return getOptionLabel(selectValue.value);
  }

  return props.placeholder;
});

const optionHandler = (newValue: any): void => {
  if (props.multiple) {
    if (Array.isArray(selectValue.value)) {
      const isSelected = selectValue.value.some((item) => item === newValue);

      if (isSelected) {
        selectValue.value = selectValue.value.filter(
          (item) => item !== newValue
        );
      } else {
        selectValue.value = [...selectValue.value, newValue];
      }
    } else {
      selectValue.value = [newValue];
    }
  } else {
    selectValue.value = newValue;
  }

  if (!props.multiple) {
    isOpened.value = false;
  }
};

const isOptionSelected = (option: any): boolean => {
  if (props.multiple) {
    if (Array.isArray(selectValue.value)) {
      return selectValue.value.includes(option);
    }
  } else {
    if (!Array.isArray(selectValue.value)) {
      return selectValue.value === option;
    }
  }
  return false;
};

const getOptionLabel = (value: any): string => {
  return (
    computedOptions.value.find((item) => item.value === value)?.label ?? ""
  );
};

onClickOutside(target, (event) => {
  if (isOpened.value) {
    isOpened.value = !isOpened.value;
  }
});
</script>

<template>
  <div class="w-full">
    <div ref="selectElement" class="relative">
      <label
        class="block mb-1 text-sm font-medium cursor-pointer"
        v-if="props.label"
        :for="uniqueId"
        >{{ props.label }}</label
      >

      <select
        class="hidden"
        v-model="selectValue"
        :multiple="multiple"
        :id="uniqueId"
      >
        <template v-if="computedOptions.length > 0">
          <option
            v-for="(option, index) in computedOptions"
            :value="option.value"
            :key="index"
            :disabled="option.disabled"
          >
            {{ option.label }}
          </option>
        </template>
      </select>

      <div
        class="relative text-md w-full border-1 cursor-pointer rounded-sm border-primary outline-primary h-[42px]"
      >
        <div
          @click="isOpened = !isOpened"
          class="w-[calc(100%-20px)] block select-none p-2 h-full max-h-full"
          :class="{
            'opacity-70': displayValue === props.placeholder,
          }"
        >
          <span class="block whitespace-nowrap overflow-hidden text-ellipsis">
            {{ displayValue }}
          </span>
        </div>

        <div
          :class="{ 'rotate-180': isOpened }"
          class="absolute top-[50%] -translate-y-[50%] right-[5px] transition-transform"
        >
          &#11206;
        </div>
      </div>
      <div
        :class="{
          hidden: !isOpened,
        }"
        class="absolute left-0 top-[calc(100%+1px)] w-full bg-base-light z-1 shadow-sm"
      >
        <div v-if="searchMode" class="p-1">
          <AppInput
            v-model="searchValue"
            :debounce="100"
            @keydown:enter="(event) => emits('keydown:enter', event)"
            @update:model-value="(value) => emits('filter', value)"
            :loading="props.loading"
          ></AppInput>
        </div>

        <ul
          @scrollend="scrollEndHandler"
          class="max-h-[136px] overflow-y-auto py-2"
        >
          <template v-if="computedOptions && computedOptions.length > 0">
            <li
              :class="{
                'cursor-not-allowed': isOptionSelected(option.value),
                'bg-base-dark text-base-light':
                  isOptionSelected(option.value) && !props.multiple,
                'hover:bg-base-dark hover:text-base-light cursor-pointer':
                  !isOptionSelected(option.value),
              }"
              class="p-2 transition-colors select-none whitespace-nowrap overflow-hidden text-ellipsis text-base-dark"
              v-for="option in computedOptions"
              :key="option.value"
              @click="() => optionHandler(option.value)"
            >
              {{
                props.multiple && isOptionSelected(option.value)
                  ? "&#10004;"
                  : ""
              }}
              {{ option.label }}
            </li>
          </template>
          <li
            v-else
            class="p-2 cursor-pointer transition-colors select-none whitespace-nowrap overflow-hidden text-ellipsis"
          >
            No options
          </li>
        </ul>
      </div>
    </div>

    <span class="text-base-rd text-sm" v-if="props.errorMessage">{{
      props.errorMessage
    }}</span>
  </div>
</template>
