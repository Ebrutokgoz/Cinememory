<template>
     <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                     <ion-back-button :default-href="pageDefaultBackLink"></ion-back-button>
                </ion-buttons>
               
                <ion-title>{{pageTitle}}</ion-title>

                <ion-buttons slot="end">
                     <slot name="actions-end"></slot>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <slot />
        </ion-content>
    </ion-page>
</template>

<script setup>
  import { IonPage, IonHeader, IonContent, IonToolbar, IonTitle,
    IonBackButton, IonButtons
  } from '@ionic/vue';
  import { ref } from 'vue';

    const props = defineProps(['pageTitle', 'pageDefaultBackLink']);
  
</script>