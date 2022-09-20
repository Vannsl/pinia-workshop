<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import BaseButton from "./base/BaseButton.vue";

const { t } = useI18n();

const newItem = ref("");

function handleSubmit() {
  const trimmedValue = newItem.value.trim();
  if (!trimmedValue) return;

  newItem.value = "";

  // TODO
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="flex gap-4">
    <input
      v-model="newItem"
      type="text"
      class="px-2 flex-1 border border-gray-900 dark:border-gray-50 rounded"
    />
    <BaseButton type="submit">
      {{ t("add") }}
    </BaseButton>
  </form>
</template>
