<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import BaseButton from "./base/BaseButton.vue";
import IconUser from "./icons/IconUser.vue";
import IconUserPlus from "./icons/IconUserPlus.vue";

const { t } = useI18n();

const isUserAuthenticated = ref(true);
const isUserAuthenticatedAsAdmin = ref(true);

// eslint-disable-next-line
const noop = () => {};
</script>

<template>
  <div v-if="!isUserAuthenticated" class="flex gap-4">
    <BaseButton @click="noop">
      <IconUser class="inline h-4 w-4 mr-2" />
      {{ t("login") }}
    </BaseButton>
    <BaseButton @click="noop">
      <IconUserPlus class="inline h-4 w-4 mr-2" />
      {{ t("login") }}
    </BaseButton>
  </div>
  <BaseButton v-else color-theme="ghost" @click="noop">
    <component
      :is="isUserAuthenticatedAsAdmin ? IconUserPlus : IconUser"
      class="inline h-4 w-4 mr-2"
    />
    {{ t("logout") }}
  </BaseButton>
</template>
