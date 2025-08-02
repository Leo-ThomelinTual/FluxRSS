import { ref } from 'vue';

// État réactif pour les tags
export const hasNewPost = ref(false);
export const hasUpdate = ref(false);

// Fonction pour vérifier les nouveaux posts
export const checkNewPosts = async (rssUrl) => {
  try {
    const response = await fetch(rssUrl);
    const data = await response.json();

    if (data.items && data.items.length > 0) {
      const lastCheckTime = localStorage.getItem("lastCheckTime") || 0;
      const latestPostTime = new Date(data.items[0].pubDate).getTime();

      if (latestPostTime > lastCheckTime) {
        hasNewPost.value = true;
        localStorage.setItem("lastCheckTime", latestPostTime);
      }
    }
  } catch (error) {
    console.error("Erreur lors de la vérification des nouveaux posts:", error);
  }
};

// Fonction d'initialisation pour la vérification périodique
export const initializePostCheck = (rssUrls) => {
  if (!Array.isArray(rssUrls)) {
    rssUrls = [rssUrls];
  }

  // Vérifier immédiatement au montage pour chaque URL
  rssUrls.forEach(url => {
    checkNewPosts(url);
  });

  // Mettre en place une vérification périodique
  return setInterval(() => {
    rssUrls.forEach(url => {
      checkNewPosts(url);
    });
  }, 300000); // Vérifier toutes les 5 minutes
};
