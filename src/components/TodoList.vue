<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useTodoListStore } from "@/stores/useTodoListStore";
import TodoListItemActive from "./TodoListItemActive.vue";
import TodoListItemArchived from "./TodoListItemArchived.vue";

const { t } = useI18n();

const todoListStore = useTodoListStore();
</script>

<template>
  <template v-if="todoListStore.hasTodoItems">
    <div v-if="todoListStore.hasActiveTodoItems">
      <h2 class="font-semibold text-xl mb-2">
        {{ t("your_items") }}
      </h2>
      <TransitionGroup name="list" tag="ul">
        <li
          v-for="todoItem in todoListStore.activeTodoItems"
          :key="todoItem.id"
        >
          <TodoListItemActive
            :todo-item="todoItem"
            @on-change="() => {}"
            @on-delete="() => {}"
          />
        </li>
      </TransitionGroup>
    </div>
    <div v-if="todoListStore.hasArchivedTodoItems">
      <h2 class="font-semibold text-xl mb-2">
        {{ t("deleted_items") }}
      </h2>
      <TransitionGroup name="list" tag="ul">
        <li
          v-for="todoItem in todoListStore.archivedTodoItems"
          :key="todoItem.id"
        >
          <TodoListItemArchived :todo-item="todoItem" @on-click="() => {}" />
        </li>
      </TransitionGroup>
    </div>
  </template>
  <p v-else>
    {{ t("no_todos_yet") }}
  </p>
</template>

<style scoped>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
