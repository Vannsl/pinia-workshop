<script setup lang="ts">
import { watch } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const languages = [
  {
    slug: "en",
    label: "🇬🇧",
  },
  {
    slug: "de",
    label: "🇩🇪",
  },
];

const { locale } = useI18n();
watch(locale, (val) => document.documentElement.setAttribute("lang", val));
</script>

<template>
  <fieldset
    class="bg-gray-100 dark:bg-gray-700 rounded flex items-center px-4 text-xl gap-4"
  >
    <legend class="sr-only">
      {{ t("language_selection") }}
    </legend>
    <div v-for="language in languages" :key="language.slug">
      <input
        v-model="locale"
        type="radio"
        :id="language.slug"
        :value="language.slug"
        name="languageSelection"
        class="opacity-0 w-0"
      />
      <label :for="language.slug" class="cursor-pointer">
        {{ language.label }}
      </label>
    </div>
  </fieldset>
</template>
