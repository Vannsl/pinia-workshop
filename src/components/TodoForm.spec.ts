// @vitest-environment happy-dom

import { afterEach, describe, it, expect, vi } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import { faker } from "@faker-js/faker";
import { render, fireEvent } from "@testing-library/vue";
import TodoForm from "./TodoForm.vue";
import messages from "@/data/messages.json";
import { useTodoListStore } from "@/stores/useTodoListStore";
import { createI18n } from "vue-i18n";

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
const store = useTodoListStore();

describe("TodoForm", () => {
  afterEach(() => {
    wrapper.unmount();
    store.$reset();
  });

  it("increments value on click", async () => {
    const { getByLabelText, getByTestId } = wrapper;

    const input = getByLabelText("New Item");
    const form = getByTestId("form");
    const newItemLabel = faker.lorem.words();

    await fireEvent.update(input, newItemLabel);
    await fireEvent.submit(form);

    expect(store.addItem).toHaveBeenCalledOnce();
  });
});
