<script setup lang="ts">
const header: Ref<HTMLElement | null> = ref(null);
const { height } = useElementSize(header);
const computedHeight = computed<number>(() =>
  header.value ? height.value : 56
);
</script>

<template>
  <AppHeader ref="header" class="fixed w-full left-0 top-0 z-5"></AppHeader>
  <main
    class="min-h-screen flex flex-col bg-base-light"
    :style="{
      paddingTop: computedHeight + 'px',
      '--header-height': computedHeight + 'px',
    }"
  >
    <NuxtPage />
  </main>
</template>
