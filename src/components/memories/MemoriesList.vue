<template>
    <ion-list>
           <memories-list-item v-for = "memory in memories" :key = "memory.id"
           :memory = "memory">

           </memories-list-item>
    </ion-list>
</template>

<script setup>
    import { IonList} from '@ionic/vue';
    import MemoriesListItem from "@/components/memories/MemoriesListItem.vue"
    const props = defineProps(['memories']);

</script>