<template>
  <NuxtLink
    class="group flex flex-row items-center gap-3 rounded-md border-2 bg-gray-700/25 p-1 hover:bg-gray-700/50"
    to="/"
  >
    <slot name="icon" />
    <p
      class="contentNavbar hidden text-nowrap transition-all duration-300 group-hover:opacity-75"
    >
      <slot name="text" />
    </p>

    <slot name="tag" />
  </NuxtLink>
</template>
