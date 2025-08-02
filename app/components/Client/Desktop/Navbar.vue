<script setup>
import { slideFromRight } from "./assets/js/activeFunction";
import { navbarCollapse } from "~/assets/js/navbar";

function dropdownToggleMyFlux() {
  const dropdownFlux = document.querySelector("#dropdownFlux");
  const arrowDownRotate = document.querySelector("#arrowDownRotateFlux");
  if (dropdownFlux.classList.contains("flex")) {
    dropdownFlux.classList.remove("flex");
    dropdownFlux.classList.add("hidden");
    arrowDownRotate.classList.add("rotate-180");
  } else {
    dropdownFlux.classList.remove("hidden");
    dropdownFlux.classList.add("flex");
    arrowDownRotate.classList.remove("rotate-180");
  }
}
function dropdownToggleMyPage() {
  const dropdownPage = document.querySelector("#dropdownPage");
  const arrowDownRotate = document.querySelector("#arrowDownRotate");
  if (dropdownPage.classList.contains("flex")) {
    dropdownPage.classList.remove("flex");
    dropdownPage.classList.add("hidden");
    arrowDownRotate.classList.add("rotate-180");
  } else {
    dropdownPage.classList.remove("hidden");
    dropdownPage.classList.add("flex");
    arrowDownRotate.classList.remove("rotate-180");
  }
}
</script>

<template>
  <nav
    id="navbarCollapse"
    class="navbar ease relative ml-3 h-[98vh] w-[55px] gap-3 overflow-hidden rounded-md border-2 border-gray-500/25 px-2 transition-all duration-500 hover:border-gray-500/75"
  >
    <div class="flex justify-between">
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
        id="contentNavbar"
        class="group ease hidden h-max cursor-pointer self-center rounded-md border-2 border-gray-500 bg-gray-500/25 px-2 py-1 text-green-500 transition-all duration-300 hover:gap-1 hover:bg-gray-500/50"
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

    <article
      class="flex cursor-pointer flex-row flex-wrap justify-between select-none"
      @click="dropdownToggleMyPage"
    >
      <h2 id="contentNavbar" class="hidden items-center py-1 font-bold">
        <Icon
          class="mx-1 flex-shrink-0 text-3xl"
          name="material-symbols:view-cozy-outline"
        />
        Pages
      </h2>
      <button>
        <Icon
          id="arrowDownRotate"
          size="2em"
          class="ease mx-1 flex-shrink-0 cursor-pointer p-2 transition-all duration-200"
          name="material-symbols:keyboard-arrow-down"
        />
      </button>
    </article>

    <section id="dropdownPage" class="flex flex-col gap-3 py-3">
      <ClientUtilsButtonPrimary to="/">
        <template #icon>
          <Icon
            class="flex-shrink-0 text-3xl"
            name="material-symbols:home-outline-rounded"
          />
        </template>
        <template #text> Homepage </template>
      </ClientUtilsButtonPrimary>

      <ClientUtilsButtonPrimary to="/todolist">
        <template #icon>
          <Icon class="flex-shrink-0 text-3xl" name="lucide:list-todo" />
        </template>
        <template #text> Todolist </template>
      </ClientUtilsButtonPrimary>

      <ClientUtilsButtonPrimary to="/">
        <template #icon>
          <Icon class="flex-shrink-0 text-3xl" name="mdi:test-tube" />
        </template>
        <template #text> Experimental </template>
      </ClientUtilsButtonPrimary>
    </section>

    <article
      class="flex w-full cursor-pointer flex-row flex-wrap justify-between select-none"
      @click="dropdownToggleMyFlux"
    >
      <h2 id="contentNavbar" class="hidden items-center py-1 font-bold">
        <Icon
          class="mx-1 flex-shrink-0 text-3xl"
          name="material-symbols-light:flowchart-outline"
        />Vos flux
      </h2>
      <button>
        <Icon
          id="arrowDownRotateFlux"
          size="2em"
          class="ease mx-1 flex-shrink-0 cursor-pointer p-2 transition-all duration-200"
          name="material-symbols:keyboard-arrow-down"
        />
      </button>
    </article>

    <section id="dropdownFlux" class="flex flex-col gap-3 py-3">
      <ClientUtilsButtonPrimary to="/react">
        <template #icon>
          <Icon class="flex-shrink-0 text-3xl" name="famicons:logo-react" />
        </template>
        <template #text> React </template>
      </ClientUtilsButtonPrimary>

      <ClientUtilsButtonPrimary to="/">
        <template #icon>
          <Icon class="flex-shrink-0 text-3xl" name="tabler:brand-tailwind" />
        </template>
        <template #text> TailwindCSS </template>
      </ClientUtilsButtonPrimary>

      <ClientUtilsButtonPrimary to="/">
        <template #icon>
          <Icon class="flex-shrink-0 text-3xl" name="ri:vuejs-line" />
        </template>
        <template #text> VueJS </template>
      </ClientUtilsButtonPrimary>

      <ClientUtilsButtonPrimary to="/">
        <template #icon>
          <Icon class="flex-shrink-0 text-3xl" name="tabler:brand-nuxt" />
        </template>

        <template #text> NuxtJS </template>

        <template #tag>
          <ClientUtilsTag>
            <template #typename> test </template>
          </ClientUtilsTag>
        </template>
      </ClientUtilsButtonPrimary>
    </section>

    <div class="h-full w-full" @click="navbarCollapse" />
    <button
      id="contentNavbar"
      class="ease absolute bottom-0 left-[50%] hidden -translate-x-[50%] cursor-pointer text-gray-700/50 transition-all duration-300 hover:text-gray-200"
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
