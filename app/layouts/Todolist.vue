<template>
  <main class="grid grid-cols-[auto_1fr_auto] gap-[--grid-gaps]">
    <slot />
    <div class="my-2 flex self-start">
      <ClientDesktopNavbar />
      <ClientDesktopChangelog />
    </div>

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
    </section>
  </main>
</template>
