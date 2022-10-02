<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { nanoid } from "nanoid";
import type { TodoItem } from "@/types/TodoItem";
import BaseButton from "./base/BaseButton.vue";

const { t } = useI18n();

const newItem = ref("");

function createItem(value: TodoItem["value"]) {
  return {
    id: nanoid(),
    value,
    isCompleted: false,
    isArchived: false,
  };
}

function handleSubmit() {
  const trimmedValue = newItem.value.trim();
  if (!trimmedValue) return;

  newItem.value = "";
  const item = createItem(trimmedValue);

  // TODO
  console.log(item);
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
