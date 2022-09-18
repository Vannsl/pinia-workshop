<script setup lang="ts">
import { useI18n } from "vue-i18n";
import BaseButton from "./base/BaseButton.vue";

const { t } = useI18n();
</script>

<template>
  <form class="flex gap-4">
    <input type="text" class="px-2 flex-1" />
    <BaseButton>
      {{ t("add") }}
    </BaseButton>
  </form>
</template>
