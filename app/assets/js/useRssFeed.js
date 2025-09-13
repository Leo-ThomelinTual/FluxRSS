import { ref } from "vue";

export const useRssFeed = () => {
  const feedItems = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const fetchFeed = async (url) => {
    loading.value = true;
    try {
      const response = await fetch(
        ``
      );
      const data = await response.json();

      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data.contents, "text/xml");

      const items = xmlDoc.querySelectorAll("item");

      feedItems.value = Array.from(items).map((item) => ({
        title: item.querySelector("title")?.textContent || "",
        description: item.querySelector("description")?.textContent || "",
        link: item.querySelector("link")?.textContent || "",
        pubDate: item.querySelector("pubDate")?.textContent || "",
        image: item.querySelector("media\\:content, enclosure")?.getAttribute("url") || 
               item.querySelector("image")?.textContent || 
               item.querySelector("description")?.textContent?.match(/<img[^>]+src="([^">]+)"/)?.[1] || "",
      }));
    } catch (e) {
      error.value = "Erreur lors du chargement du flux RSS";
      console.error(e);
    } finally {
      loading.value = false;
    }
  };

  return {
    feedItems,
    loading,
    error,
    fetchFeed,
  };
};
