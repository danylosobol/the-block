<script setup lang="ts">
interface IAppLoaderProps {
  loading?: boolean;
  size?: number | null;
}
const props = withDefaults(defineProps<IAppLoaderProps>(), {
  loading: false,
  size: null,
});
</script>

<template>
  <Transition name="app-fade" mode="in-out">
    <div
      v-if="props.loading"
      class="absolute w-full h-full inset-0 flex justify-center items-center p-2 overflow-hidden"
    >
      <IconApp
        :style="{ 'max-height': size ? size + 'px' : 'auto' }"
        class="max-h-full aspect-square w-auto animate-bounce fill-inherit"
      ></IconApp>
    </div>
  </Transition>
</template>
