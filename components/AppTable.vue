<script setup lang="ts" generic="T extends Record<string, any>">
import type { IAppTableColumn, IGetAllResponseMeta } from "~/types/interfaces";
interface Pagination extends IGetAllResponseMeta {}
interface IAppTableProps {
  rows: T[];
  columns: IAppTableColumn[];
  search?: string;
  pagination?: Pagination;
  notFound?: string;
}

interface IAppTableEmits {
  (e: "update:search", value: string): void;
  (e: "update:pagination", value: Pagination): void;
}

const props = withDefaults(defineProps<IAppTableProps>(), {
  pagination: () => ({
    page: 1,
    size: 5,
    total: 1,
    totalPages: 1,
  }),
  search: "",
  notFound: "No data",
});
const emits = defineEmits<IAppTableEmits>();

const searchValue = computed<string>({
  get: () => props.search,
  set: (value) => emits("update:search", value),
});
const paginationValue = computed({
  get: () => props.pagination,
  set: (value) => emits("update:pagination", value),
});
const columns = computed(() => props.columns);
const rows = computed(() => props.rows);
const updateCurrentPage = (newPage: number): void => {
  paginationValue.value = {
    ...paginationValue.value,
    page: newPage,
  };
};
const updateCurrentSize = (newSize: number): void => {
  paginationValue.value = {
    ...paginationValue.value,
    page: 1,
    size: newSize,
  };
};
</script>

<template>
  <div class="shadow-sm p-3 rounded-sm">
    <div class="flex gap-3 justify-between">
      <AppInput
        class="max-w-sm"
        :type="'text'"
        :label="'Search:'"
        :debounce="300"
        v-model="searchValue"
      ></AppInput>
      <AppSelect
        class="max-w-[70px]"
        :label="'Per page:'"
        @update:model-value="updateCurrentSize"
        :model-value="pagination.size"
        :options="[
          { label: '5', value: 5 },
          { label: '10', value: 10 },
          { label: '15', value: 15 },
          { label: '20', value: 20 },
        ]"
      ></AppSelect>
    </div>
    <div class="overflow-x-auto">
      <div class="min-w-lg">
        <div class="mt-5 border-1 border-primary rounded-sm">
          <table class="w-full">
            <thead
              class="border-b-1 border-primary"
              v-if="columns && columns.length > 0"
            >
              <tr class="text-left p-2 border-primary">
                <th
                  v-for="col in columns"
                  :key="col.name"
                  :style="col.style"
                  class="p-2"
                  scope="col"
                >
                  <slot :name="`header-${col.name}`">
                    {{ col.label }}
                  </slot>
                </th>
              </tr>
            </thead>
            <tbody v-if="rows && rows.length > 0">
              <tr v-for="(post, index) in rows" :key="index" class="text-left">
                <td v-for="col in columns" :key="col.name" class="p-2">
                  <slot :name="`cell-${col.name}`" :row="post">
                    {{ post?.[col.field] }}
                  </slot>
                </td>
              </tr>
            </tbody>
            <tbody v-else>
              <tr>
                <td
                  :colspan="columns.length"
                  class="p-4 text-center text-base-dark opacity-70"
                >
                  {{ props.notFound }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div v-if="paginationValue.total > paginationValue.size">
      <AppPagination
        @update:current-page="updateCurrentPage"
        :page="paginationValue.page"
        :size="paginationValue.size"
        :total="paginationValue.total"
      ></AppPagination>
    </div>
  </div>
</template>
