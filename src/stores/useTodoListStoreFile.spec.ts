import { beforeEach, describe, it, expect } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { faker } from "@faker-js/faker";
import { useTodoListStore } from "./useTodoListStore";
import { nanoid } from "nanoid";

describe("useTodoListStore", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("adds an item", () => {
    const todoListStore = useTodoListStore();
    expect(todoListStore.todoItems.length).toBe(4);

    todoListStore.addItem({
      id: nanoid(),
      value: faker.lorem.words(),
      isCompleted: false,
      isArchived: false,
    });
    expect(todoListStore.todoItems.length).toBe(5);
  });
});
