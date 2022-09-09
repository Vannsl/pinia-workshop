import { acceptHMRUpdate, defineStore } from "pinia";
import type { ColorSchemeSlug } from "@/types/ColorSchemeSlug";

type RootState = {
  currentColorSchemeSlug: ColorSchemeSlug;
};

export const useColorSchemeStore = defineStore("ColorScheme", {
  state: (): RootState => {
    return {
      currentColorSchemeSlug: "light",
    };
  },
  actions: {
    updateColorScheme(colorSchemeSlug: "light" | "dark") {
      this.currentColorSchemeSlug = colorSchemeSlug;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useColorSchemeStore, import.meta.hot));
}
