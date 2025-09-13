<template>
  <h2 class="navbarContentHide hidden items-center gap-2 py-1 font-bold">
    <slot name="icon">
      <Icon
        class="mx-1 flex-shrink-0 text-3xl"
        name="material-symbols:view-cozy-outline"
      />
    </slot>

    <h2>
      <slot name="title">Placeholder:name</slot>
    </h2>
  </h2>
</template>
