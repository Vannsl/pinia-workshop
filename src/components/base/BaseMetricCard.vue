<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  colorTheme: {
    type: String,
    required: true,
  },
  iconName: {
    type: String,
    required: true,
  },
});

const colorDlClassesConfig = {
  blue: "from-blue-200 to-blue-100 border-blue-500",
  green: "from-green-200 to-green-100 border-green-600",
  indigo: "from-indigo-200 to-indigo-100 border-indigo-500 ",
  pink: "from-pink-200 to-pink-100 border-pink-500",
  red: "from-red-200 to-red-100 border-red-500",
  yellow: "from-yellow-200 to-yellow-100 border-yellow-600",
};

const colorIconClassesConfig = {
  blue: "bg-blue-600",
  green: "bg-green-600",
  indigo: "bg-indigo-600",
  red: "bg-red-600",
  pink: "bg-pink-600",
  yellow: "bg-yellow-600",
};

const colorDlClasses = colorDlClassesConfig[props.colorTheme];
const colorIconClasses = colorIconClassesConfig[props.colorTheme];
</script>

<template>
  <dl
    :class="colorDlClasses"
    class="bg-gradient-to-b border-b-4 rounded-lg shadow-xl p-5"
  >
    <div class="flex flex-row items-center">
      <div class="flex-shrink pr-4">
        <div :class="colorIconClasses" class="rounded-full p-5">
          <i :class="iconName" class="fa fa-2x fa-inverse"></i>
        </div>
      </div>
      <div class="flex-1 text-right md:text-center">
        <dt class="font-bold uppercase text-gray-600">
          {{ title }}
        </dt>
        <dd class="font-bold text-3xl">
          <slot />
        </dd>
      </div>
    </div>
  </dl>
</template>
