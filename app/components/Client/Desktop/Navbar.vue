<script setup>
import { slideFromRight } from "./assets/js/activeFunction";
import { navbarCollapse } from "~/assets/js/navbar";
</script>

<template>
  <!-- Navbar as w-[250px] and w-[55px] to make work the transition between both -->
  <nav
    id="navbarCollapse"
    class="navbar ease relative ml-3 h-[98vh] w-[250px] w-[55px] gap-3 overflow-hidden rounded-md border-2 border-gray-500/25 transition-all duration-500 hover:border-gray-500/75"
  >
    <div class="flex justify-between px-2">
      <button
        id="collapseIcon"
        class="hidden cursor-pointer py-2"
        @click="navbarCollapse"
      >
        <Icon
          class="flex-shrink-0"
          size="2rem"
          name="tabler:layout-sidebar-left-collapse-filled"
        />
      </button>
      <button
        id="collapseIcon2"
        class="flex cursor-pointer py-2"
        @click="navbarCollapse"
      >
        <Icon
          class="flex-shrink-0"
          size="2rem"
          name="tabler:layout-sidebar-right-collapse-filled"
        />
      </button>
      <button
        class="navbarContentHide ease group hidden h-max cursor-pointer self-center rounded-md border-2 border-gray-500 bg-gray-500/25 px-2 py-1 text-green-500 transition-all duration-300 hover:gap-1 hover:bg-gray-500/50"
        @click="slideFromRight"
      >
        v1.2.4
        <p
          class="ease w-0 overflow-hidden text-nowrap transition-all duration-200 group-hover:w-[80px]"
        >
          Changelog
        </p>
      </button>
    </div>

    <section class="flex flex-col gap-3 px-2">
      <ul class="flex flex-col gap-2">
        <li>
          <ClientUtilsSidebarTitle>
            <template #icon>
              <Icon
                class="flex-shrink-0 text-3xl"
                name="material-symbols:view-cozy-outline"
              />
            </template>
            <template #title> Pages </template>
          </ClientUtilsSidebarTitle>
        </li>

        <li>
          <ClientUtilsButtonPrimary to="/">
            <template #icon>
              <Icon
                class="flex-shrink-0 text-3xl"
                name="material-symbols:home-outline-rounded"
              />
            </template>
            <template #text> Homepage </template>
          </ClientUtilsButtonPrimary>
        </li>

        <li>
          <ClientUtilsButtonPrimary to="/todolist">
            <template #icon>
              <Icon class="flex-shrink-0 text-3xl" name="lucide:list-todo" />
            </template>
            <template #text> Todo list </template>
          </ClientUtilsButtonPrimary>
        </li>

        <li>
          <ClientUtilsButtonPrimary to="/">
            <template #icon>
              <Icon class="flex-shrink-0 text-3xl" name="mdi:test-tube" />
            </template>
            <template #text> Experimental </template>
          </ClientUtilsButtonPrimary>
        </li>
      </ul>

      <ul class="flex flex-col gap-2">
        <li>
          <ClientUtilsSidebarTitle>
            <template #icon>
              <Icon
                class="flex-shrink-0 text-3xl"
                name="material-symbols-light:flowchart-outline"
              />
            </template>
            <template #title> Vos flux </template>
          </ClientUtilsSidebarTitle>
        </li>

        <li>
          <ClientUtilsButtonPrimary to="/react">
            <template #icon>
              <Icon class="flex-shrink-0 text-3xl" name="famicons:logo-react" />
            </template>
            <template #text> React </template>
          </ClientUtilsButtonPrimary>
        </li>

        <li>
          <ClientUtilsButtonPrimary to="/">
            <template #icon>
              <Icon
                class="flex-shrink-0 text-3xl"
                name="tabler:brand-tailwind"
              />
            </template>
            <template #text> TailwindCSS </template>
          </ClientUtilsButtonPrimary>
        </li>

        <li>
          <ClientUtilsButtonPrimary to="/">
            <template #icon>
              <Icon class="flex-shrink-0 text-3xl" name="ri:vuejs-line" />
            </template>
            <template #text> Vue </template>
          </ClientUtilsButtonPrimary>
        </li>

        <li>
          <ClientUtilsButtonPrimary to="/">
            <template #icon>
              <Icon class="flex-shrink-0 text-3xl" name="tabler:brand-nuxt" />
            </template>
            <template #text> Nuxt </template>
            <template #tag>
              <ClientUtilsTag class="navbarContentHide bg-red-700">
                <template #typename> new </template>
              </ClientUtilsTag>
            </template>
          </ClientUtilsButtonPrimary>
        </li>
      </ul>
    </section>

    <div aria-hidden="true" class="h-full w-full" @click="navbarCollapse" />

    <button
      class="navbarContentHide ease absolute bottom-0 left-[50%] hidden -translate-x-[50%] cursor-pointer text-gray-700/50 transition-all duration-300 hover:text-gray-200"
      @click="slideFromRight"
    >
      v1.2.4 - &copy; 2025
    </button>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #000000;
  box-shadow: 0 0 5px 2px black;
  transition: all 0.3s ease-in-out;
}

.active {
  background-color: red;
}
</style>
