<script setup>
const navbar = "navbar";
const frame = "frame";
const changelog = "changelog";
const rssUrl4 = "https://rss.app/feeds/2V2IKnI4JaWNd7E6.xml"; // Feed React blog
const rssUrl5 = "https://rss.app/feeds/GGzOiLdWhW9UiuCc.xml"; // Feed React version
</script>

<template>
  <main
    class="grid grid-cols-[auto_2fr_1fr] items-center lg:pr-3 gap-[--grid-gaps] w-[100%] h-[100vh]"
  >
    <NuxtLayout class="mt-3 lg:mt-0" :name="navbar"></NuxtLayout>
    <Frame :name="frame" :rss-url="rssUrl4">
      <template #flux-title>Section 1 / React blog</template>
    </Frame>
    <Frame :name="frame" :rss-url="rssUrl5">
      <template #flux-title>Section 2 / React Version</template>
    </Frame>

    <NuxtLayout :name="changelog"></NuxtLayout>
  </main>
</template>

<style scoped>
main {
  backdrop-filter: opacity(0.9);
  border: 1px solid rgba(63, 63, 63, 0.685);
}
</style>
