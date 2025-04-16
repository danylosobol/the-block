<script setup lang="ts">
import { computed } from "vue";
import type { IModelValueEmit, IModelValueProp } from "~/types/interfaces";
import Editor from "@tinymce/tinymce-vue";
import font from "~/assets/css/fonts.css?url";
interface IAppWysiwygProps extends IModelValueProp<string> {
  errorMessage?: string;
  placeholder?: string;
}
interface IAppWysiwygEmits extends IModelValueEmit<string> {
  (e: "blur", value: Event): void;
}

const props = withDefaults(defineProps<IAppWysiwygProps>(), {
  errorMessage: "",
  placeholder: "",
});

const emit = defineEmits<IAppWysiwygEmits>();

const runtimeConfig = useRuntimeConfig();
const apiKey: string = runtimeConfig.public.tinyMceApiKey;
const editorValue = computed({
  get: () => props.modelValue,
  set: (value: string) => emit("update:model-value", value),
});
</script>

<template>
  <div class="w-full app-wysiwyg">
    <ClientOnly>
      <Editor
        :api-key="apiKey"
        :init="{
          height: 600,
          menubar: false,
          plugins: ['paste'],
          branding: false,
          content_css: font,
          content_style: 'body{font-family: Inter}',
          paste_text_sticky: true,
          paste_text_sticky_default: true,
          paste_remove_spans: true,
          paste_remove_styles: true,
          paste_retain_style_properties: false,
          keep_styles: false,
          resize: false,
          toolbar:
            'undo redo | blocks | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        }"
        v-model="editorValue"
        :initial-value="placeholder"
        @blur="(event) => emit('blur', event)"
      ></Editor>
    </ClientOnly>
    <span class="text-base-red text-sm" v-if="props.errorMessage">{{
      props.errorMessage
    }}</span>
  </div>
</template>
