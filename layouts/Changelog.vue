<script setup>
import { slideFromRight } from "~/public/js/activeFunction";
const tag = "tag";
</script>

<template name="changelog">
  <section
    id="slideFromRight"
    class="absolute right-[5px] w-[500px] h-[98%] -translate-x-[-100%] overflow-y-auto flex flex-col gap-5 p-4 rounded-md bg-black backdrop-blur-sm bg-opacity-90 border-gray-500 border-opacity-25 transition-all duration-500 ease"
  >
    <article class="flex flex-row items-center">
      <Tag id="contentNavbar" class="bg-red-800" :name="tag">
        <template #typename>New</template></Tag
      >
      <h1 class="font-bold text-2xl">Changelog</h1>
      <Icon
        @click="slideFromRight"
        class="flex ml-auto self-center bg-red-500 hover:rotate-180 transition-all duration-300 ease"
        size="1.5rem"
        name="material-symbols:close"
      ></Icon>
    </article>

    <article class="flex flex-col">
      <h2 class="font-bold text-xl border-b-2">v1.3.2</h2>
      <p class="p-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        distinctio ipsam quasi possimus tempora nulla quibusdam, inventore alias
        odit. Necessitatibus dicta quod atque explicabo tempore mollitia quas
        exercitationem quidem! Illo?
      </p>
      <ul class="flex flex-col py-5 gap-1">
        <li class="p-2 bg-green-500 rounded-md">[+] New</li>
        <li class="p-2 bg-red-500 rounded-md">[-] New</li>
        <li class="p-2 bg-blue-500 rounded-md">[-] info</li>
        <li class="p-2 bg-black rounded-md">[-] info</li>
      </ul>
    </article>

    <article class="flex flex-col">
      <h2 class="font-bold text-xl border-b-2">v1.3.1</h2>
      <p class="p-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        distinctio ipsam quasi possimus tempora nulla quibusdam, inventore alias
        odit. Necessitatibus dicta quod atque explicabo tempore mollitia quas
        exercitationem quidem! Illo?
      </p>
      <ul class="flex flex-col py-5 gap-1">
        <li class="p-2 bg-green-500 rounded-md">[+] New</li>
        <li class="p-2 bg-red-500 rounded-md">[-] New</li>
        <li class="p-2 bg-blue-500 rounded-md">[-] info</li>
        <li class="p-2 bg-black rounded-md">[-] info</li>
      </ul>
    </article>
  </section>
</template>
