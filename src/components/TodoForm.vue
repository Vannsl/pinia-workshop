<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import type { TodoItem } from "@/types/TodoItem";
import { useTodoListStore } from "@/stores/useTodoListStore";
import BaseButton from "./base/BaseButton.vue";

const { t } = useI18n();

const { addItem } = useTodoListStore();

const newItem = ref("");

function createItem(value: TodoItem["value"]): TodoItem {
  return {
    id: `${Math.random()}`,
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
  addItem(item);
}
</script>

<template>
  <form data-testid="form" @submit.prevent="handleSubmit" class="flex gap-4">
    <div>
      <label>
        <span>New Item</span>
        <input
          v-model="newItem"
          type="text"
          class="px-2 flex-1 border border-gray-900 dark:border-gray-50 rounded"
        />
      </label>
    </div>
    <BaseButton type="submit">
      {{ t("add") }}
    </BaseButton>
  </form>
</template>
