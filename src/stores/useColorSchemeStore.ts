import { acceptHMRUpdate, defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import type { Ref } from "vue";
import type { ColorSchemeSlug } from "@/types/ColorSchemeSlug";

const ls = <T>(id: string, defaultValue: T): Ref<T> =>
  useLocalStorage(id, defaultValue);

type RootState = {
  currentColorSchemeSlug: Ref<ColorSchemeSlug>;
};

export const useColorSchemeStore = defineStore("ColorScheme", {
  state: (): RootState => {
    return {
      currentColorSchemeSlug: ls(
        "pinia/colorScheme/currentColorSchemeSlug",
        "light"
      ),
    };
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useColorSchemeStore, import.meta.hot));
}
