<script setup lang="ts">
import MainHeader from "@/components/MainHeader.vue";
import AnalyticsStats from "@/components/AnalyticsStats.vue";
import { useUserAuthentication } from "@/components/composables/useUserAuthentication";

const { isUserAuthenticatedAsAdmin } = useUserAuthentication();
</script>

<template>
  <MainHeader title="Analytics" color-theme="pink" />
  <AnalyticsStats v-if="isUserAuthenticatedAsAdmin" />
  <p v-else class="mt-6 text-center">
    You have to be logged in as Admin to see this page.
  </p>
</template>
