<script setup lang="ts">
import type { StatColor } from "@/types/StatColor";
import BaseMetricCard from "./base/BaseMetricCard.vue";

const stats = [
  {
    id: 1,
    title: "Total Revenue",
    colorTheme: "green",
    iconName: "fa-wallet",
    value: "$3249",
  },
  {
    id: 2,
    title: "Total Users",
    colorTheme: "pink",
    iconName: "fa-users",
    value: "249",
  },
  {
    id: 3,
    title: "New Users",
    colorTheme: "yellow",
    iconName: "fa-user-plus",
    value: "2",
  },
  {
    id: 4,
    title: "Server Uptime",
    colorTheme: "blue",
    iconName: "fa-server",
    value: "152 days",
  },
  {
    id: 5,
    title: "To Do List",
    colorTheme: "indigo",
    iconName: "fa-tasks",
    value: "7 tasks",
  },
  {
    id: 6,
    title: "Issues",
    colorTheme: "red",
    iconName: "fa-inbox",
    value: "3",
  },
];
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
