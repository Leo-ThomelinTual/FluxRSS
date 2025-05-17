<script setup>
const navbar = "navbar";
const frame = "frame";
const changelog = "changelog";
</script>

<template>
  <main
    class="grid lg:grid-cols-[auto_1fr_1fr_1fr] xxl:grid-cols-[auto_1fr_1fr_1fr] items-center lg:pr-3 gap-[--grid-gaps] w-full h-[100vh]"
  >
    <NuxtLayout class="mt-3 lg:mt-0" :name="navbar"></NuxtLayout>
    <Frame :name="frame">
      <template #flux-title>A faire</template>
    </Frame>

    <Frame :name="frame">
      <template #flux-title>En cours</template>
    </Frame>
    <Frame :name="frame">
      <template #flux-title>Terminer</template>
    </Frame>
    <NuxtLayout :name="changelog"></NuxtLayout>
  </main>
</template>

<style setup></style>
