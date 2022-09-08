<script setup lang="ts">
import LoginAction from "./LoginAction.vue";
import ColorSchemeToggle from "./ColorSchemeToggle.vue";
</script>

<template>
  <header>
    <!--Nav-->
    <nav
      aria-label="menu nav"
      class="bg-white dark:bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0"
    >
      <div class="flex flex-wrap items-center">
        <div
          class="flex flex-shrink md:w-1/3 justify-center md:justify-start dark:text-white pl-2"
        >
          <a href="#" aria-label="Home" class="flex items-center gap-4">
            <img src="/pinia.svg" alt="Pinia logo" width="24" height="24" />
            Pinia Workshop
          </a>
        </div>

        <div
          class="flex flex-1 md:w-1/3 justify-center md:justify-start dark:text-white px-2"
        >
          <ColorSchemeToggle class="mx-auto" />
        </div>

        <div
          class="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end"
        >
          <ul
            class="list-reset flex justify-between flex-1 md:flex-none items-center"
          >
            <li class="flex-1 md:flex-none md:mr-3">
              <div class="relative inline-block">
                <LoginAction />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
