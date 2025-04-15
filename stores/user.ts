import type { ISafeUser } from "~/types/interfaces";

interface IUserStoreState {
  user: ISafeUser | null;
  token: string | null;
}

const { getToken } = useAuth();

export const useUserStore = defineStore("user", {
  state: (): IUserStoreState => ({
    user: null,
    token: getToken(false),
  }),

  getters: {
    getCurrentUser: (state): ISafeUser | null => state.user,
    isAuthenticated: (state) => !!state.token,
  },

  actions: {
    setUser(user: ISafeUser | null) {
      if (!user) {
        this.user = null;
        return;
      }

      this.user = user;
    },

    setToken(token: string | null) {
      if (!token) {
        this.token = null;
        return;
      }
      this.token = token;
    },
  },
});
