<script setup>
definePageMeta({
  layout: "layout-navbar",
});

useHead({
  titleTemplate: "%s React",
});
</script>

<template>
  <div class="h-[98vh] overflow-y-auto">
    <section class="grid gap-2 lg:grid-rows-[repeat(2,max)]">
      <div class="grid gap-2 lg:grid-cols-[1fr_1fr_1fr]">
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

        <section class="grid grid-cols-1 grid-rows-[50vh_50vh] gap-2">
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
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Explicabo facere, aperiam unde repellendus reiciendis
                  aspernatur veritatis a. Dicta mollitia totam quia adipisci
                  sint voluptates quam! Ullam quisquam excepturi assumenda
                  reprehenderit.
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
                  Explicabo facere, aperiam unde repellendus reiciendis
                  aspernatur veritatis a. Dicta mollitia totam quia adipisci
                  sint voluptates quam! Ullam quisquam excepturi assumenda
                  reprehenderit.
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
                  Explicabo facere, aperiam unde repellendus reiciendis
                  aspernatur veritatis a. Dicta mollitia totam quia adipisci
                  sint voluptates quam! Ullam quisquam excepturi assumenda
                  reprehenderit.
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
                  Explicabo facere, aperiam unde repellendus reiciendis
                  aspernatur veritatis a. Dicta mollitia totam quia adipisci
                  sint voluptates quam! Ullam quisquam excepturi assumenda
                  reprehenderit.
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
                  Explicabo facere, aperiam unde repellendus reiciendis
                  aspernatur veritatis a. Dicta mollitia totam quia adipisci
                  sint voluptates quam! Ullam quisquam excepturi assumenda
                  reprehenderit.
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Explicabo facere, aperiam unde repellendus reiciendis aspernatur
                veritatis a. Dicta mollitia totam quia adipisci sint voluptates
                quam! Ullam quisquam excepturi assumenda reprehenderit.
              </template>
            </ClientDesktopCard>
          </template>
        </ClientDesktopMorphFrame>
      </div>

      <!--  -->
      <h2 class="py-5 text-center text-2xl">Autre information</h2>

      <div class="grid gap-2 lg:grid-cols-[1fr_1fr_1fr]">
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

        <section class="grid grid-cols-1 gap-2">
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
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Explicabo facere, aperiam unde repellendus reiciendis
                  aspernatur veritatis a. Dicta mollitia totam quia adipisci
                  sint voluptates quam! Ullam quisquam excepturi assumenda
                  reprehenderit.
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
                  Explicabo facere, aperiam unde repellendus reiciendis
                  aspernatur veritatis a. Dicta mollitia totam quia adipisci
                  sint voluptates quam! Ullam quisquam excepturi assumenda
                  reprehenderit.
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
                  Explicabo facere, aperiam unde repellendus reiciendis
                  aspernatur veritatis a. Dicta mollitia totam quia adipisci
                  sint voluptates quam! Ullam quisquam excepturi assumenda
                  reprehenderit.
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Explicabo facere, aperiam unde repellendus reiciendis aspernatur
                veritatis a. Dicta mollitia totam quia adipisci sint voluptates
                quam! Ullam quisquam excepturi assumenda reprehenderit.
              </template>
            </ClientDesktopCard>
          </template>
        </ClientDesktopMorphFrame>
      </div>
    </section>
  </div>
</template>
