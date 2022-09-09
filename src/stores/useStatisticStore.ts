import { acceptHMRUpdate, defineStore } from "pinia";
import stats from "@/data/stats.json";

export const useStatisticStore = defineStore("Statistic", {
  state: () => {
    return {
      stats,
    };
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStatisticStore, import.meta.hot));
}
