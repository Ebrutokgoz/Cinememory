<template>
     <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>{{pageTitle}}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <slot />
        </ion-content>
    </ion-page>
</template>

<script>
  import { IonPage, IonHeader, IonContent, IonToolbar, IonTitle} from '@ionic/vue';
  import { ref } from 'vue';

  export default {
    props: ['pageTitle'],
    components: {
        IonPage, IonHeader, IonContent, IonToolbar, IonTitle
    },
  }
</script>