<script setup lang="ts">
import { shallowRef, watchEffect, type ComponentPublicInstance } from "vue";
import type { ColorSchemeSlug } from "@/types/ColorSchemeSlug";
import IconSun from "./icons/IconSun.vue";
import IconMoon from "./icons/IconMoon.vue";

interface ConfigSettings {
  slug: ColorSchemeSlug;
  component: ComponentPublicInstance;
  ariaLabel: string;
  nextConfigSlug: ColorSchemeSlug;
}

const config: Record<ColorSchemeSlug, ConfigSettings> = {
  light: {
    slug: "light",
    component: IconSun,
    ariaLabel: "Toggle color scheme, current light",
    nextConfigSlug: "dark",
  },
  dark: {
    slug: "dark",
    component: IconMoon,
    ariaLabel: "Toggle color scheme, current dark",
    nextConfigSlug: "light",
  },
};

const currentConfig = shallowRef(config.light);

watchEffect(() => {
  if (currentConfig.value.slug === "light") {
    document.getElementsByTagName("html")[0].classList.remove("dark");
  }
  if (currentConfig.value.slug === "dark") {
    document.getElementsByTagName("html")[0].classList.add("dark");
  }
});

function handleClick() {
  currentConfig.value = config[currentConfig.value.nextConfigSlug];
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
