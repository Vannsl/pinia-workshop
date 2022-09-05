<script setup>
import SideNavigation from "./components/SideNavigation.vue";
import TheHeader from "./components/TheHeader.vue";
import MainHeader from "./components/MainHeader.vue";
import AnalyticsStats from "./components/AnalyticsStats.vue";
import AnalyticsGraphs from "./components/AnalyticsGraphs.vue";
// new Chart(document.getElementById("chartjs-4"), {
//   type: "doughnut",
//   data: {
//     labels: ["P1", "P2", "P3"],
//     datasets: [
//       {
//         label: "Issues",
//         data: [300, 50, 100],
//         backgroundColor: [
//           "rgb(255, 99, 132)",
//           "rgb(54, 162, 235)",
//           "rgb(255, 205, 86)",
//         ],
//       },
//     ],
//   },
// });

// new Chart(document.getElementById("chartjs-1"), {
//   type: "bar",
//   data: {
//     labels: ["January", "February", "March", "April", "May", "June", "July"],
//     datasets: [
//       {
//         label: "Likes",
//         data: [65, 59, 80, 81, 56, 55, 40],
//         fill: false,
//         backgroundColor: [
//           "rgba(255, 99, 132, 0.2)",
//           "rgba(255, 159, 64, 0.2)",
//           "rgba(255, 205, 86, 0.2)",
//           "rgba(75, 192, 192, 0.2)",
//           "rgba(54, 162, 235, 0.2)",
//           "rgba(153, 102, 255, 0.2)",
//           "rgba(201, 203, 207, 0.2)",
//         ],
//         borderColor: [
//           "rgb(255, 99, 132)",
//           "rgb(255, 159, 64)",
//           "rgb(255, 205, 86)",
//           "rgb(75, 192, 192)",
//           "rgb(54, 162, 235)",
//           "rgb(153, 102, 255)",
//           "rgb(201, 203, 207)",
//         ],
//         borderWidth: 1,
//       },
//     ],
//   },
//   options: {
//     scales: {
//       yAxes: [
//         {
//           ticks: {
//             beginAtZero: true,
//           },
//         },
//       ],
//     },
//   },
// });

// new Chart(document.getElementById("chartjs-0"), {
//   type: "line",
//   data: {
//     labels: ["January", "February", "March", "April", "May", "June", "July"],
//     datasets: [
//       {
//         label: "Views",
//         data: [65, 59, 80, 81, 56, 55, 40],
//         fill: false,
//         borderColor: "rgb(75, 192, 192)",
//         lineTension: 0.1,
//       },
//     ],
//   },
//   options: {},
// });

// new Chart(document.getElementById("chartjs-7"), {
//   type: "bar",
//   data: {
//     labels: ["January", "February", "March", "April"],
//     datasets: [
//       {
//         label: "Page Impressions",
//         data: [10, 20, 30, 40],
//         borderColor: "rgb(255, 99, 132)",
//         backgroundColor: "rgba(255, 99, 132, 0.2)",
//       },
//       {
//         label: "Adsense Clicks",
//         data: [5, 15, 10, 30],
//         type: "line",
//         fill: false,
//         borderColor: "rgb(54, 162, 235)",
//       },
//     ],
//   },
//   options: {
//     scales: {
//       yAxes: [
//         {
//           ticks: {
//             beginAtZero: true,
//           },
//         },
//       ],
//     },
//   },
// });
</script>

<template>
  <TheHeader />
  <main>
    <div class="flex flex-col md:flex-row">
      <SideNavigation />
      <section>
        <div
          id="main"
          class="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5"
        >
          <MainHeader />
          <AnalyticsStats />
          <AnalyticsGraphs />
        </div>
      </section>
    </div>
  </main>
</template>
