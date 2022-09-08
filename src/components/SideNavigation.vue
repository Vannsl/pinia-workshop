<script setup lang="ts"></script>

<template>
  <nav aria-label="alternative nav">
    <div
      class="bg-white dark:bg-gray-800 h-20 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48 content-center"
    >
      <div
        class="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between"
      >
        <ul
          class="list-reset flex flex-row md:flex-col pt-3 md:py-3 px-1 md:px-2 text-center md:text-left"
        >
          <li class="mr-3 flex-1">
            <a
              href="#"
              class="block py-1 md:py-3 pl-1 align-middle dark:text-white no-underlineborder-b-2 border-pink-600"
            >
              <i class="fas fa-chart-area pr-0 md:pr-3 text-pink-600"></i
              ><span
                class="pb-1 md:pb-0 text-xs md:text-base dark:text-white block md:inline-block"
                >Analytics</span
              >
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
