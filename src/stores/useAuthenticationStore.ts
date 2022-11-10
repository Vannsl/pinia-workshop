import { acceptHMRUpdate, defineStore } from "pinia";

const sleep = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

type User = {
  id: number;
  fullName: string;
};

type RootState = {
  authenticatedUserId: number | null;
  user: User | null;
  isAdmin: boolean;
};

export const useAuthenticationStore = defineStore("AuthenticatonStore", {
  state: (): RootState => {
    return {
      authenticatedUserId: 1,
      user: null,
      isAdmin: true,
    };
  },
  getters: {
    isUserAuthenticated: (state) => state.authenticatedUserId !== null,
    isUserAuthenticatedAsAdmin(state): boolean {
      return this.isUserAuthenticated && state.isAdmin;
    },
  },
  actions: {
    async signIn(isAdmin: boolean) {
      await sleep();
      this.$patch({ authenticatedUserId: 1, isAdmin });
    },
    async signOut() {
      await sleep();
      this.$patch({ authenticatedUserId: null, isAdmin: false });
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useAuthenticationStore, import.meta.hot)
  );
}
