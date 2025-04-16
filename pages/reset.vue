<script setup lang="ts">
import type { IResetInput } from "~/types/interfaces";
useSeoMeta({
  title: "Reset password - The block.",
  description:
    "Set a new password and get back to using your account — safe and simple.",
});
const { data, error, loading, sendRequest } = useApi();
const appStore = useAppStore();
const url = useRequestURL();
const router = useRouter();
const recovery = router.resolve({
  name: "recovery",
});
const formData: IResetInput = reactive({
  email: "",
  endpoint: `${url.protocol}//${url.host}${recovery.fullPath}`,
});
const submit = async (): Promise<void> => {
  await sendRequest(() =>
    $fetch<unknown>("/api/auth/reset", { method: "POST", body: formData })
  );

  if (error.value && error.value.statusMessage) {
    appStore.addMessage({
      type: "error",
      text: error.value.statusMessage,
    });
    return;
  }

  if (data.value) {
    appStore.addMessage({
      type: "success",
      text: "Mail was successfully send",
    });
  }
};
</script>

<template>
  <section>
    <AppContainer>
      <div
        class="rounded-sm py-5 min-h-[calc(100dvh-var(--header-height))] flex items-center justify-center flex-col"
      >
        <h1 class="text-2xl text-center">Forgot password?</h1>
        <p class="text-center">
          Enter your email to receive a link to reset your password.
        </p>

        <form
          class="border-1 border-base-dark max-w-xl mx-auto p-5 mt-5 md:min-w-md rounded-sm"
          @submit.prevent="submit"
          novalidate
        >
          <AppInput
            class="mb-3"
            v-model="formData.email"
            :type="'email'"
            :label="'Enter email:'"
            :autocomplete="'current-email'"
          ></AppInput>
          <AppButton :loading="loading" :type="'submit'" class="w-full"
            >Send email</AppButton
          >
        </form>
      </div>
    </AppContainer>
  </section>
</template>
