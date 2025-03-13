import { defineStore, createPinia } from "pinia";

export const useMemoryStore = defineStore("memoryStore", {
  state: () => ({
    memories: [
      {
        id: "m1",
        image:
          "https://m.media-amazon.com/images/M/MV5BZGZiOGZhZDQtZmRkNy00ZmUzLTliMGEtZGU0NjExOGMxZDVkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        title: "No Time To Die - Best Movie Ever",
        description: "The end of the movie was great.",
      },
      {
        id: "m2",
        image:
          "https://m.media-amazon.com/images/M/MV5BNWIyNmU5MGYtZDZmNi00ZjAwLWJlYjgtZTc0ZGIxMDE4ZGYwXkEyXkFqcGc@._V1_.jpg",
        title: "How You Dune",
        description: "I love Zendaya!",
      },
      {
        id: "m3",
        image:
          "https://m.media-amazon.com/images/M/MV5BYTJlOTIwNjItYjZiMS00Njc3LThkMDgtNWVhNGUxNzBlYWE3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        title: "The Courier, Ironbark with girls",
        description: "I can't say I liked the movie very much :/, but the girls and I had a lot of fun that day.",
      },
    ],
  }),
  getters: {
    getMemories: (state) => state.memories,
    getMemory: (state) => (memoryId) => {
      return state.memories.find((memory) => memory.id === memoryId);
    },
  },
  actions: {
    addMemory(memoryData) {
      const newMemory = {
        id: new Date().toISOString(),
        title: memoryData.title,
        image: memoryData.imageUrl,
        description: memoryData.description,
      };

      this.memories.unshift(newMemory);
    },
  },
});

const store = createPinia();
export default store;
