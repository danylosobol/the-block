<script setup lang="ts">
import type { ISafePost } from "~/types/interfaces";

definePageMeta({
  middleware: ["post"],
});

const route = useRoute();
const { getById } = useCrud<ISafePost>("/api/posts");
const { data } = await getById(Number(route.params.id));

useSeoMeta({
  title: `${data.value?.title ?? "Single post"} - The block.`,
  description: `${(data.value?.content ?? "Single post")
    .replace(/<[^>]+>/g, "")
    .trim()
    .split(/\s+/)
    .slice(0, 15)
    .join(" ")} - The block.`,
});
</script>
<template>
  <section class="bg-base-dark py-2 text-base-light">
    <AppContainer>
      <h1
        class="text-center text-2xl md:text-5xl my-5 line-clamp-3"
        v-if="data?.title"
      >
        {{ data.title }}
      </h1>
      <AppPostFeatureImage
        class="max-w-xl mx-auto"
        v-if="data?.featuredImage"
        :image="data.featuredImage"
      ></AppPostFeatureImage>
    </AppContainer>
  </section>
  <section class="py-2">
    <AppContainer>
      <div v-if="data?.content" class="content" v-html="data?.content"></div>
    </AppContainer>
  </section>
</template>

<style scoped lang="scss">
.content {
  & > * {
    margin-bottom: 10px;
  }
}
</style>
