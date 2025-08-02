<template>
  <main
    class="grid h-[100vh] w-[100vw] grid-cols-[auto_1fr_auto] gap-[--grid-gaps]"
  >
    <slot />
    <ClientDesktopNavbar class="self-center" />
    <section
      class="my-3 flex h-max flex-wrap items-center justify-center gap-[0.7em] self-center"
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
      <StickerFrame />
      <StickerFrame />
      <StickerFrame />
      <StickerFrame />
    </section>
    <ClientDesktopChangelog class="self-center" />
  </main>
</template>
