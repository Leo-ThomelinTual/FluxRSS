<template>
  <main
    class="grid h-[100vh] w-[100%] grid-cols-[auto_1.5fr_1fr_1fr] items-center gap-2 lg:pr-3"
  >
    <slot />
    <ClientDesktopNavbar class="mt-3 lg:mt-0" />

    <ClientDesktopMorphFrame>
      <template #flux-title>Section 1</template>
      <template #flux-title-link>
        <a
          class="ease text-xl text-blue-500 transition-all duration-500 hover:pl-1"
          href="www.facebook.fr"
        >
          Link
        </a>
      </template>
      <template #card>
        <ClientDesktopCard>
          <template #frame-img>
            <NuxtImg
              class="mb-3 h-48 w-full rounded-lg object-cover"
              src="/img/placeholder.png"
            />
          </template>
          <template #frame-title> TEST </template>
          <template #frame-text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
            facere, aperiam unde repellendus reiciendis aspernatur veritatis a.
            Dicta mollitia totam quia adipisci sint voluptates quam! Ullam
            quisquam excepturi assumenda reprehenderit.
          </template>
        </ClientDesktopCard>
      </template>
    </ClientDesktopMorphFrame>

    <ClientDesktopMorphFrame>
      <template #flux-title>Section 2</template>
      <template #flux-title-link>
        <a
          class="ease text-xl text-blue-500 transition-all duration-500 hover:pl-1"
          href="www.facebook.fr"
        >
          Link
        </a>
      </template>
      <template #card>
        <ClientDesktopCard>
          <template #frame-img>
            <NuxtImg
              class="mb-3 h-48 w-full rounded-lg object-cover"
              src="/img/placeholder.png"
            />
          </template>
          <template #frame-title> TEST </template>
          <template #frame-text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
            facere, aperiam unde repellendus reiciendis aspernatur veritatis a.
            Dicta mollitia totam quia adipisci sint voluptates quam! Ullam
            quisquam excepturi assumenda reprehenderit.
          </template>
        </ClientDesktopCard>
      </template>
    </ClientDesktopMorphFrame>

    <ClientDesktopMorphFrame>
      <template #flux-title>Section 3</template>
      <template #flux-title-link>
        <a
          class="ease text-xl text-blue-500 transition-all duration-500 hover:pl-1"
          href="www.facebook.fr"
        >
          Link
        </a>
      </template>
      <template #card>
        <ClientDesktopCardHorizontal />
      </template>
    </ClientDesktopMorphFrame>

    <ClientDesktopChangelog />
  </main>
</template>

<style scoped>
main {
  backdrop-filter: opacity(0.9);
  border: 1px solid rgba(63, 63, 63, 0.685);
}
</style>
