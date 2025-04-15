<script setup lang="ts">
interface IAppFileInputProps {
  files?: Array<{
    content?:
      | string
      | ArrayBuffer
      | {
          readonly byteLength: number;
          slice: (begin: number, end?: number | undefined) => ArrayBuffer;
          readonly [Symbol.toStringTag]: string;
        }
      | null;
  }>;
  label?: string;
  errorMessage?: string | null;
  fileType?: "video" | "image";
  multiple?: boolean;
}

interface IAppFileInputEmits {
  (e: "update:file", value: Event): void;
}

const props = withDefaults(defineProps<IAppFileInputProps>(), {
  label: "",
  errorMessage: "",
  fileType: "image",
  multiple: false,
});

const emits = defineEmits<IAppFileInputEmits>();
const uniqueId: string = useId();

const acceptType = computed(() => `${props.fileType}/*`);
const buttonText = computed<string>(() => `Choose ${props.fileType}`);
const inputElement = useTemplateRef<HTMLInputElement>("inputElement");

const files = computed(() => {
  return props.files?.map((file) => {
    if (
      file.content &&
      typeof file.content === "object" &&
      "slice" in file.content
    ) {
      return {
        ...file,
        content: file.content.slice(0),
      };
    }
    return file;
  });
});

const handleInput = async (event: Event) => {
  emits("update:file", event);
};

const clickHandler = (): void => {
  if (!inputElement.value) {
    return;
  }
  if (inputElement.value) {
    inputElement.value.value = "";
  }
  inputElement.value.click();
};
</script>

<template>
  <div class="w-full">
    <label
      class="block mb-1 text-sm font-medium cursor-pointer"
      v-if="props.label"
      :for="uniqueId"
    >
      {{ props.label }}
    </label>

    <input
      type="file"
      :multiple="props.multiple"
      class="hidden"
      :accept="acceptType"
      :id="uniqueId"
      @input="handleInput"
      ref="inputElement"
    />
    <AppButton v-if="!files || files.length === 0" @click="clickHandler">{{
      buttonText
    }}</AppButton>
    <div v-if="errorMessage" class="text-sm text-red-600 mt-1">
      {{ errorMessage }}
    </div>

    <div class="w-full" v-if="files && files.length > 0">
      <template v-for="(file, index) in files" :key="index">
        <img
          v-if="
            fileType === 'image' &&
            file.content &&
            typeof file.content === 'string'
          "
          :src="file.content"
          alt="Preview"
          class="w-full h-auto rounded-md object-cover aspect-16/9"
        />
        <video
          v-else-if="
            fileType === 'video' &&
            file.content &&
            typeof file.content === 'string'
          "
          :src="file.content"
          controls
          class="w-full rounded-md object-cover aspect-16/9"
        ></video>
      </template>
    </div>
  </div>
</template>
