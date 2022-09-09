<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  title: string;
  colorTheme: "pink" | "purple";
}>();

const colorClassesConfig = {
  pink: "from-pink-900 to-pink-700",
  purple: "from-purple-900 to-purple-700",
};

const colorClasses = computed(() => colorClassesConfig[props.colorTheme]);
</script>

<template>
  <div class="bg-white dark:bg-gray-800 pt-3">
    <div
      :class="colorClasses"
      class="rounded-tl-3xl bg-gradient-to-r p-4 shadow text-2xl text-white"
    >
      <h1 class="font-bold pl-2">
        {{ title }}
      </h1>
    </div>
  </div>
</template>
