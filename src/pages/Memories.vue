<template>
    <base-layout page-title = "Memories">
        <ion-list>
            <ion-item>a</ion-item>
            <ion-item>b</ion-item>
            <ion-item>c</ion-item>
        </ion-list>
    </base-layout>
</template>

<script setup>
  import { IonList, IonItem } from '@ionic/vue';
  import { ref } from 'vue';

  const content = ref(null);
  const scrollToBottom = () => {
    content.value.$el.scrollToBottom(300);
  };
</script>
