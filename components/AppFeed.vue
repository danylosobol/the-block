<script setup lang="ts">
import type { Prisma, Tag } from "@prisma/client";
import type { IApiError, IQueryParams, ISafePost } from "~/types/interfaces";

interface IAppFeed {
  authorId: number | undefined;
  perPage?: number;
  postsInRow?: number;
}
const props = withDefaults(defineProps<IAppFeed>(), {
  perPage: 3,
  postsInRow: 3,
});
const appStore = useAppStore();
const page: Ref<number> = ref(1);
const selectedTags: Ref<Tag[]> = ref([]);
const perPage: Ref<number> = ref(props.perPage);
const refArgs: Ref<Prisma.PostWhereInput> = ref({
  tags: undefined,
  published: true,
});
const params: IQueryParams<Ref<Prisma.PostWhereInput>> = {
  page: page,
  size: perPage,
  args: refArgs,
};
const { getMany: getPosts } = useCrud<ISafePost>("/api/posts");
const {
  data: postRequestData,
  error: postRequestError,
  loading,
} = await getPosts<Ref<Prisma.PostWhereInput>>(params);
const { getMany: getTags } = useCrud<Tag>("/api/tags");
const { data: tagRequestData, error: tagRequestError } =
  await getTags<Prisma.TagWhereInput>({
    size: 5,
    args: {
      posts: {
        some: {
          published: true,
        },
      },
    },
  });

const updatePage = () => {
  perPage.value = perPage.value + props.perPage;
};
const toggleTag = (newTag: Tag): void => {
  perPage.value = props.perPage;
  selectedTags.value = selectedTags.value
    .map((tag) => tag.id)
    .includes(newTag.id)
    ? selectedTags.value.filter((tag) => tag.id !== newTag.id)
    : [...selectedTags.value, newTag];

  refArgs.value.tags =
    selectedTags.value.length > 0
      ? { some: { id: { in: selectedTags.value.map((tag) => tag.id) } } }
      : undefined;
};
watch(
  () => postRequestError.value,
  (newValue) => {
    if (newValue) {
      const apiError = newValue as IApiError;
      appStore.addMessage({
        type: "error",
        text: apiError.statusMessage,
      });
    }
  }
);
</script>

<template>
  <div class="flex flex-col-reverse md:flex-row items-start">
    <div class="flex flex-wrap w-full md:w-3/4 -mx-1.5 -mb-3">
      <template v-if="postRequestData?.data && postRequestData.data.length > 0">
        <AppPostItem
          class="w-full sm:w-1/2 lg:w-1/3 px-1.5 mb-3"
          :key="post?.id"
          :post="post"
          v-for="post in postRequestData.data"
        ></AppPostItem>
      </template>
      <p v-else class="text-center">No posts founded</p>
    </div>
    <div
      v-if="tagRequestData?.data"
      class="w-full mb-3 md:w-1/4 md:pl-3 md:mb-0"
    >
      <p>Popular tags</p>
      <AppTaxes
        :selected-taxes="selectedTags"
        @click:tax="toggleTag"
        :is-clickable="true"
        :taxes="tagRequestData.data"
      ></AppTaxes>
    </div>
  </div>
  <div class="w-full text-center mt-5">
    <AppButton
      :loading="loading"
      v-if="postRequestData?.meta && postRequestData.meta.totalPages > page"
      @click="updatePage"
      :to="!props.authorId ? '/login' : null"
      :type="props.authorId ? 'button' : undefined"
      >Load more</AppButton
    >
  </div>
</template>
