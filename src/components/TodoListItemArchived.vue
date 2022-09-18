<script setup lang="ts">
import type { TodoItem } from "@/types/TodoItem";

defineProps<{
  todoItem: TodoItem;
}>();
</script>

<template>
  <button
    class="pl-7 flex w-full p-2 rounded hover:bg-gray-200"
    type="button"
    @click="$emit('on-click')"
  >
    <span :class="{ 'line-through': todoItem.isCompleted }">
      {{ todoItem.value }}
    </span>
  </button>
</template>
