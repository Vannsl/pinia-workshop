import { computed, readonly, ref } from "vue";
import type { AuthenticatedUser } from "@/types/AuthenticatedUser";
import authenticatedAdmin from "@/data/authenticatedAdmin.json";
import authenticatedUser from "@/data/authenticatedUser.json";

const user = ref<AuthenticatedUser | null>(null);

export function useUserAuthentication() {
  const isUserAuthenticated = computed(() => user.value !== null);
  const isUserAuthenticatedAsAdmin = computed(
    () => isUserAuthenticated.value && user.value?.role === "admin"
  );

  function loginAsUser() {
    user.value = authenticatedUser as AuthenticatedUser;
  }
  function loginAsAdmin() {
    user.value = authenticatedAdmin as AuthenticatedUser;
  }
  function logout() {
    user.value = null;
  }

  return {
    user: readonly(user),
    isUserAuthenticated,
    isUserAuthenticatedAsAdmin,
    loginAsUser,
    loginAsAdmin,
    logout,
  };
}
