<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref } from "vue";
import MainHeader from "@/components/MainHeader.vue";
import AnalyticsStats from "@/components/AnalyticsStats.vue";

const { t } = useI18n();

const isUserAuthenticatedAsAdmin = ref(true);
</script>

<template>
  <MainHeader :title="t('statistics')" color-theme="pink" />
  <AnalyticsStats v-if="isUserAuthenticatedAsAdmin" />
  <p v-else class="mt-6 text-center">
    {{ t("authenticate_as_admin_to_access") }}
  </p>
</template>
