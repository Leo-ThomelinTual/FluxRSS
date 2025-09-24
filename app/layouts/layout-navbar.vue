<template>
  <main class="grid grid-cols-[max-content_auto] gap-2 p-2">
    <div class="z-[1000] flex">
      <ClientDesktopNavbar />
      <ClientDesktopChangelog />
    </div>

    <slot />
  </main>
</template>
