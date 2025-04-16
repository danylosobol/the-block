<script setup lang="ts">
import type { Prisma } from "~/src/generated/prisma";
import type { Reactive } from "vue";
import type {
  IAppTableColumn,
  IGetAllResponseMeta,
  IQueryParams,
  ISafePost,
} from "~/types/interfaces";
useSeoMeta({
  title: "My posts - The block.",
});
definePageMeta({
  requiresAuth: true,
});

const userStore = useUserStore();
const currentUser = userStore.getCurrentUser;
const {
  data: deleteData,
  error: deleteError,
  loading: deleteLoading,
  sendRequest,
} = useApi();
const isPopupOpened: Ref<boolean> = ref(false);
const currentPostId: Ref<number | null> = ref(null);
const appStore = useAppStore();
const { getMany } = useCrud<ISafePost>("/api/posts");
const search: Ref<string> = ref("");
const currentPage: Ref<number> = ref(1);
const currentSize: Ref<number> = ref(5);
const params: IQueryParams<Ref<Prisma.PostWhereInput>> = {
  page: currentPage,
  search: search,
  size: currentSize,
  args: ref({
    authorId: currentUser?.id,
  }),
};
const { data, error, loading, refresh } = await getMany<
  Ref<Prisma.PostWhereInput>
>(params);
const rows = computed<ISafePost[]>(() => data.value?.data ?? []);
const meta = computed<IGetAllResponseMeta>(
  () =>
    data.value?.meta ?? {
      size: currentSize.value,
      page: currentPage.value,
      total: 1,
      totalPages: 1,
    }
);

const updatePagination = (newPagination: IGetAllResponseMeta) => {
  if (currentPage.value !== newPagination.page) {
    currentPage.value = newPagination.page;
  }
  if (currentSize.value !== newPagination.size) {
    currentSize.value = newPagination.size;
  }
};

const updateSearch = (newValue: string): void => {
  if (newValue !== search.value) {
    search.value = newValue;
  }
  currentPage.value = 1;
};
const columns: Reactive<IAppTableColumn[]> = reactive([
  {
    name: "title",
    label: "Post title",
    field: "title",
    style: {
      width: "30%",
    },
  },
  {
    name: "published",
    label: "Post status",
    field: "published",
    style: {
      width: "20%",
    },
  },
  {
    name: "tags",
    label: "Post tags",
    field: "tags",
    style: {
      width: "20%",
    },
  },
  {
    name: "created_at",
    label: "Date",
    field: "created_at",
    style: {
      width: "10%",
    },
  },
]);

const openPopup = (postId: number): void => {
  isPopupOpened.value = true;
  currentPostId.value = postId;
};

const deletePost = async (): Promise<void> => {
  if (!currentPostId.value) {
    appStore.addMessage({
      type: "error",
      text: "Failted to delete post.",
    });
    return;
  }

  await sendRequest(() =>
    $fetch<boolean>(`/api/posts/${currentPostId.value}`, {
      method: "DELETE",
    })
  );

  if (deleteError.value) {
    appStore.addMessage({
      type: "error",
      text: deleteError.value.statusMessage,
    });
    return;
  }

  if (deleteData.value) {
    appStore.addMessage({
      type: "success",
      text: "The post was successfully deleted",
    });
    refresh();
    isPopupOpened.value = false;
  }
};
</script>

<template>
  <section class="py-5">
    <AppContainer>
      <h1 class="text-2xl">My posts</h1>
      <AppTable
        as="ISafePost"
        class="mt-5"
        :columns="columns"
        :rows="rows"
        :pagination="meta"
        @update:pagination="updatePagination"
        @update:search="updateSearch"
      >
        <template #cell-title="{ row }">
          <div class="group h-full">
            <span>{{ row.title }}</span>
            <div
              class="mt-2 lg:opacity-0 transition-opacity group-hover:opacity-100"
            >
              <NuxtLink class="mr-2" :to="`/posts/update/${row.id}`"
                >Edit</NuxtLink
              >
              <NuxtLink :to="`/posts/${row.id}`">View</NuxtLink>
              <button
                class="text-base-red ml-2 cursor-pointer"
                @click="() => openPopup(row.id)"
                type="button"
              >
                Delete
              </button>
            </div>
          </div>
        </template>
        <template #cell-published="{ row }">
          {{ row.published ? "Public" : "Draft" }}
        </template>
        <template #cell-tags="{ row }">
          <AppTaxes v-if="row.tags.length > 0" :taxes="row.tags"></AppTaxes>
          <span v-else>No tags</span>
        </template>
        <template #cell-created_at="{ row }">
          {{ new Date(row.created_at).toLocaleString() }}
        </template>
      </AppTable>
    </AppContainer>
    <Teleport to="#teleports">
      <AppPopup v-model="isPopupOpened">
        <div class="min-w-md">
          <p class="text-center">Confirm your deleting action</p>
          <div class="flex gap-3 justify-center mt-5">
            <AppButton @click="deletePost" :loading="deleteLoading"
              >Yes</AppButton
            >
            <AppButton @click="isPopupOpened = false">No</AppButton>
          </div>
        </div>
      </AppPopup>
    </Teleport>
  </section>
</template>
