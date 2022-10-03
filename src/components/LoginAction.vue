<script setup lang="ts">
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
import BaseButton from "./base/BaseButton.vue";
import IconUser from "./icons/IconUser.vue";
import IconUserPlus from "./icons/IconUserPlus.vue";

const { t } = useI18n();

const vuexStore = useStore();
const isLoading = ref(false);

const isUserAuthenticated = computed(
  () => vuexStore.getters.isUserAuthenticated
);
const isUserAuthenticatedAsAdmin = computed(
  () => vuexStore.getters.isUserAuthenticatedAsAdmin
);

const signIn = async (isAdmin: boolean) => {
  isLoading.value = true;
  try {
    await vuexStore.dispatch("signIn", { isAdmin });
  } catch (e) {
    console.error(e);
  } finally {
    isLoading.value = false;
  }
};
const signOut = async () => {
  isLoading.value = true;
  try {
    await vuexStore.dispatch("signOut");
  } catch (e) {
    console.error(e);
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div v-if="!isUserAuthenticated" class="flex gap-4">
    <BaseButton @click="signIn(false)" :is-loading="isLoading">
      <IconUser class="inline h-4 w-4 mr-2" />
      {{ t("login") }}
    </BaseButton>
    <BaseButton @click="signIn(true)" :is-loading="isLoading">
      <IconUserPlus class="inline h-4 w-4 mr-2" />
      {{ t("login") }}
    </BaseButton>
  </div>
  <BaseButton
    v-else
    color-theme="ghost"
    :is-loading="isLoading"
    @click="signOut"
  >
    <component
      :is="isUserAuthenticatedAsAdmin ? IconUserPlus : IconUser"
      class="inline h-4 w-4 mr-2"
    />
    {{ t("logout") }}
  </BaseButton>
</template>
