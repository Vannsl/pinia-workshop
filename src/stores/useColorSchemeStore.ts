import { acceptHMRUpdate, defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import type { ColorSchemeSlug } from "@/types/ColorSchemeSlug";

type RootState = {
  currentColorSchemeSlug: ColorSchemeSlug;
};

export const storageKey = "pinia/colorScheme/currentColorSchemeSlug";

export const useColorSchemeStore = defineStore("ColorScheme", {
  state: (): RootState => {
    return {
      currentColorSchemeSlug: JSON.parse(useStorage(storageKey, "light").value),
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
