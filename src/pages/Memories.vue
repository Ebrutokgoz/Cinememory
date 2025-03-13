<template>
    <base-layout page-title = "Memories">
    <template v-slot:actions-end>
      <ion-button href = "/memories/add">
        <ion-icon slote="icon-only" :icon="add"></ion-icon>
      </ion-button>
    </template>
        <memories-list :memories = "memories"></memories-list>
    </base-layout>
</template>

<script setup>
  import { IonButton, IonIcon } from '@ionic/vue';
  import { add } from 'ionicons/icons';
  import { computed , ref, nextTick } from 'vue';
  import { useMemoryStore } from "@/store";
  import MemoriesList from "@/components/memories/MemoriesList.vue"

  const content = ref(null);

  const memoryStore = useMemoryStore(); 

  const memories = computed(() => memoryStore.getMemories);
 
  const scrollToBottom = () => {
  nextTick(() => {
      content.value?.scrollTo({
        top: content.value.scrollHeight,
        behavior: "smooth",
      });
    });
  };

  
</script>
