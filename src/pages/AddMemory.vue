<template>
     <base-layout page-title = "Add New Memory" page-default-back-link = "/memories">
        <add-memory-form @save-memory="saveMemory"></add-memory-form>
    </base-layout>
</template>

<script setup>
    import { useMemoryStore } from "@/store";
    import { useRouter } from "vue-router";
    import AddMemoryForm from '../components/memories/AddMemoryForm.vue';
    import { ref } from 'vue';

    const memoryStore = useMemoryStore();
    const router = useRouter();

    const saveMemory = (memoryData) => {
        memoryStore.addMemory(memoryData); 
        router.replace("/memories"); 
    };
</script>
