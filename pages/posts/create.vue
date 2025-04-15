<script setup lang="ts">
definePageMeta({
  requiresAuth: true,
});
</script>

<template>
  <section class="py-5">
    <AppContainer :type="'full-width'">
      <h1 class="text-2xl underline underline-offset-3">Write new post</h1>
      <AppPostForm :post-data="null" :mode="'create'"></AppPostForm>
    </AppContainer>
  </section>
</template>
