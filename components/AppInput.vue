<script setup lang="ts">
import type { IModelValueEmit, IModelValueProp } from "~/types/interfaces";

type TAppInputType = "text" | "password" | "email" | "tel";
interface IAppInputProps extends IModelValueProp<string> {
  type?: TAppInputType;
  errorMessage?: string | null;
  label?: string | null;
  loading?: boolean;
  placeholder?: string | undefined;
  autocomplete?: string | undefined;
  debounce?: number | null;
}
interface IAppInputEmits extends IModelValueEmit<string> {
  (e: "blur", value: Event): void;
  (e: "keydown:enter", value: Event): void;
}
const props = withDefaults(defineProps<IAppInputProps>(), {
  type: "text",
  errorMessage: null,
  label: null,
  placeholder: undefined,
  loading: false,
  autocomplete: undefined,
  debounce: null,
});
const emits = defineEmits<IAppInputEmits>();
const isPasswordVisible: Ref<boolean> = ref(false);
const inputType: Ref<TAppInputType> = ref(props.type);
const uniqueId: string = useId();

const inputValue = computed<string>({
  get: () => props.modelValue,
  set: (value) => {
    if (props.debounce && debouncedUpdate) {
      debouncedUpdate(value);
    } else {
      emits("update:model-value", value);
    }
  },
});

const debounce = <T extends (...args: any[]) => void>(
  func: T,
  timeout: number
) => {
  let timer: ReturnType<typeof setTimeout> | null = null;

  const debouncedFunction = (...args: Parameters<T>) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };

  debouncedFunction.cancel = () => {
    if (timer) clearTimeout(timer);
  };

  return debouncedFunction;
};

const debouncedUpdate = props.debounce
  ? debounce((value: string) => {
      emits("update:model-value", value);
    }, props.debounce)
  : null;

const toggleInputType = (): void => {
  inputType.value = inputType.value === "password" ? "text" : "password";
  isPasswordVisible.value = !isPasswordVisible.value;
};

onUnmounted(() => {
  if (debouncedUpdate) {
    debouncedUpdate.cancel();
  }
});
</script>

<template>
  <div class="w-full">
    <label
      class="block mb-1 text-sm font-medium cursor-pointer"
      v-if="props.label"
      :for="uniqueId"
      >{{ props.label }}</label
    >
    <div class="relative">
      <input
        @keydown.enter.prevent="(event) => emits('keydown:enter', event)"
        class="block text-md py-2 w-full px-2 border-1 rounded-sm border-base-dark outline-base-dark focus:border-base-dark"
        :class="{
          'pr-10': props.type === 'password' || props.loading,
        }"
        :autocomplete="props.autocomplete"
        :type="inputType"
        :id="uniqueId"
        v-model="inputValue"
        :placeholder="props.placeholder"
        @blur="(event) => emits('blur', event)"
      />

      <button
        class="text-xs absolute z-1 top-[50%] right-2 translate-y-[-50%] cursor-pointer"
        @click="toggleInputType"
        :type="'button'"
        v-if="props.type === 'password' && !props.debounce"
      >
        {{ isPasswordVisible ? "Hide" : "Show" }}
      </button>
      <IconApp
        v-if="props.loading"
        class="absolute z-1 top-[50%] right-2 translate-y-[-50%] h-[24px] w-[24px] animate-bounce custom-animation-duration fill-base-dark"
      ></IconApp>
    </div>
    <span class="text-base-red text-sm" v-if="props.errorMessage">{{
      props.errorMessage
    }}</span>
  </div>
</template>
