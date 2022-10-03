<script setup lang="ts">
import { computed, watch, type ComponentPublicInstance } from "vue";
import Popper from "vue3-popper";
import { useI18n } from "vue-i18n";
import type { ColorSchemeSlug } from "@/types/ColorSchemeSlug";
import { useColorSchemeStore } from "@/stores/useColorSchemeStore";
import IconSun from "./icons/IconSun.vue";
import IconMoon from "./icons/IconMoon.vue";
import { storeToRefs } from "pinia";

interface ConfigSettings {
  slug: ColorSchemeSlug;
  component: ComponentPublicInstance;
  label: string;
}

const { t } = useI18n();

const config: Record<ColorSchemeSlug, ConfigSettings> = {
  light: {
    slug: "light",
    component: IconSun,
    label: t("color_scheme_light_mode"),
  },
  dark: {
    slug: "dark",
    component: IconMoon,
    label: t("color_scheme_dark_mode"),
  },
};

const { currentColorSchemeSlug } = storeToRefs(useColorSchemeStore());

const currentConfig = computed(() => config[currentColorSchemeSlug.value]);

watch(
  currentConfig,
  (value) => {
    if (value.slug === "light") {
      document.getElementsByTagName("html")[0].classList.remove("dark");
    }
    if (value.slug === "dark") {
      document.getElementsByTagName("html")[0].classList.add("dark");
    }
  },
  {
    immediate: true,
  }
);
</script>

<template>
  <Popper>
    <button type="button" class="bg-gray-100 dark:bg-gray-700 rounded p-2">
      <component
        :is="currentConfig.component"
        :aria-label="t('open_color_scheme_menu')"
      />
    </button>
    <template #content>
      <fieldset class="tw-pr-4">
        <legend class="sr-only">
          {{ t("color_scheme_selection") }}
        </legend>
        <div
          v-for="colorScheme in Object.values(config)"
          :key="colorScheme.slug"
          class="py-2"
        >
          <!-- Add v-model or change handler-->
          <input
            type="radio"
            v-model="currentColorSchemeSlug"
            :id="colorScheme.slug"
            :value="colorScheme.slug"
            name="colorSchemeSelection"
            class="hidden"
          />
          <label
            :for="colorScheme.slug"
            class="cursor-pointer hover:text-blue-500 dark:hover:text-blue-200 flex gap-2 font-semibold"
          >
            <component :is="colorScheme.component" />
            {{ colorScheme.label }}
          </label>
        </div>
      </fieldset>
    </template>
  </Popper>
</template>
