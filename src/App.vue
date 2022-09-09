<script setup lang="ts">
import SideNavigation from "./components/SideNavigation.vue";
import TheHeader from "./components/TheHeader.vue";
</script>

<template>
  <TheHeader />
  <main>
    <div class="flex flex-col md:flex-row">
      <SideNavigation />
      <section class="w-full">
        <div class="flex-1 bg-gray-100 dark:bg-gray-900 mt-12 md:mt-2 h-full">
          <router-view />
        </div>
      </section>
    </div>
  </main>
</template>
