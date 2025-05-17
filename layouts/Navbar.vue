<script setup>
const tag = "tag";
import { slideFromRight } from "~/public/js/activeFunction";
import { navbarCollapse } from "~/public/js/navbar";

function dropdownToggle() {
  const dropdown = document.querySelector("#dropdown");
  const arrowDownRotate = document.querySelector("#arrowDownRotate");
  if (dropdown.classList.contains("hidden")) {
    dropdown.classList.remove("hidden");
    dropdown.classList.add("flex");
    arrowDownRotate.classList.add("rotate-180");
  } else {
    dropdown.classList.remove("flex");
    dropdown.classList.add("hidden");
    arrowDownRotate.classList.remove("rotate-180");
  }
}
function dropdownToggleMyFlux() {
  const dropdownFlux = document.querySelector("#dropdownFlux");
  const arrowDownRotate = document.querySelector("#arrowDownRotate");
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

<template name="navbar">
  <nav
    id="navbarCollapse"
    class="navbar ml-3 px-2 w-[55px] h-[98vh] rounded-md relative transition-all duration-500 ease border-2 border-gray-500 border-opacity-25 hover:border-opacity-75 overflow-hidden"
  >
    <div class="flex flex-row">
      <button @click="navbarCollapse" class="flex py-2">
        <Icon
          id="collapseIcon"
          class="hidden text-4xl"
          name="tabler:layout-sidebar-left-collapse-filled"
        />
        <Icon
          id="collapseIcon2"
          class="flex text-4xl"
          name="tabler:layout-sidebar-right-collapse-filled"
        />
      </button>
      <button
        @click="slideFromRight"
        id="contentNavbar"
        class="group h-max hidden ml-auto self-center py-1 cursor-pointer px-2 bg-gray-500 text-green-500 border-2 border-gray-500 bg-opacity-25 rounded-md hover:gap-1 hover:bg-opacity-50 transition-all duration-300 ease"
      >
        v1.2.4
        <p
          class="w-0 overflow-hidden text-nowrap transition-all duration-200 ease group-hover:w-[80px]"
        >
          Changelog
        </p>
      </button>
    </div>
    <article class="flex flex-row items-center">
      <h2 id="contentNavbar" class="py-1 hidden font-bold items-center">
        <Icon
          class="text-2xl mx-1"
          name="material-symbols:view-cozy-outline"
        />Pages
      </h2>
      <button @click="dropdownToggleMyPage" class="flex">
        <Icon
          id="arrowDownRotate"
          class="p-2 text-2xl mx-1 transition-all duration-200 ease"
          name="material-symbols:keyboard-arrow-down"
        />
      </button>
    </article>

    <ul id="dropdownPage" class="flex flex-col gap-3 py-3">
      <li
        class="border-2 bg-gray-600 bg-opacity-25 hover:bg-opacity-50 p-1 rounded-md"
      >
        <NuxtLink class="flex flex-row gap-3 items-center" to="/">
          <Icon class="text-3xl" name="material-symbols:home-outline-rounded" />
          <p
            id="contentNavbar"
            class="hidden text-nowrap hover:opacity-75 transition-all duration-300 ease"
          >
            Homepage
          </p>
        </NuxtLink>
      </li>
      <li
        class="border-2 bg-gray-600 bg-opacity-25 hover:bg-opacity-50 p-1 rounded-md"
      >
        <NuxtLink class="flex flex-row gap-3 items-center" to="/todolist">
          <Icon class="text-3xl" name="lucide:list-todo" />
          <p
            id="contentNavbar"
            class="hidden text-nowrap hover:opacity-75 transition-all duration-300 ease"
          >
            Todo list
          </p>
          <Tag id="contentNavbar" class="bg-red-800" :name="tag">
            <template #typename>New</template></Tag
          >
        </NuxtLink>
      </li>
      <li
        class="border-2 bg-gray-600 bg-opacity-25 hover:bg-opacity-50 p-1 rounded-md"
      >
        <NuxtLink class="flex flex-row gap-3 items-center" to="/">
          <Icon class="text-3xl" name="mdi:test-tube" />
          <p
            id="contentNavbar"
            class="hidden text-nowrap hover:opacity-75 transition-all duration-300 ease"
          >
            Experimental
          </p>
          <Tag id="contentNavbar" class="bg-red-800" :name="tag">
            <template #typename>New</template></Tag
          >
        </NuxtLink>
      </li>
    </ul>
    <article class="flex flex-row items-center">
      <h2 id="contentNavbar" class="py-1 hidden font-bold items-center">
        <Icon
          class="text-3xl mx-1"
          name="material-symbols-light:flowchart-outline"
        />Vos flux
      </h2>
      <button @click="dropdownToggleMyFlux" class="flex">
        <Icon
          id="arrowDownRotate"
          class="p-2 text-2xl mx-1 transition-all duration-200 ease"
          name="material-symbols:keyboard-arrow-down"
        />
      </button>
    </article>

    <ul id="dropdownFlux" class="flex flex-col gap-3 py-3">
      <li
        class="border-2 bg-gray-600 bg-opacity-25 hover:bg-opacity-50 p-1 rounded-md"
      >
        <NuxtLink class="flex flex-row gap-3 items-center" to="/react">
          <Icon class="text-3xl" name="famicons:logo-react" />
          <p
            id="contentNavbar"
            class="hidden text-nowrap hover:opacity-75 transition-all duration-300 ease"
          >
            React
          </p>
          <Tag id="contentNavbar" class="bg-blue-500" :name="tag">
            <template #typename>New Flux</template></Tag
          >
        </NuxtLink>
      </li>

      <li
        class="flex flex-row items-center gap-3 border-2 bg-gray-600 bg-opacity-25 hover:bg-opacity-50 p-[8px] rounded-md"
      >
        <NuxtLink class="flex flex-row gap-3 items-center" to="/">
          <Icon class="text-1xl" name="tabler:brand-tailwind" />
          <p
            id="contentNavbar"
            class="hidden text-nowrap hover:opacity-75 transition-all duration-300 ease"
          >
            TailwindCSS
          </p>
          <Tag id="contentNavbar" class="bg-blue-800" :name="tag">
            <template #typename>New Flux</template></Tag
          >
        </NuxtLink>

        <button @click="dropdownToggle" id="contentNavbar" class="hidden">
          <Icon
            id="arrowDownRotate"
            class="p-2 text-2xl mx-1 transition-all duration-200 ease"
            name="material-symbols:keyboard-arrow-down"
          />
        </button>
      </li>
      <div
        id="dropdown"
        class="hidden overflow-hidden w-[100%] p-1 rounded-md border-2 border-gray-400 transition-all duration-300 ease"
      >
        <ul class="flex flex-col gap-1">
          <li class="hover:opacity-75">
            <NuxtLink to="/">Dropdown #1</NuxtLink>
          </li>
          <li class="hover:opacity-75">
            <NuxtLink to="/">Dropdown #2</NuxtLink>
          </li>
          <li class="hover:opacity-75">
            <NuxtLink to="/">Dropdown #3</NuxtLink>
          </li>
        </ul>
      </div>
      <li
        class="border-2 bg-gray-600 bg-opacity-25 hover:bg-opacity-50 p-1 rounded-md"
      >
        <NuxtLink class="flex flex-row gap-3 items-center" to="/">
          <Icon class="text-4xl" name="ri:vuejs-line" />
          <p
            id="contentNavbar"
            class="hidden text-nowrap hover:opacity-75 transition-all duration-300 ease"
          >
            VueJS
          </p>
          <Tag id="contentNavbar" class="bg-red-500" :name="tag">
            <template #typename>New Flux</template></Tag
          >
          <Tag id="contentNavbar" class="bg-green-500" :name="tag">
            <template #typename>Update</template></Tag
          >
        </NuxtLink>
      </li>
      <li
        class="flex flex-row items-center border-2 bg-gray-600 bg-opacity-25 hover:bg-opacity-50 p-1 rounded-md"
      >
        <NuxtLink class="flex flex-row gap-3 items-center" to="/">
          <Icon class="text-2xl" name="tabler:brand-nuxt" />
          <p
            id="contentNavbar"
            class="hidden text-nowrap hover:opacity-75 transition-all duration-300 ease"
          >
            NuxtJS
          </p>
          <Tag id="contentNavbar" class="bg-green-700" :name="tag">
            <template #typename>New Flux</template></Tag
          >
        </NuxtLink>
      </li>
    </ul>
    <div @click="collapseNavbar" class="w-full h-full"></div>
    <button
      @click="Changelog"
      id="contentNavbar"
      class="absolute bottom-0 left-[50%] -translate-x-[50%] cursor-pointer text-gray-600 hidden hover:text-gray-200 transition-all duration-300 ease"
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
