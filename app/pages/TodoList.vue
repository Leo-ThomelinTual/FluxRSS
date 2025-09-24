<script setup>
definePageMeta({
  layout: "layout-navbar",
});

useHead({
  titleTemplate: "%s TodoList",
});
</script>

<template>
  <div>
    <section class="grid grid-cols-[max-content_auto] items-center gap-2">
      <section
        class="my-3 grid h-max grid-cols-1 items-center justify-center gap-[0.7em] self-center md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr]"
      >
        <StickerFrame />
        <StickerFrame />
        <StickerFrame />
        <StickerFrame />
        <StickerFrame />
        <StickerFrame />
        <StickerFrame />
        <StickerFrame />
        <StickerFrame />
        <StickerFrame />
        <StickerFrame />
        <StickerFrame />
      </section>
    </section>
  </div>
</template>
