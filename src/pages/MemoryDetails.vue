<template>
    <base-layout :page-title = "loadedMemory ? loadedMemory.title : 'Loading'" page-default-back-link = "/memories">
        <h2 v-if="!loadedMemory">Could not find memory.</h2>
        <memory-overview v-else :title = "loadedMemory.title" 
        :image = "loadedMemory.image" :description = "loadedMemory.description">
          Loaded
        </memory-overview>
    </base-layout>
</template>

<script setup>
  import { IonList, IonItem } from '@ionic/vue';
  import MemoryOverview from "@/components/memories/MemoryOverview.vue"
  import { ref, watch, computed } from 'vue';
  import { useRoute } from 'vue-router';
  import { useMemoryStore } from "@/store";

  const route = useRoute();
  const memoryStore = useMemoryStore(); 
  const memoryId = ref(route.params.id);
 

  const loadedMemory = computed(() => memoryStore.getMemory(memoryId.value));

</script>