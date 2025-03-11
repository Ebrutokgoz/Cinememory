<template>
    <base-layout page-title = "Memories">
        <ion-list>
            <ion-item v-for = "memory in memories" 
            :router-link = "`/memories/${memory.id}`"
            :key = "memory.id">
            <ion-thumbnail slot="start">
               <ion-img :src = "memory.image" :alt="memory.title"></ion-img>
            </ion-thumbnail>
           <ion-label>
             {{memory.title}}
           </ion-label>
          </ion-item>
        </ion-list>
    </base-layout>
</template>

<script setup>
  import { IonList, IonItem, IonImg, IonThumbnail, IonLabel } from '@ionic/vue';
  import { computed , ref, nextTick } from 'vue';
  import { useMemoryStore } from "@/store";

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
