<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
import MainHeader from "@/components/MainHeader.vue";
import TodoForm from "../components/TodoForm.vue";
import TodoList from "../components/TodoList.vue";

const { t } = useI18n();

const vuexStore = useStore();
const isUserAuthenticated = computed(
  () => vuexStore.getters.isUserAuthenticated
);
</script>

<template>
  <MainHeader :title="t('todo_list')" color-theme="purple" />
  <div
    v-if="isUserAuthenticated"
    class="mx-auto my-6 w-[450px] max-w-full flex flex-col gap-4 dark:text-white"
  >
    <TodoForm />
    <TodoList />
  </div>
  <p v-else class="mt-6 text-center">
    {{ t("authenticate_as_user_to_access") }}
  </p>
</template>
