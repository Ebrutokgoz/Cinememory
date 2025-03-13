<template>
    <ion-img :src = "image" :alt = "title"></ion-img>
    <h2 class = "ion-text-center">{{title}}</h2>
    <p class = "ion-text-center">{{description}}</p>
</template>

<script setup>
    import { IonImg } from '@ionic/vue';
    
    const props = defineProps(['title', 'image', 'description']);

</script>