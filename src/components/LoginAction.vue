<script setup lang="ts">
import { useUserAuthentication } from "@/components/composables/useUserAuthentication";
import BaseButton from "./base/BaseButton.vue";
import IconUser from "./icons/IconUser.vue";
import IconUserPlus from "./icons/IconUserPlus.vue";

const {
  isUserAuthenticated,
  isUserAuthenticatedAsAdmin,
  loginAsAdmin,
  loginAsUser,
  logout,
} = useUserAuthentication();
</script>

<template>
  <div v-if="!isUserAuthenticated" class="flex gap-4">
    <BaseButton @click="loginAsUser">
      <IconUser class="inline h-4 w-4 mr-2" /> Log in (User)
    </BaseButton>
    <BaseButton @click="loginAsAdmin">
      <IconUserPlus class="inline h-4 w-4 mr-2" /> Log in (Admin)
    </BaseButton>
  </div>
  <BaseButton v-else color-theme="ghost" @click="logout">
    <component
      :is="isUserAuthenticatedAsAdmin ? IconUserPlus : IconUser"
      class="inline h-4 w-4 mr-2"
    />
    Log out
  </BaseButton>
</template>
