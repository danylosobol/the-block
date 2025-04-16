<script setup lang="ts">
import { IconBurger, IconClose } from "#components";
import type { RouteLocationAsRelativeGeneric } from "vue-router";
interface navigationLink {
  title: string;
  to: RouteLocationAsRelativeGeneric | string;
}
const { data, error, loading, sendRequest } = useApi();
const appStore = useAppStore();
const userStore = useUserStore();
const currentUser = computed(() => userStore.getCurrentUser);
const sidebarStatus: Ref<boolean> = ref(false);
const toggleSidebar = (): void => {
  sidebarStatus.value = !sidebarStatus.value;
};
const navigation: Ref<navigationLink[]> = ref([
  { title: "New post", to: "/posts/create" },
  { title: "Posts", to: "/posts" },
]);
const logout = async (): Promise<void> => {
  await sendRequest(() =>
    $fetch<unknown>("/api/auth/logout", { method: "POST" })
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
      text: "Successfully logged out",
    });
    userStore.setToken(null);
    userStore.setUser(null);
    navigateTo("/");
    toggleSidebar();
  }
};
</script>

<template>
  <header class="bg-base-dark text-base-light shadow-sm">
    <AppContainer>
      <div class="flex items-center py-2">
        <NuxtLink to="/" class="flex items-center capitalize !no-underline">
          <IconApp
            class="fill-base-light max-w-[40px] max-h-[40px] aspect-square mr-2"
          ></IconApp>
          The Block
        </NuxtLink>
        <div class="ml-auto leading-0">
          <nav v-if="!userStore.isAuthenticated">
            <ul class="flex items-center gap-2">
              <li>
                <NuxtLink to="/login">Login</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/register">Register</NuxtLink>
              </li>
            </ul>
          </nav>
          <button
            type="button"
            @click="toggleSidebar"
            class="cursor-pointer w-[40px] h-[40px] relative"
            v-else
          >
            <Transition name="app-fade">
              <Component
                class="stroke-base-light fill-base-light w-full h-full aspect-square absolute left-0 top-0"
                :is="!sidebarStatus ? IconBurger : IconClose"
              ></Component>
            </Transition>
          </button>
        </div>
      </div>
    </AppContainer>
    <Teleport v-if="userStore.isAuthenticated" to="#teleports">
      <AppSidebar @click:outside="toggleSidebar" v-model="sidebarStatus">
        <div class="p-3 h-full flex flex-col text-base-dark">
          <div v-if="currentUser" class="p-3 border-b-1 border-base-dark group">
            <div
              class="relative flex lg:item-start lg:pr-7 flex-col lg:flex-row"
            >
              <div
                class="rounded-full bg-base-dark text-lg text-base-light uppercase aspect-square h-[48px] w-[48px] flex items-center justify-center mr-2 shrink-0"
              >
                {{
                  currentUser.name
                    ? currentUser.name.charAt(0)
                    : currentUser.email.charAt(0)
                }}
              </div>
              <div class="w-full hidden lg:block">
                <p
                  class="whitespace-nowrap text-ellipsis overflow-hidden"
                  v-if="currentUser.name"
                >
                  {{ currentUser.name }}
                </p>
                <p
                  class="whitespace-nowrap text-ellipsis overflow-hidden"
                  v-if="currentUser.email"
                >
                  {{ currentUser.email }}
                </p>
              </div>
              <NuxtLink
                @click="toggleSidebar"
                to="/profile/update"
                class="absolute top-[50%] translate-y-[-50%] right-0 lg:opacity-0 group-hover:opacity-[100%] transition-opacity"
                >Edit</NuxtLink
              >
            </div>
          </div>
          <nav v-if="navigation.length > 0">
            <ul>
              <li
                class="p-3 border-b-1 border-base-dark"
                v-for="(item, index) in navigation"
                :key="index"
              >
                <NuxtLink @click="toggleSidebar" :to="item.to">{{
                  item.title
                }}</NuxtLink>
              </li>
            </ul>
          </nav>
          <AppButton class="w-full mt-auto" :loading="loading" @click="logout"
            >Log out</AppButton
          >
        </div>
      </AppSidebar>
    </Teleport>
  </header>
</template>
