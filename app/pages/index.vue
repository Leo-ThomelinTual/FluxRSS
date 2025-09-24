<script lang="tsx" setup>
definePageMeta({
  layout: "layout-navbar",
});

useHead({
  titleTemplate: "%s Homepage",
});
</script>

<template>
  <div class="h-[98vh] overflow-y-auto">
    <section class="h-full w-full">
      <div
        class="ssorbo welcome_message flex h-full flex-col items-center justify-center gap-2"
      >
        <h2 class="text-2xl">FluxRSS</h2>
        <p class="w-full text-center md:w-1/4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
          fugiat error vel aspernatur pariatur.
        </p>
        <div class="flex gap-4">
          <ClientUtilsButtonSecondary>
            <template #button-text> Placeholder </template>
          </ClientUtilsButtonSecondary>
          <ClientUtilsButtonPrimary>
            <template #button-text>Placeholder</template>
          </ClientUtilsButtonPrimary>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.welcome_message {
  --animation-property: 2s ease;
  --YSlideStart: 80px;
  --YSlideOverflow: -10px;
  --YSlideEnd: 0;
  --BlurStart: 10px;
  --BlurEnd: 0;
}
</style>
