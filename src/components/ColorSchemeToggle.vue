<script setup lang="ts">
import { computed, type ComponentPublicInstance } from "vue";
import Popper from "vue3-popper";
import { useI18n } from "vue-i18n";
import type { ColorSchemeSlug } from "@/types/ColorSchemeSlug";
import IconSun from "./icons/IconSun.vue";
import IconMoon from "./icons/IconMoon.vue";

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

const currentConfig = computed(() => config["light"]);

/*
  Execute the following code to add or remove the CSS class 'dark'.
  Hint: When watching or subscribing to a store state.
  ------------------------
  if (value === "light") {
    document.getElementsByTagName("html")[0].classList.remove("dark");
  }
  if (value === "dark") {
    document.getElementsByTagName("html")[0].classList.add("dark");
  }
  ------------------------
*/
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
          <input
            type="radio"
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
