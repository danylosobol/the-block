<script setup lang="ts">
import type { ISafePost } from "~/types/interfaces";

interface IAppPostItemProps {
  post: ISafePost;
}

const props = defineProps<IAppPostItemProps>();
</script>

<template>
  <div class="flex">
    <NuxtLink
      :to="`/posts/${props.post.id}`"
      class="border-1 border-base-dark bg-base-light text-base-dark rounded-sm p-4 w-full"
    >
      <AppPostFeatureImage
        :image="props.post?.featuredImage"
      ></AppPostFeatureImage>
      <AppTaxes
        class="mb-3"
        v-if="props.post.tags && props.post.tags.length > 0"
        :taxes="props.post.tags"
      ></AppTaxes>
      <slot name="post-title" :post="props.post">
        <h2 class="mb-3">{{ props.post.title }}</h2>
      </slot>
      <p class="line-clamp-3 min-h-[100px]" v-if="props.post.content">
        {{ props.post.content.replace(/<\/?[^>]+(>|$)/g, "") }}
      </p>
    </NuxtLink>
  </div>
</template>
