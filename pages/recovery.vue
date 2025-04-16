<script setup lang="ts">
import type { IRecoveryInput } from "~/types/interfaces";
useSeoMeta({
  title: "Recorevy password - The block.",
  description:
    "Reset your password in just a few steps and get back to your account.",
});
const route = useRoute();
const appStore = useAppStore();
const { data, error, loading, sendRequest } = useApi();
const token = computed<string>(() => {
  const secret = route.query.secret;

  if (Array.isArray(secret)) {
    return secret[0] ?? "";
  }

  return secret ?? "";
});
const formData: IRecoveryInput = reactive({
  password: "",
  confirmPassword: "",
  token: token.value,
});
const submit = async (): Promise<void> => {
  await sendRequest(() =>
    $fetch<unknown>("/api/auth/recovery", { method: "POST", body: formData })
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
      text: "Password was successfully changed",
    });
    navigateTo("/login");
  }
};
</script>

<template>
  <section>
    <AppContainer>
      <div
        class="rounded-sm py-5 min-h-[calc(100dvh-var(--header-height))] flex items-center justify-center flex-col"
      >
        <h1 class="text-2xl text-center">Set new password</h1>

        <form
          class="border-1 border-base-dark max-w-xl mx-auto p-5 mt-5 md:min-w-md rounded-sm"
          @submit.prevent="submit"
          novalidate
        >
          <AppInput
            class="mb-3"
            v-model="formData.password"
            :type="'password'"
            :label="'Enter password:'"
            :autocomplete="'current-password'"
          ></AppInput>
          <AppInput
            class="mb-3"
            v-model="formData.confirmPassword"
            :type="'password'"
            :label="'Enter confirm password:'"
          ></AppInput>
          <AppButton :loading="loading" :type="'submit'" class="w-full"
            >Change password</AppButton
          >
        </form>
      </div>
    </AppContainer>
  </section>
</template>
