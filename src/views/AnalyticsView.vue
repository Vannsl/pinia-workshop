<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
import MainHeader from "@/components/MainHeader.vue";
import AnalyticsStats from "@/components/AnalyticsStats.vue";

const { t } = useI18n();

const vuexStore = useStore();
const isUserAuthenticatedAsAdmin = computed(
  () => vuexStore.getters.isUserAuthenticatedAsAdmin
);
</script>

<template>
  <MainHeader :title="t('statistics')" color-theme="pink" />
  <AnalyticsStats v-if="isUserAuthenticatedAsAdmin" />
  <p v-else class="mt-6 text-center">
    {{ t("authenticate_as_admin_to_access") }}
  </p>
</template>
