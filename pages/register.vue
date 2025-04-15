<script setup lang="ts">
import type { IRegisterInput, ISafeUser } from "~/types/interfaces";

const { data, loading, error, sendRequest } = useApi<ISafeUser | null>();
const appStore = useAppStore();
const formData: IRegisterInput = reactive({
  name: "",
  password: "",
  email: "",
  confirmPassword: "",
});
const submit = async (): Promise<void> => {
  await sendRequest(() =>
    $fetch<unknown>("/api/auth/register", {
      method: "POST",
      body: formData,
    })
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
      text: "Registration successful. Welcome aboard!",
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
        <h1 class="text-2xl text-center">Register</h1>

        <form
          class="border-1 border-base-dark mx-auto p-5 mt-5 md:min-w-md max-w-md rounded-sm"
          @submit.prevent="submit"
          novalidate
        >
          <div class="flex gap-3 flex-col md:flex-row">
            <AppInput
              class="mb-3"
              v-model="formData.email"
              :type="'email'"
              :label="'Enter email:'"
              :autocomplete="'current-email'"
            ></AppInput>
            <AppInput
              class="mb-3"
              v-model="formData.name"
              :type="'text'"
              :label="'Enter name:'"
              :autocomplete="'name'"
            ></AppInput>
          </div>
          <div class="flex gap-3 flex-col md:flex-row">
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
              :autocomplete="'current-password'"
            ></AppInput>
          </div>
          <AppButton :loading="loading" :type="'submit'" class="w-full"
            >Register</AppButton
          >
        </form>
      </div>
    </AppContainer>
  </section>
</template>
