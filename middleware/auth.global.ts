export default defineNuxtRouteMiddleware((to, from) => {
  if (import.meta.client) {
    return;
  }
  const userStore = useUserStore();

  if (
    to.meta?.requiresAuth &&
    !userStore.isAuthenticated &&
    to.name !== "login"
  ) {
    return navigateTo("/login");
  }

  if (
    typeof to?.name === "string" &&
    to.name.match(/^(login|register|recovery|reset)$/) &&
    userStore.isAuthenticated
  ) {
    return navigateTo("/");
  }
});
