import { acceptHMRUpdate, defineStore } from "pinia";
import todoItems from "@/data/todoItems.json";
import type { TodoItem } from "@/types/TodoItem";
import { useStatisticStore } from "./useStatisticStore";

type RootState = {
  todoItems: TodoItem[];
};

export const useTodoListStore = defineStore("TodoList", {
  state: (): RootState => {
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
  actions: {
    setIsCompleted(id: TodoItem["id"], value: boolean) {
      const item = this.todoItems.find((todoItem) => todoItem.id === id);
      if (!item)
        throw new Error(
          `useTodoListStore/toggleItem: Item with id ${id} could not be found.`
        );
      item.isCompleted = value;
    },
    setIsArchived(id: TodoItem["id"], state: boolean) {
      const item = this.todoItems.find((todoItem) => todoItem.id === id);
      if (!item)
        throw new Error(
          `useTodoListStore/toggleActiveState: Item with id ${id} could not be found.`
        );
      item.isArchived = state;
    },
    addItem(item: TodoItem) {
      this.todoItems.push(item);
      const statiticStore = useStatisticStore();
      statiticStore.updateTodoItemsCount(this.todoItems.length);
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTodoListStore, import.meta.hot));
}
