<script setup lang="ts">
import { onMounted, ref } from "vue";
import SideNavigation from "./components/SideNavigation.vue";
import TheHeader from "./components/TheHeader.vue";
import { useAuthenticationStore } from "./stores/useAuthenticationStore";

const userStore = useAuthenticationStore();
const isLoaded = ref(false);

function sleep(milliseconds = 500) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

onMounted(async () => {
  await sleep();
  userStore.user = { id: 1, fullName: "Vanessa Otto" };
  isLoaded.value = true;
});
</script>

<template>
  <TheHeader />
  <main>
    <div class="flex flex-col md:flex-row">
      <SideNavigation />
      <section class="w-full">
        <div class="flex-1 bg-gray-100 dark:bg-gray-900 mt-12 md:mt-2 h-full">
          <router-view v-if="isLoaded" />
        </div>
      </section>
    </div>
  </main>
</template>
