<script setup lang="ts">
import type { Reactive } from "vue";
import AppButton from "~/components/AppButton.vue";
import AppPopup from "~/components/AppPopup.vue";
import type { IProfileUpdate, ISafeUser } from "~/types/interfaces";

definePageMeta({
  requiresAuth: true,
});

const userStore = useUserStore();
const appStore = useAppStore();
const currentUser = userStore.getCurrentUser;
const isPopupOpened: Ref<boolean> = ref(false);

const formData: Reactive<IProfileUpdate> = reactive({
  name: currentUser?.name ?? "",
  password: "",
  confirmPassword: "",
});
const {
  data: updateData,
  error: updateError,
  loading: updateLoading,
  sendRequest: updateRequest,
} = useApi();
const {
  data: deleteData,
  error: deleteError,
  loading: deleteLoading,
  sendRequest: deleteRequest,
} = useApi();
const submit = async (): Promise<void> => {
  await updateRequest(() =>
    $fetch<ISafeUser>(`/api/user/${currentUser?.id}`, {
      method: "PUT",
      body: formData,
    })
  );

  if (updateError.value) {
    appStore.addMessage({
      type: "error",
      text: updateError.value.statusMessage,
    });
    return;
  }

  if (updateData.value) {
    appStore.addMessage({
      type: "success",
      text: "Profile was successfully updated",
    });
    const user = updateData.value as ISafeUser;
    userStore.setUser(user);
    formData.confirmPassword = "";
    formData.password = "";
  }
};

const deleteUser = async (): Promise<void> => {
  await deleteRequest(() =>
    $fetch<boolean>(`/api/user/${currentUser?.id}`, {
      method: "DELETE",
    })
  );

  if (deleteError.value) {
    appStore.addMessage({
      type: "error",
      text: deleteError.value.statusMessage,
    });
    return;
  }

  if (deleteData.value) {
    await $fetch("/api/auth/logout", { method: "POST" });
    userStore.setToken(null);
    userStore.setUser(null);
    navigateTo("/");
    appStore.addMessage({
      type: "success",
      text: "Your account was successfully deleted.",
    });
  }
};
</script>

<template>
  <section class="py-5">
    <AppContainer>
      <h1 class="text-2xl">Profile</h1>
      <div class="shadow-sm p-3 rounded-sm">
        <form class="max-w-md my-5" @submit.prevent="submit">
          <AppInput
            class="mb-3"
            autocomplete="name"
            label="Your name:"
            v-model="formData.name"
            type="text"
          ></AppInput>
          <AppInput
            class="mb-3"
            autocomplete="new-password"
            label="Update your password:"
            type="password"
            v-model="formData.password"
          ></AppInput>
          <AppInput
            class="mb-3"
            autocomplete="new-password"
            label="Confirm new password:"
            type="password"
            v-model="formData.confirmPassword"
          ></AppInput>
          <AppButton :loading="updateLoading" type="submit">Update</AppButton>
        </form>

        <AppButton @click="isPopupOpened = true">Delete account</AppButton>

        <Teleport to="#teleports">
          <AppPopup v-model="isPopupOpened">
            <div class="md:min-w-md">
              <p class="text-center mt-10 sm:mt-0">
                Are you sure you want to delete your account?
              </p>
              <div class="flex gap-3 justify-center mt-5">
                <AppButton :loading="deleteLoading" @click="deleteUser"
                  >Yes</AppButton
                >
                <AppButton @click="isPopupOpened = false">No</AppButton>
              </div>
            </div>
          </AppPopup>
        </Teleport>
      </div>
    </AppContainer>
  </section>
</template>
