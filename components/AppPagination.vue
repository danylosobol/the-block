<script setup lang="ts">
import type { IGetAllResponseMeta } from "~/types/interfaces";

interface IAppPaginationProps extends Omit<IGetAllResponseMeta, "totalPages"> {
  max?: number;
}

interface IAppPaginationEmits {
  (e: "update:currentPage", value: number): void;
}

const props = withDefaults(defineProps<IAppPaginationProps>(), {
  max: 3,
});
const emits = defineEmits<IAppPaginationEmits>();
const totalPages = computed<number>(() => Math.ceil(props.total / props.size));
const pages = computed<number[]>(() => {
  const pages = [];
  let start = Math.max(1, props.page - Math.floor(props.max / 2));
  let end = Math.min(totalPages.value, start + props.max - 1);

  if (end - start + 1 < props.max) {
    start = Math.max(1, end - props.max + 1);
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return pages;
});
const goToPage = (page: number): void => {
  if (page >= 1 && page <= totalPages.value) {
    emits("update:currentPage", page);
  }
};
</script>

<template>
  <div class="flex items-center justify-center space-x-2">
    <button
      type="button"
      class="cursor-pointer"
      v-if="page > 1"
      @click="goToPage(page - 1)"
    >
      Previous
    </button>

    <ul class="flex flex-wrap">
      <li v-for="p in pages" :key="p" class="p-2">
        <button
          type="button"
          :class="{ underline: p === page }"
          class="cursor-pointer"
          @click="goToPage(p)"
          :disabled="p === page"
        >
          {{ p }}
        </button>
      </li>
    </ul>

    <button
      type="button"
      class="cursor-pointer"
      v-if="page < totalPages"
      @click="goToPage(page + 1)"
    >
      Next
    </button>
  </div>
</template>
