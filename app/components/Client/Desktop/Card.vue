<template>
  <article
    class="feed-item rounded-lg border border-gray-300 p-3 transition-colors duration-200"
  >
    <slot name="frame-img">
      <NuxtImg
        class="mb-3 h-48 w-full rounded-lg object-cover"
        src="./public/img/placeholder.png"
      />
    </slot>
    <h3 class="mb-2 text-lg font-semibold">
      <slot name="frame-title">Title - Placeholder</slot>
    </h3>
    <p class="mb-3 line-clamp-3 text-gray-600">
      <slot name="frame-text"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        corporis iste expedita, perferendis voluptatem vitae, pariatur, ullam
        porro ipsum natus fugiat mollitia. Cupiditate inventore, vitae nam sequi
        aliquid tempore suscipit!
      </slot>
    </p>
    <div class="flex items-center justify-between">
      <ClientUtilsButtonTertiary>
        <template #text>Lire plus</template>
      </ClientUtilsButtonTertiary>
    </div>
  </article>
</template>
