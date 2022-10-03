<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { storeToRefs } from "pinia";
import MainHeader from "@/components/MainHeader.vue";
import AnalyticsStats from "@/components/AnalyticsStats.vue";
import { useAuthenticationStore } from "@/stores/useAuthenticationStore";

const { t } = useI18n();

const { isUserAuthenticatedAsAdmin } = storeToRefs(useAuthenticationStore());
</script>

<template>
  <MainHeader :title="t('statistics')" color-theme="pink" />
  <AnalyticsStats v-if="isUserAuthenticatedAsAdmin" />
  <p v-else class="mt-6 text-center">
    {{ t("authenticate_as_admin_to_access") }}
  </p>
</template>
