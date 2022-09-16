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
      currentColorSchemeSlug: useStorage(storageKey, "light")
        .value as ColorSchemeSlug,
    };
  },
  actions: {
    setColorSchemeSlug(value: ColorSchemeSlug) {
      this.currentColorSchemeSlug = value;
      localStorage.setItem(storageKey, value);
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useColorSchemeStore, import.meta.hot));
}
