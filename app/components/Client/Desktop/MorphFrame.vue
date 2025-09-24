<template>
  <section
    class="ease h-[100%] w-full rounded-md border-2 border-gray-500/25 p-2 transition-all duration-300 hover:border-gray-500/100 hover:bg-gray-500/10 hover:p-3 md:overflow-y-auto"
  >
    <article
      class="ease sticky top-0 mb-2 flex max-w-fit gap-2 text-wrap rounded-md border-2 border-gray-500/25 bg-[#121212] p-3 text-xl font-bold transition-all duration-300 hover:border-gray-500/100"
    >
      <h2><slot name="flux-title">Placeholder Title </slot> /</h2>
      <h2><slot name="flux-title-link">Placeholder Link</slot></h2>
    </article>

    <article class="flex flex-col gap-2">
      <slot name="card">
        <ClientDesktopCard />
      </slot>
    </article>
  </section>
</template>
