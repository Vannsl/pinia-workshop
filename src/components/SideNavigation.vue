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
            <router-link
              class="block py-1 md:py-3 pl-1 align-middle dark:text-white no-underline border-b-2 border-gray-800 hover:border-pink-600"
              to="/"
            >
              <i class="fas fa-chart-area pr-0 md:pr-3 text-pink-600"></i
              ><span
                class="pb-1 md:pb-0 text-xs md:text-base dark:text-white block md:inline-block"
                >Analytics</span
              >
            </router-link>
          </li>
          <li class="mr-3 flex-1">
            <router-link
              to="/todo"
              class="block py-1 md:py-3 pl-1 align-middle dark:text-white no-underline border-b-2 border-gray-800 hover:border-purple-500"
            >
              <i class="fa fa-tasks pr-0 md:pr-3"></i
              ><span
                class="pb-1 md:pb-0 text-xs md:text-base dark:text-gray-200 block md:inline-block"
                >Todo List</span
              >
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
