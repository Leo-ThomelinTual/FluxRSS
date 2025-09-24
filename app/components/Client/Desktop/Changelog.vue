<script setup>
import { slideFromRight } from "~/assets/js/activeFunction";
</script>

<template>
  <section
    id="slideFromRight"
    class="ease absolute right-[5px] flex hidden h-[98%] w-[500px] -translate-x-[-100%] flex-col gap-5 rounded-md bg-black p-4 backdrop-blur-sm transition-all duration-500"
  >
    <article class="flex flex-row items-center gap-2 overflow-hidden">
      <ClientUtilsTag id="contentNavbar" class="bg-red-800">
        <template #typename>New</template>
      </ClientUtilsTag>
      <h1 class="text-2xl font-bold">Changelog</h1>
      <Icon
        class="ease ml-auto flex cursor-pointer self-center text-red-500 transition-all duration-300 hover:rotate-180"
        size="1.5rem"
        name="material-symbols:close"
        @click="slideFromRight"
      />
    </article>

    <section class="flex h-max flex-col gap-4">
      <article class="flex flex-col gap-3">
        <h2 class="border-b-2 text-xl font-bold">v1.3.2</h2>
        <p class="p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          distinctio ipsam quasi possimus tempora nulla quibusdam, inventore
          alias odit. Necessitatibus dicta quod atque explicabo tempore mollitia
          quas exercitationem quidem! Illo?
        </p>
        <ul class="flex flex-col gap-2">
          <li class="rounded-md bg-green-500 p-2">[+] New</li>
          <li class="rounded-md bg-red-500 p-2">[-] New</li>
          <li class="rounded-md bg-blue-500 p-2">[-] info</li>
          <li class="rounded-md bg-black p-2">[-] info</li>
        </ul>
      </article>

      <article class="flex flex-col gap-3">
        <h2 class="border-b-2 text-xl font-bold">v1.3.1</h2>
        <p class="p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          distinctio ipsam quasi possimus tempora nulla quibusdam, inventore
          alias odit. Necessitatibus dicta quod atque explicabo tempore mollitia
          quas exercitationem quidem! Illo?
        </p>
        <ul class="flex flex-col gap-2">
          <li class="rounded-md bg-green-500 p-2">[+] New</li>
          <li class="rounded-md bg-red-500 p-2">[-] New</li>
          <li class="rounded-md bg-blue-500 p-2">[-] info</li>
          <li class="rounded-md bg-black p-2">[-] info</li>
        </ul>
      </article>
    </section>
  </section>
</template>
