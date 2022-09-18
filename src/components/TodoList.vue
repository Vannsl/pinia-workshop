<script setup lang="ts">
import { useI18n } from "vue-i18n";
import type { TodoItem } from "@/types/TodoItem";
import TodoListItemActive from "./TodoListItemActive.vue";
import TodoListItemArchived from "./TodoListItemArchived.vue";

const { t } = useI18n();

const hasTodoItems = true;
const hasActiveTodoItems = true;
const hasArchivedTodoItems = true;

const activeTodoItems: TodoItem[] = [
  { id: 1, value: "Buy groceries", isCompleted: false, isArchived: false },
  { id: 2, value: "Do taxes", isCompleted: true, isArchived: false },
];

const archivedTodoItems: TodoItem[] = [
  { id: 3, value: "Pet cats", isCompleted: true, isArchived: true },
  { id: 3, value: "Wash car", isCompleted: false, isArchived: true },
];
</script>

<template>
  <template v-if="hasTodoItems">
    <div v-if="hasActiveTodoItems">
      <h2 class="font-semibold text-xl mb-2">
        {{ t("your_items") }}
      </h2>
      <ul>
        <li v-for="todoItem in activeTodoItems" :key="todoItem.id">
          <TodoListItemActive
            :todo-item="todoItem"
            @on-change="() => {}"
            @on-delete="() => {}"
          />
        </li>
      </ul>
    </div>
    <div v-if="hasArchivedTodoItems">
      <h2 class="font-semibold text-xl mb-2">
        {{ t("deleted_items") }}
      </h2>
      <ul>
        <li v-for="todoItem in archivedTodoItems" :key="todoItem.id">
          <TodoListItemArchived :todo-item="todoItem" />
        </li>
      </ul>
    </div>
  </template>
  <p v-else>
    {{ t("no_todos_yet") }}
  </p>
</template>
