<script setup lang="ts">
interface Props {
  colorTheme?: "primary" | "ghost";
}

const props = withDefaults(defineProps<Props>(), {
  colorTheme: "primary",
});

const colorClassesConfig = {
  primary: "border-blue-500 bg-blue-500 hover:bg-blue-700 text-white",
  ghost:
    "border-blue-500 hover:border-blue-700 text-blue-500 hover:text-blue-700",
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
