<template>
  <article
    class="feed-item flex gap-2 rounded-lg border border-gray-300 p-3 transition-colors duration-200"
  >
    <slot name="frame-img">
      <NuxtImg
        class="flex w-[1000px] self-center rounded-md"
        src="/img/placeholder.png"
      />
    </slot>
    <article class="flex flex-col justify-between gap-2">
      <h3 class="text-lg font-semibold">
        <slot name="frame-title">Title - Placeholder</slot>
      </h3>
      <p class="mb-3 line-clamp-3 text-gray-600">
        <slot name="frame-text"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          corporis iste expedita, perferendis voluptatem vitae, pariatur, ullam
          porro ipsum natus fugiat mollitia. Cupiditate inventore, vitae nam
          sequi aliquid tempore suscipit!
        </slot>
      </p>
      <div class="flex items-end justify-between self-end">
        <ClientUtilsButtonTertiary>
          <template #text>Lire plus</template>
        </ClientUtilsButtonTertiary>
      </div>
    </article>
  </article>
</template>
