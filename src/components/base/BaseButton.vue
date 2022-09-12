<script setup lang="ts">
interface Props {
  colorTheme?: "primary" | "ghost";
}

const props = withDefaults(defineProps<Props>(), {
  colorTheme: "primary",
});

const colorClassesConfig = {
  primary:
    "border-blue-500 bg-blue-500 hover:bg-blue-700 text-white dark:border-blue-300 dark:bg-blue-300 dark:hover:border-blue-400 dark:hover:bg-blue-400 dark:text-gray-800",
  ghost:
    "border-blue-500 hover:border-blue-700 text-blue-500 hover:text-blue-700 dark:border-blue-300 dark:text-blue-300 dark:hover:border-blue-400 dark:hover:text-blue-400",
};

const colorClasses = colorClassesConfig[props.colorTheme];
</script>

<template>
  <button
    :class="colorClasses"
    class="border font-bold py-2 px-4 rounded"
    type="button"
  >
    <slot />
  </button>
</template>
