<script setup lang="ts">
import { useI18n } from "vue-i18n";
import type { TodoItem } from "@/types/TodoItem";
import IconBin from "./icons/IconBin.vue";

/* eslint-disable */
const props = defineProps<{
  todoItem: TodoItem;
}>();

const emit = defineEmits(["on-input-change", "on-button-click"]);

const { t } = useI18n();

function handleInputChange(event: Event) {
  // TODO
}

function handleButtonClick() {
  // TODO
}
/* eslint-enable */
</script>

<template>
  <label
    class="group flex justify-between gap-4 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800"
  >
    <div>
      <input
        class="accent-blue-500 dark:accent-blue-200 mr-2"
        type="checkbox"
        :id="`todo_${todoItem.id}`"
        :value="todoItem.value"
        :checked="todoItem.isCompleted"
        @change="handleInputChange"
      />
      <span :class="{ 'line-through': todoItem.isCompleted }">
        {{ todoItem.value }}
      </span>
    </div>
    <button
      class="group-hover:visible invisible hover:text-blue-500 dark:hover:text-blue-200"
      type="button"
      @click.stop="handleButtonClick"
    >
      <IconBin :aria-label="t('delete')" class="w-5 h-5" />
    </button>
  </label>
</template>
