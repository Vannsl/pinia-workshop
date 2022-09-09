<script setup lang="ts">
import { ref } from "vue";
import MainHeader from "@/components/MainHeader.vue";
import AnalyticsStats from "@/components/AnalyticsStats.vue";

const isUserLoggedIn = ref(true);
const isUserAdmin = ref(true);
</script>

<template>
  <MainHeader title="Analytics" color-theme="pink" />
  <AnalyticsStats v-if="isUserLoggedIn && isUserAdmin" />
  <p v-else>You have to be logged in as Admin to see this page.</p>
</template>
