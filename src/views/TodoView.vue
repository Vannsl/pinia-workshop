<script setup lang="ts">
import MainHeader from "@/components/MainHeader.vue";
import { useUserAuthentication } from "@/components/composables/useUserAuthentication";

const { isUserAuthenticated } = useUserAuthentication();
</script>

<template>
  <MainHeader title="Todo list" color-theme="purple" />
  <div v-if="isUserAuthenticated" />
  <p v-else class="mt-6 text-center">
    You have to be logged in to see this page.
  </p>
</template>
