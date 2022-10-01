import { acceptHMRUpdate, defineStore } from "pinia";
import todoItems from "@/data/todoItems.json";

export const useTodoListStore = defineStore("TodoList", {
  state: () => {
    return {
      todoItems,
    };
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTodoListStore, import.meta.hot));
}
