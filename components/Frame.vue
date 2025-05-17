<script setup>
import { useRssFeed } from "~/public/js/useRssFeed";

const props = defineProps({
  name: String,
  rssUrl: String,
});

// Fonction pour nettoyer le HTML
const stripHtml = (html) => {
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
};

const { feedItems, loading, error, fetchFeed } = useRssFeed();

onMounted(async () => {
  if (props.rssUrl) {
    await fetchFeed(props.rssUrl);
  }
});
</script>

<template name="frame">
  <section
    class="border-2 rounded-md border-opacity-25 hover:bg-gray-500 overflow-y-auto hover:bg-opacity-10 border-gray-500 w-full h-[98%] p-4 hover:p-5 hover:border-opacity-100 transition-all duration-300 ease"
  >
    <header class="mb-6">
      <h1 class="text-xl font-bold mb-2">
        <slot name="flux-title"></slot>
      </h1>
    </header>

    <div v-if="loading" class="text-center text-gray-500">Chargement...</div>
    <div v-else-if="error" class="text-red-500">{{ error }}</div>
    <div v-else class="feed-content space-y-4">
      <article
        v-for="item in feedItems"
        :key="item.link"
        class="feed-item p-3 border border-gray-300 rounded-lg transition-colors duration-200"
      >
        <img
          v-if="item.image"
          :src="item.image"
          :alt="item.title"
          class="w-full h-48 object-cover rounded-lg mb-3"
          @error="$event.target.style.display = 'none'"
        />
        <h3 class="text-lg font-semibold mb-2">{{ stripHtml(item.title) }}</h3>
        <p class="text-gray-600 mb-3 line-clamp-3">
          {{ stripHtml(item.description) }}
        </p>
        <div class="flex justify-between items-center">
          <a
            :href="item.link"
            target="_blank"
            class="text-blue-500 hover:text-blue-700 hover:underline"
          >
            Lire plus
          </a>
          <small class="text-gray-500">{{
            new Date(item.pubDate).toLocaleString("fr-FR", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })
          }}</small>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped></style>
