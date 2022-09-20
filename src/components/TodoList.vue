<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import todoItems from "@/data/todoItems.json";
import TodoListItemActive from "./TodoListItemActive.vue";
import TodoListItemArchived from "./TodoListItemArchived.vue";

const { t } = useI18n();

const hasTodoItems = computed(() => todoItems.length > 0);

const activeTodoItems = computed(() =>
  todoItems
    .filter(({ isArchived }) => !isArchived)
    .sort((item) => (item.isCompleted ? 1 : -1))
);
const archivedTodoItems = computed(() =>
  todoItems.filter(({ isArchived }) => isArchived)
);

const hasActiveTodoItems = computed(() => activeTodoItems.value.length > 0);
const hasArchivedTodoItems = computed(() => archivedTodoItems.value.length > 0);
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
