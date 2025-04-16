<script setup lang="ts">
import type { ISafePost } from "~/types/interfaces";
useSeoMeta({
  title: "Update post - The block.",
});
definePageMeta({
  middleware: ["post"],
  requiresAuth: true,
});
const route = useRoute();
const { getById } = useCrud<ISafePost>("/api/posts");
const { data } = await getById(Number(route.params.id));

if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}
</script>

<template>
  <section class="py-5">
    <AppContainer :type="'full-width'">
      <h1 class="text-2xl underline underline-offset-3">Edit post</h1>
      <AppPostForm
        :post-id="Number(route.params.id)"
        :post-data="data"
        :mode="'edit'"
      ></AppPostForm>
    </AppContainer>
  </section>
</template>
