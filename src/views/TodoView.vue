<script setup lang="ts">
import { ref } from "vue";
import MainHeader from "@/components/MainHeader.vue";

const isUserLoggedIn = ref(true);
</script>

<template>
  <MainHeader title="Todo list" color-theme="purple" />
  <div v-if="isUserLoggedIn" />
  <p v-else class="mt-6 text-center">
    You have to be logged in to see this page.
  </p>
</template>
