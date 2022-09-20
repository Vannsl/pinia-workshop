import { acceptHMRUpdate, defineStore } from "pinia";
import todoItems from "@/data/todoItems.json";
import type { TodoItem } from "@/types/TodoItem";

type RootState = {
  todoItems: TodoItem[];
};

function createItem({ value, id }: Pick<TodoItem, "value" | "id">) {
  return {
    id,
    value,
    isCompleted: false,
    isArchived: false,
  };
}

export const useTodoListStore = defineStore("TodoList", {
  state: (): RootState => {
    return {
      todoItems,
    };
  },
  actions: {
    toggleItem(id: TodoItem["id"], value: boolean) {
      const item = this.todoItems.find((todoItem) => todoItem.id === id);
      if (!item)
        throw new Error(
          `useTodoListStore/toggleItem: Item with id ${id} could not be found.`
        );
      item.isCompleted = value;
    },
    archiveItem(id: TodoItem["id"]) {
      const item = this.todoItems.find((todoItem) => todoItem.id === id);
      if (!item)
        throw new Error(
          `useTodoListStore/archiveItem: Item with id ${id} could not be found.`
        );
      item.isArchived = true;
    },
    reactiveItem(id: TodoItem["id"]) {
      const item = this.todoItems.find((todoItem) => todoItem.id === id);
      if (!item)
        throw new Error(
          `useTodoListStore/reactiveItem: Item with id ${id} could not be found.`
        );
      item.isArchived = false;
    },
    addItem(value: string) {
      const newItem = createItem({ value, id: this.todoItems.length + 1 });
      this.todoItems.push(newItem);
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTodoListStore, import.meta.hot));
}
