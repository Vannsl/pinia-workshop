<script setup lang="ts">
import { computed, ref, watch, type ComponentPublicInstance } from "vue";
import type { ColorSchemeSlug } from "@/types/ColorSchemeSlug";
import IconSun from "./icons/IconSun.vue";
import IconMoon from "./icons/IconMoon.vue";

interface ConfigSettings {
  component: ComponentPublicInstance;
  ariaLabel: string;
  nextConfigSlug: ColorSchemeSlug;
}

const config: Record<ColorSchemeSlug, ConfigSettings> = {
  light: {
    component: IconSun,
    ariaLabel: "Toggle color scheme, current light",
    nextConfigSlug: "dark",
  },
  dark: {
    component: IconMoon,
    ariaLabel: "Toggle color scheme, current dark",
    nextConfigSlug: "light",
  },
};

const currentColorSchemeSlug = ref<ColorSchemeSlug>("light");
const currentConfig = computed(() => config[currentColorSchemeSlug.value]);

watch(currentColorSchemeSlug, (value) => {
  if (value === "light") {
    document.getElementsByTagName("html")[0].classList.remove("dark");
  }
  if (value === "dark") {
    document.getElementsByTagName("html")[0].classList.add("dark");
  }
});

function handleClick() {
  currentColorSchemeSlug.value = currentConfig.value.nextConfigSlug;
}
</script>

<template>
  <button type="button" @click="handleClick">
    <component
      :is="currentConfig.component"
      :aria-label="currentConfig.ariaLabel"
    />
  </button>
</template>
