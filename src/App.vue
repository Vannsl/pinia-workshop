<script setup lang="ts">
import { ref } from "vue";
import SideNavigation from "./components/SideNavigation.vue";
import TheHeader from "./components/TheHeader.vue";
import MainHeader from "./components/MainHeader.vue";
import AnalyticsStats from "./components/AnalyticsStats.vue";
import AnalyticsGraphs from "./components/AnalyticsGraphs.vue";

const isUserLoggedIn = ref(true);
</script>

<template>
  <TheHeader />
  <main>
    <div class="flex flex-col md:flex-row">
      <SideNavigation />
      <section class="w-full">
        <div class="flex-1 bg-gray-100 dark:bg-gray-900 mt-12 md:mt-2 h-full">
          <MainHeader />
          <template v-if="isUserLoggedIn">
            <AnalyticsStats />
            <AnalyticsGraphs />
          </template>
          <p v-else class="text-center mx-4 py-8 dark:text-white">
            You have to be logged in to see this page.
          </p>
        </div>
      </section>
    </div>
  </main>
</template>
