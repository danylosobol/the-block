<script setup lang="ts">
import { NuxtLink } from "#components";
import type { RouteLocationRaw } from "vue-router";

type TAppButtonType = "submit" | "button";
interface IAppButtonProps {
  type?: TAppButtonType;
  loading?: boolean;
  to?: RouteLocationRaw | null;
  disabled?: boolean;
}

const props = withDefaults(defineProps<IAppButtonProps>(), {
  type: "button",
  loading: false,
  disabled: false,
  to: null,
  params: null,
});
const isRouterLink = computed<boolean>(() => !!props.to);
</script>

<template>
  <Component
    :is="isRouterLink ? NuxtLink : 'button'"
    :to="props.to"
    :disabled="props.disabled || props.loading"
    :type="!isRouterLink ? props.type : ''"
    :class="{
      'text-transparent': props.loading,
      'cursor-pointer': props.disabled || !props.loading,
      'cursor-not-allowed': props.disabled || props.loading,
      'hover:text-base-dark hover:bg-base-light': !props.loading,
    }"
    class="relative text-center transition-colors inline-block text-base-light bg-base-dark border-1 border-base-dark p-2 rounded-sm min-w-20"
  >
    <slot></slot>
    <Transition name="app-fade">
      <AppLoader
        class="p-1 max-h-[40px] fill-base-light"
        :loading="props.loading"
      ></AppLoader>
    </Transition>
  </Component>
</template>
