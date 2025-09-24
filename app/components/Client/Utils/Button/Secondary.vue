<template>
  <NuxtLink
    class="flex h-[45px] w-max items-center rounded-md px-2 text-white hover:text-gray-300"
    to="/"
  >
    <p><slot name="button-text">Placeholder</slot></p>
    <slot name="button-icon" />
  </NuxtLink>
</template>
