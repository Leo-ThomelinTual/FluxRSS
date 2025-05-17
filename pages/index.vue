<script lang="tsx" setup>
const navbar = "navbar";
const frame = "frame";

const changelog = "changelog";
const rssUrl1 = "https://rss.app/feeds/tAGMzuf50pGj3Xj5.xml"; // Feed Technologie
const rssUrl2 = "https://rss.app/feeds/yKyV4Psxwh3R76OV.xml"; // Feed Youtube BenjaminCode
const rssUrl3 = "https://rss.app/feeds/XlUIAKQlaOOJB0cN.xml"; // Feed dev.to
</script>

<template>
  <main
    class="grid lg:grid-cols-[auto_1fr_1fr_1fr] grid-rows-1 xxl:grid-cols-[auto_1fr_1fr_1fr] items-center lg:pr-3 gap-[--grid-gaps] w-[100vw] h-[100vh]"
  >
    <NuxtLayout class="mt-3 lg:mt-0" :name="navbar"></NuxtLayout>

    <Frame :name="frame" :rss-url="rssUrl1">
      <template #flux-title>Section 1 / Technologie</template>
    </Frame>

    <section class="grid grid-cols-1 gap-[--grid-gaps] w-full h-[98%]">
      <Frame2 :name="frame" :rss-url="rssUrl2">
        <template #flux-title>Section 2 / BenjaminCode</template>
      </Frame2>

      <MyComponents message="This is an external JSX component" />

      <Frame2 :name="frame">
        <template #flux-title>Section 3 /</template>
      </Frame2>
    </section>

    <Frame :name="frame" :rss-url="rssUrl3">
      <template #flux-title
        >Section 4 /
        <NuxtLink
          class="text-blue-500 hover:pl-1 transition-all duration-500 ease"
          to="https://www.dev.to"
          >Dev.to</NuxtLink
        ></template
      >
    </Frame>

    <NuxtLayout :name="changelog"></NuxtLayout>
  </main>
</template>

<style scoped>
* {
  overflow-anchor: none !important;
}
</style>
