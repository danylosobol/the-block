<script setup lang="ts">
import type { File } from "@prisma/client";

interface IAppFeaturedImageProps {
  image: File | null;
}

const props = defineProps<IAppFeaturedImageProps>();
</script>

<template>
  <div
    class="w-full h-auto aspect-16/9 rounded-sm overflow-hidden bg-base-dark mb-3 flex items-center justify-center"
  >
    <img
      v-if="props?.image?.id"
      :src="`/files/${props.image.id}`"
      :alt="props.image.filename"
      class="mb-0 h-full w-full object-cover"
    />
    <IconApp
      v-else
      class="fill-base-light max-h-[40px] max-w-[40px] aspect-square"
    ></IconApp>
  </div>
</template>
