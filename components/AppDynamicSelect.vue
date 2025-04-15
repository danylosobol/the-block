<script setup lang="ts">
import type {
  IAppSelectEmits,
  IAppSelectOption,
  IAppSelectProps,
} from "~/components/AppSelect.vue";
import type { IQueryParams } from "~/types/interfaces";

type TTransformer = {
  label: string;
  value: string;
};

type TEntity = Record<string, any>;

interface IAppDynamicSelectProps extends Omit<IAppSelectProps, "options"> {
  endpoint: string;
  entityPerPage?: number;
  entityCurrentPage?: number;
  transformer?: TTransformer;
}

interface IAppDynamicSelectEmits extends IAppSelectEmits {}

const props = withDefaults(defineProps<IAppDynamicSelectProps>(), {
  label: null,
  errorMessage: null,
  multiple: false,
  inputMode: false,
  placeholder: "Select an option",
  loading: false,
  searchValue: "",
  entityPerPage: 4,
  entityCurrentPage: 1,
  transformer: () => ({
    label: "name",
    value: "id",
  }),
});

const emits = defineEmits<IAppDynamicSelectEmits>();

const selectValue = computed<any | any[]>({
  get: () => props.modelValue,
  set: (value) => emits("update:model-value", value),
});

const searchValue = computed<string>({
  get: () => props.searchValue,
  set: (value) => emits("update:search-value", value),
});
const page: Ref<number> = ref(props.entityCurrentPage);
const perPage: Ref<number> = ref(props.entityPerPage);
const canLoadMore: Ref<boolean> = ref(true);
const wasFilterUsed: Ref<boolean> = ref(false);
const queryParams: IQueryParams = {
  page: page,
  size: perPage,
  search: searchValue,
};

const filterHandler = (): void => {
  canLoadMore.value = true;
  wasFilterUsed.value = true;
  page.value = props.entityCurrentPage;
  if (queryParams.page) {
  }
};

const loadMore = (): void => {
  if (!canLoadMore.value) {
    return;
  }
  page.value = page.value + 1;
};

const { data } = await useFetch<TEntity>(props.endpoint, {
  method: "GET",
  query: queryParams,
});

const dynamicOptions: Ref<IAppSelectOption[]> = ref([]);

const mapOptions = (item: TEntity): IAppSelectOption => {
  if (
    !item ||
    typeof item !== "object" ||
    !item.hasOwnProperty(props.transformer.value) ||
    !item.hasOwnProperty(props.transformer.label)
  ) {
    throw new Error("Item does not match the expected structure");
  }

  return {
    value: item[props.transformer.value],
    label: item[props.transformer.label],
  };
};

watch(
  data,
  (newData) => {
    if (newData?.data) {
      if (wasFilterUsed.value) {
        dynamicOptions.value = [];
      }
      wasFilterUsed.value = false;
      dynamicOptions.value = !searchValue.value
        ? [...dynamicOptions.value, ...newData.data.map(mapOptions)]
        : newData.data.map(mapOptions);
    }
    if (newData?.meta) {
      canLoadMore.value = newData.meta.totalPages > newData.meta.page;
    }
  },
  { immediate: true }
);
</script>

<template>
  <div class="w-full">
    <AppSelect
      @keydown:enter="(event) => emits('keydown:enter', event)"
      @scrollend="loadMore"
      @filter="filterHandler"
      :placeholder="props.placeholder"
      v-model:model-value="selectValue"
      v-model:search-value="searchValue"
      :loading="loading"
      :options="dynamicOptions"
      :multiple="props.multiple"
      :search-mode="props.searchMode"
      :label="props.label"
    ></AppSelect>
  </div>
</template>
