// @vitest-environment happy-dom

import { afterEach, beforeEach, describe, it, expect, vi } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import { faker } from "@faker-js/faker";
import { render } from "@testing-library/vue";
import TodoForm from "@/components/TodoForm.vue";
import messages from "@/data/messages.json";
import { useTodoListStore } from "@/stores/useTodoListStore";
import { createI18n } from "vue-i18n";
import { nanoid } from "nanoid";

const wrapper = render(TodoForm, {
  global: {
    plugins: [
      createTestingPinia({
        createSpy: vi.fn,
      }),
      createI18n({
        legacy: false,
        locale: "en",
        fallbackLanguage: "en",
        messages,
      }),
    ],
  },
});

describe("useTodoListStore", () => {
  const todoListStore = useTodoListStore();
  beforeEach(() => todoListStore.$reset());

  afterEach(() => wrapper.unmount());

  it("adds an item", () => {
    const item = {
      id: nanoid(),
      value: faker.lorem.words(),
      isCompleted: false,
      isArchived: false,
    };

    todoListStore.addItem(item);
    expect(todoListStore.addItem).toHaveBeenCalledOnce();
    expect(todoListStore.addItem).toHaveBeenCalledWith(item);
  });
});
