<script setup lang="ts">
import type { ILoginInput, ISafeUser } from "~/types/interfaces";
interface ILoginResponse {
  token: string;
  user: ISafeUser;
}
const formData: ILoginInput = reactive({
  email: "",
  password: "",
  rememberMe: false,
});
const { data, error, loading, sendRequest } = useApi<ILoginResponse | null>();
const appStore = useAppStore();
const userStore = useUserStore();
const submit = async (): Promise<void> => {
  await sendRequest(() =>
    $fetch<ILoginResponse>("/api/auth/login", {
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

  if (data.value && data.value.user && data.value.token) {
    userStore.setUser(data.value.user);
    userStore.setToken(data.value.token);
    navigateTo("/");
    appStore.addMessage({
      type: "success",
      text: "You have signed in successful. Welcome back!",
    });
    return;
  }
};
</script>

<template>
  <section>
    <AppContainer>
      <div
        class="rounded-sm py-5 min-h-[calc(100dvh-var(--header-height))] flex items-center justify-center flex-col"
      >
        <h1 class="text-2xl text-center">Login</h1>

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
          <AppInput
            class="mb-3"
            v-model="formData.password"
            :type="'password'"
            :label="'Enter password:'"
            :autocomplete="'current-password'"
          ></AppInput>
          <div class="flex items-center mb-3">
            <AppCheckbox
              class="!w-auto"
              v-model="formData.rememberMe"
              :label="'Remember me?'"
            ></AppCheckbox>
            <NuxtLink class="ml-auto text-sm" to="/reset"
              >Forgot password?</NuxtLink
            >
          </div>
          <AppButton :loading="loading" :type="'submit'" class="w-full"
            >Login</AppButton
          >
        </form>
      </div>
    </AppContainer>
  </section>
</template>
