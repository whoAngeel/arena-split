<template>
        <Character v-for="character in characters" :key="character.id" :personaje="character" />
</template>

<script setup>
import axios from "axios";
import { onMounted, ref} from "vue";
import Character from '../components/Character.vue'

const characters = ref([])

onMounted(() => {
    axios.get('/api/character').then(res => {
        characters.value = res.data.results
    }).catch(err => console.log(err))
})


</script>