import { acceptHMRUpdate, defineStore } from "pinia";
import stats from "@/data/stats.json";

export const useStatisticStore = defineStore("Statistic", {
  state: () => {
    return {
      stats,
    };
  },
  actions: {
    updateTodoItemsCount(count: number) {
      const todoItems = this.stats.find(({ id }) => id === 2);
      if (!todoItems)
        throw new Error(
          "useStatisticStore/updateTodoItemsCount: TodoItemsStats not found"
        );
      todoItems.value = `${count}`;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStatisticStore, import.meta.hot));
}
