<script setup lang="ts">
import { useI18n } from "vue-i18n";
import type { TodoItem } from "@/types/TodoItem";
import IconBin from "./icons/IconBin.vue";

defineProps<{
  todoItem: TodoItem;
}>();

const { t } = useI18n();
</script>

<template>
  <label class="flex justify-between gap-4 p-2 rounded hover:bg-gray-200">
    <div>
      <input
        class="accent-blue-500 dark:accent-blue-200 mr-2"
        type="checkbox"
        :id="`todo_${todoItem.id}`"
        :value="todoItem.value"
        :checked="todoItem.isCompleted"
        @change="$emit('on-change', todoItem.id)"
      />
      <span :class="{ 'line-through': todoItem.isCompleted }">
        {{ todoItem.value }}
      </span>
    </div>
    <button
      class="hover:text-blue-500 dark:hover:text-blue-200"
      type="button"
      @click.stop="$emit('on-delete', todoItem.id)"
    >
      <IconBin :aria-label="t('delete')" class="w-5 h-5" />
    </button>
  </label>
</template>
