<script setup lang="ts">
import type { File } from "~/src/generated/prisma";
import type { IModelValueEmit, IModelValueProp } from "~/types/interfaces";

interface IAppPostFormFeaturedImageProps extends IModelValueProp<File | null> {}
interface IAppPostFormFeaturedImageEmits extends IModelValueEmit<File | null> {}
const props = defineProps<IAppPostFormFeaturedImageProps>();
const emits = defineEmits<IAppPostFormFeaturedImageEmits>();

const appStore = useAppStore();
const featuredImage = computed<File | null>({
  get: () => props.modelValue,
  set: (value) => emits("update:model-value", value),
});

const isPopupOpened: Ref<boolean> = ref(false);
const { handleFileInput, files, clearFiles } = useFileStorage();
const { data, error, loading, sendRequest } = useApi();
const createImage = async (): Promise<void> => {
  await sendRequest(() =>
    $fetch<File[]>("/api/files", {
      method: "POST",
      body: {
        files: files.value,
      },
    })
  );

  if (error.value) {
    appStore.addMessage({
      type: "error",
      text: error.value.statusMessage,
    });

    return;
  }

  if (data.value && Array.isArray(data.value)) {
    featuredImage.value = data.value[0];
    isPopupOpened.value = false;
  }
};

const deleteImage = async (): Promise<void> => {
  if (!featuredImage.value) {
    return;
  }
  await sendRequest(() =>
    $fetch<boolean>(`/api/files/${featuredImage.value?.id}`, {
      method: "DELETE",
    })
  );

  if (error.value) {
    appStore.addMessage({
      type: "error",
      text: error.value.statusMessage,
    });

    return;
  }

  if (data.value) {
    featuredImage.value = null;
    clearFiles();
  }
};

const clear = (): void => {
  clearFiles();
};
</script>

<template>
  <div>
    <AppButton v-if="!featuredImage" @click="() => (isPopupOpened = true)"
      >Add feature image</AppButton
    >
    <template v-else>
      <div class="relative">
        <img
          class="w-full aspect-16/9 rounded-sm object-cover"
          :src="`/files/${featuredImage?.id}`"
          alt=""
        />
        <div class="absolute right-[5px] bottom-[5px] z-1">
          <AppButton @click="deleteImage">Delete </AppButton>
        </div>
      </div>
    </template>

    <Teleport to="#teleports">
      <AppPopup
        @transition:end="clear"
        v-if="!featuredImage"
        v-model="isPopupOpened"
      >
        <div
          class="sm:min-w-md sm:max-w-md mt-10 sm:mt-0 flex flex-col justify-center items-center"
        >
          <p class="mb-3">Upload image:</p>
          <AppFileInput
            @update:file="handleFileInput"
            :files="files"
            class="flex !w-auto"
          ></AppFileInput>
          <AppButton
            :loading="loading"
            @click="createImage"
            v-if="files && files.length > 0"
            class="w-full mt-3"
            >Add feature image</AppButton
          >
        </div>
      </AppPopup>
    </Teleport>
  </div>
</template>
