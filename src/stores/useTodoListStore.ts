import { acceptHMRUpdate, defineStore } from "pinia";
import todoItems from "@/data/todoItems.json";

export const useTodoListStore = defineStore("TodoList", {
  state: () => {
    return {
      todoItems,
    };
  },
  getters: {
    hasTodoItems: (state) => state.todoItems.length > 0,
    activeTodoItems: (state) =>
      state.todoItems
        .filter(({ isArchived }) => !isArchived)
        .sort((item) => (item.isCompleted ? 1 : -1)),
    archivedTodoItems: (state) =>
      state.todoItems.filter(({ isArchived }) => isArchived),
    activeTodoItemsCount(): number {
      return this.activeTodoItems.filter(({ isCompleted }) => !isCompleted)
        .length;
    },
    hasActiveTodoItems() {
      return this.activeTodoItems.length > 0;
    },
    hasArchivedTodoItems() {
      return this.archivedTodoItems.length > 0;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTodoListStore, import.meta.hot));
}
