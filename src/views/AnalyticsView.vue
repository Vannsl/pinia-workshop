<script setup lang="ts">
import { ref } from "vue";
import MainHeader from "@/components/MainHeader.vue";
import AnalyticsStats from "@/components/AnalyticsStats.vue";

const isUserAuthenticatedAsAdmin = ref(true);
</script>

<template>
  <MainHeader title="Analytics" color-theme="pink" />
  <AnalyticsStats v-if="isUserAuthenticatedAsAdmin" />
  <p v-else>You have to be logged in as Admin to see this page.</p>
</template>
