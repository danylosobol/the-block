<script setup lang="ts">
import type {
  IPostCreateInput,
  IPostTaxes,
  IPostUpdateInput,
  ISafePost,
} from "~/types/interfaces";
type TAppPostFormMode = "create" | "edit";
interface IAppPostFormProps {
  mode: TAppPostFormMode;
  postData: null | ISafePost;
  postId?: number | null;
}
const props = withDefaults(defineProps<IAppPostFormProps>(), {
  postId: null,
});

const appStore = useAppStore();
const userStore = useUserStore();
const currentUser = userStore.getCurrentUser;
const isCreation = computed<boolean>(() => props.mode === "create");

const transformData = (
  postData: ISafePost | null
): IPostCreateInput | IPostUpdateInput => {
  const base = {
    title: postData?.title ?? "",
    content: postData?.content ?? "",
    authorId: postData?.authorId ?? currentUser?.id ?? 0,
    published: postData?.published ?? false,
    featuredImage: postData?.featuredImage ?? null,
    attachTaxes: {
      tags: postData?.tags.map((tag) => tag.id) ?? [],
    },
  };

  if (isCreation.value) {
    return base as IPostCreateInput;
  }

  return {
    ...base,
    dettachTaxes: {
      tags: [],
    },
  } as IPostUpdateInput;
};

const formData: Ref<IPostCreateInput | IPostUpdateInput> = ref(
  isCreation.value
    ? (transformData(props.postData) as IPostCreateInput)
    : (transformData(props.postData) as IPostUpdateInput)
);
const buttonText = computed<string>(() => {
  return isCreation.value ? "Publish" : "Update";
});

const updateTaxes = (taxes: IPostTaxes, type: "attach" | "dettach"): void => {
  const formDataValue = formData.value;

  if (type === "attach" && "attachTaxes" in formDataValue) {
    const { attachTaxes } = formDataValue;
    (["tags"] as const).forEach((key) => {
      if (attachTaxes && attachTaxes[key]) {
        attachTaxes[key] = [...attachTaxes[key], ...taxes[key]];
      } else {
        attachTaxes[key] = [...taxes[key]];
      }
    });
  }

  if (type === "dettach") {
    if (!("dettachTaxes" in formDataValue)) {
      return;
    }

    if (!formDataValue.dettachTaxes) {
      formDataValue.dettachTaxes = { tags: [] };
    }

    (["tags"] as const).forEach((key) => {
      if (taxes[key]) {
        formDataValue.dettachTaxes![key] = [...taxes[key]];

        if (
          "attachTaxes" in formDataValue &&
          formDataValue.attachTaxes?.[key]
        ) {
          formDataValue.attachTaxes[key] = formDataValue.attachTaxes[
            key
          ].filter((item: number) => !taxes[key].includes(item));
        }
      }
    });
  }
};

const updateStatus = (newValue: boolean): void => {
  formData.value.published = newValue;
};

const {
  data: postRequestData,
  error: postRequestError,
  loading: postRequestLoading,
  sendRequest: postRequest,
} = useApi();

const submit = async (): Promise<void> => {
  await postRequest(() =>
    $fetch<unknown>(
      isCreation.value && !props.postId
        ? "/api/posts"
        : `/api/posts/${props.postId}`,
      {
        method: isCreation.value ? "POST" : "PUT",
        body: formData.value,
      }
    )
  );

  if (postRequestError.value) {
    appStore.addMessage({
      type: "error",
      text: postRequestError.value.statusMessage,
    });
    return;
  }

  if (postRequestData.value) {
    appStore.addMessage({
      type: "success",
      text: isCreation.value
        ? "Post was successfully created"
        : "Post was successfully updated",
    });
  }
};
</script>

<template>
  <form @submit.prevent="submit" class="flex mt-3 lg:flex-row flex-col-reverse">
    <div class="w-full">
      <AppInput
        placeholder="Enter post title"
        v-model="formData.title"
        type="text"
        class="mb-5"
      ></AppInput>
      <AppWysiwygEditor
        v-model="formData.content"
        class="flex flex-col"
        placeholder="Enter post content"
      ></AppWysiwygEditor>
    </div>
    <div class="shrink-0 w-full lg:max-w-md">
      <div class="lg:pl-10 mb-5 lg:mb-0">
        <div class="border-1 border-base-dark h-full p-3 rounded-sm shadow-sm">
          <AppPostFormSidebar
            :status="formData.published"
            v-model:featured-image="formData.featuredImage"
            @update:status="updateStatus"
            :taxes="formData.attachTaxes"
            @attach:taxes="(taxes) => updateTaxes(taxes, 'attach')"
            @dettach:taxes="(taxes) => updateTaxes(taxes, 'dettach')"
          ></AppPostFormSidebar>
          <AppButton
            :loading="postRequestLoading"
            type="submit"
            color-type="dark"
            class="w-full mt-auto"
            >{{ buttonText }}</AppButton
          >
        </div>
      </div>
    </div>
  </form>
</template>
