<script setup lang="ts">
export type TAppContainerType = "full-width" | "default";
interface IAppContainerProps {
  type?: TAppContainerType;
}

const props = withDefaults(defineProps<IAppContainerProps>(), {
  type: "default",
});
</script>

<template>
  <div
    :class="{
      'max-w-7xl': props.type === 'default',
      'max-w-full': props.type === 'full-width',
    }"
    class="mx-auto max-w-7xl w-full px-4 sm:px-6 md:px8"
  >
    <slot></slot>
  </div>
</template>
