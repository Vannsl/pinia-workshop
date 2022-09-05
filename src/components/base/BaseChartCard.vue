<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <dl class="bg-white border-transparent rounded-lg shadow-xl">
    <div
      class="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2"
    >
      <dt class="font-bold uppercase text-gray-600">
        {{ title }}
      </dt>
    </div>
    <dd class="p-5">
      <slot />
    </dd>
  </dl>
</template>
