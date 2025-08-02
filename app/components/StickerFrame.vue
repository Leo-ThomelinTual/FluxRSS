<template>
  <article
    class="group ease flex h-[250px] w-[350px] flex-col gap-2 rounded-md border-2 border-gray-500/25 p-2 transition-all duration-300 hover:border-gray-500/75 hover:shadow-lg hover:shadow-black"
  >
    <h3 class="text-xl font-bold">
      <slot name="todo-title">Todo title - placeholder</slot>
    </h3>
    <div
      class="ease h-[5px] w-[0] rounded-xl bg-gray-500 transition-all duration-300 group-hover:w-[100%]"
    />
    <p>
      <slot name="todo-text"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur,
        quam. Culpa laudantium ea fugiat commodi et impedit, quos reprehenderit
        optio nam eligendi sunt pariatur, sint odit omnis, facilis animi quae.
      </slot>
    </p>
  </article>
</template>
