<script setup lang="ts">
import type { File, Tag } from "~/src/generated/prisma";
import type { IPostTaxes } from "~/types/interfaces";

interface IAppPostFormSidebarProps {
  taxes: IPostTaxes;
  status: boolean;
  featuredImage: File | null;
}
type TTaxType = "tags";
interface IAppPostFormSidebarEmits {
  (
    e: "attach:taxes",
    value: {
      [keyof in TTaxType]: number[];
    }
  ): void;
  (
    e: "dettach:taxes",
    value: {
      [keyof in TTaxType]: number[];
    }
  ): void;
  (e: "update:status", value: boolean): void;
  (e: "update:featured-image", value: File | null): void;
}
interface ITaxData {
  name: string;
  type: TTaxType;
}
const taxData: Ref<ITaxData> = ref({
  name: "",
  type: "tags",
});
const appStore = useAppStore();
const isPopupOpened: Ref<boolean> = ref(false);
const tagName: Ref<string> = ref("");
const props = defineProps<IAppPostFormSidebarProps>();
const emits = defineEmits<IAppPostFormSidebarEmits>();
const popupMessage = computed<string>(
  () => `Do you want to create the "${taxData.value.name}"`
);
const statusValue = computed<boolean>({
  get: () => props.status,
  set: (value) => emits("update:status", value),
});
const featuredImageValue = computed<File | null>({
  get: () => props.featuredImage,
  set: (value) => emits("update:featured-image", value),
});

const updateTaxValue = (
  taxType: TTaxType,
  newValue: number[],
  currentValue: number[]
) => {
  const added = newValue.filter((id) => !currentValue.includes(id));
  const removed = currentValue.filter((id) => !newValue.includes(id));

  if (added.length > 0) {
    emits("attach:taxes", {
      tags: taxType === "tags" ? added : [],
    });
  }

  if (removed.length > 0) {
    emits("dettach:taxes", {
      tags: taxType === "tags" ? removed : [],
    });
  }
};
const tagsValue = computed<number[]>({
  get: () => props.taxes.tags,
  set: (value) => updateTaxValue("tags", value, tagsValue.value),
});

const openTaxPopup = (taxName: string, taxType: TTaxType) => {
  isPopupOpened.value = true;
  taxData.value = {
    name: taxName,
    type: taxType,
  };
};
const { data, error, loading, sendRequest } = useApi();

const createTax = async (): Promise<void> => {
  await sendRequest(() =>
    $fetch<unknown>(`/api/${taxData.value.type}`, {
      method: "POST",
      body: {
        name: taxData.value.name,
        slug: taxData.value.name
          .toLowerCase()
          .replace(/[^\p{L}\d\s-]/gu, "")
          .replace(/\s+/g, "-")
          .replace(/-+/g, "-")
          .trim(),
      },
    })
  );

  if (error.value) {
    appStore.addMessage({
      type: "error",
      text: error.value.statusMessage,
    });
    resetPopup();
    return;
  }

  if (data.value) {
    appStore.addMessage({
      type: "success",
      text: `The ${taxData.value.name} was successfully created`,
    });
    resetPopup();

    if (taxData.value.type === "tags") {
      const newTag = data.value as Tag;
      tagsValue.value = [...tagsValue.value, newTag.id];
    }
  }
};
const resetPopup = (): void => {
  tagName.value = "";
  isPopupOpened.value = false;
};
</script>

<template>
  <div>
    <AppSelect
      class="mb-5"
      :label="'Post status'"
      :placeholder="'Select a status'"
      :options="[
        { label: 'Draft', value: false },
        { label: 'Public', value: true },
      ]"
      v-model="statusValue"
    ></AppSelect>
    <AppDynamicSelect
      class="mb-5"
      :endpoint="'/api/tags'"
      :multiple="true"
      v-model:search-value="tagName"
      v-model:model-value="tagsValue"
      :search-mode="true"
      @keydown:enter="() => openTaxPopup(tagName, 'tags')"
      :label="'Post tags'"
    ></AppDynamicSelect>
    <AppPostFormFeaturedImage
      v-model="featuredImageValue"
      class="mb-5 max-w-full"
    ></AppPostFormFeaturedImage>
    <Teleport to="#teleports">
      <AppPopup v-model="isPopupOpened">
        <p class="text-center sm:mt-0 mt-10">
          {{ popupMessage }}
        </p>
        <div class="flex gap-3 mt-3">
          <AppButton class="w-full" :loading="loading" @click="createTax"
            >Yes</AppButton
          >
          <AppButton class="w-full" @click="() => (isPopupOpened = false)"
            >No</AppButton
          >
        </div>
      </AppPopup>
    </Teleport>
  </div>
</template>
