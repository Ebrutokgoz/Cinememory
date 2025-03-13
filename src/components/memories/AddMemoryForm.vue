<template>
    <form class="ion-padding" @submit.prevent="submitMemory">
        <ion-list>
            <ion-item>
                <ion-label position="floating">Title</ion-label>
                <ion-input type="text" v-model="enteredTitle" required></ion-input>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Image URL</ion-label>
                <ion-input type="url" v-model="enteredImage" required></ion-input>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Description</ion-label>
                <ion-textarea rows="5" v-model="enteredDescription" ></ion-textarea>
            </ion-item>
        </ion-list>
        <ion-button type="submit" expand="full">Save</ion-button>
    </form>
</template>

<script setup>
import { IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton } from '@ionic/vue';
import { ref } from 'vue';
const emits = defineEmits(["save-memory"]);

const enteredTitle  = ref("");
const enteredImage = ref("");
const enteredDescription = ref("");

const submitMemory = () => {
    const enteredMemoryData = {
    title: enteredTitle.value,
    imageUrl: enteredImage.value,
    description: enteredDescription.value,
  };
  emits("save-memory", enteredMemoryData);
};
</script>
