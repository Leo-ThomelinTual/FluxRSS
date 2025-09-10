<template>
  <main
    class="xxl:grid-cols-[auto_1fr_1fr_1fr] grid h-[100vh] w-[100vw] grid-rows-1 items-center gap-2 lg:grid-cols-[auto_1fr_1fr_1fr] lg:pr-3"
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

    <section class="grid h-[99%] w-full grid-cols-1 items-center gap-[1px]">
      <ClientDesktopMorphFrame>
        <template #flux-title>Section 2</template>
        <template #flux-title-link
          ><a
            class="ease text-xl text-blue-500 transition-all duration-500 hover:pl-1"
            href="www.facebook.fr"
            >Link</a
          ></template
        >

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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo facere, aperiam unde repellendus reiciendis aspernatur
              veritatis a. Dicta mollitia totam quia adipisci sint voluptates
              quam! Ullam quisquam excepturi assumenda reprehenderit.
            </template>
          </ClientDesktopCard>
          <ClientDesktopCard>
            <template #frame-img>
              <NuxtImg
                class="mb-3 h-48 w-full rounded-lg object-cover"
                src="/img/placeholder.png"
              />
            </template>
            <template #frame-title> TEST </template>
            <template #frame-text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo facere, aperiam unde repellendus reiciendis aspernatur
              veritatis a. Dicta mollitia totam quia adipisci sint voluptates
              quam! Ullam quisquam excepturi assumenda reprehenderit.
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
          <ClientDesktopCard>
            <template #frame-img>
              <NuxtImg
                class="mb-3 h-48 w-full rounded-lg object-cover"
                src="/img/placeholder.png"
              />
            </template>
            <template #frame-title> TEST </template>
            <template #frame-text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo facere, aperiam unde repellendus reiciendis aspernatur
              veritatis a. Dicta mollitia totam quia adipisci sint voluptates
              quam! Ullam quisquam excepturi assumenda reprehenderit.
            </template>
          </ClientDesktopCard>
        </template>
      </ClientDesktopMorphFrame>
    </section>

    <ClientDesktopMorphFrame>
      <template #flux-title>Section 4</template>
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

    <ClientDesktopChangelog />
  </main>
</template>
