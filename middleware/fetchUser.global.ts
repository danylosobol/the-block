import type { ISafeUser } from "~/types/interfaces";

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (import.meta.client) {
    return;
  }

  const { getToken } = useAuth();
  const token = getToken(true);
  const userStore = useUserStore();

  if (token && !userStore.getCurrentUser) {
    try {
      const requestFetch = useRequestFetch();
      const user = await requestFetch<ISafeUser | null>(
        "/api/auth/currentUser",
        {
          method: "GET",
        }
      );
      if (user) {
        userStore.setUser(user);
      }
    } catch (error) {
      userStore.setUser(null);
    }
  }
});
