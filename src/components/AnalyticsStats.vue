<script setup lang="ts">
import type { StatColor } from "@/types/StatColor";
import stats from "@/data/stats.json";
import BaseMetricCard from "@/components/base/BaseMetricCard.vue";
</script>

<template>
  <ul class="flex flex-wrap">
    <li
      v-for="stat in stats"
      :key="stat.id"
      class="w-full md:w-1/2 xl:w-1/3 p-6"
    >
      <BaseMetricCard
        :color-theme="(stat.colorTheme as StatColor)"
        :title="stat.title"
        :icon-name="stat.iconName"
      >
        {{ stat.value }}
      </BaseMetricCard>
    </li>
  </ul>
</template>
