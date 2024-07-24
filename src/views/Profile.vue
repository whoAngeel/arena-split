<template>
    <h1>Profile {{ character.name }}</h1>

    <p :class="isAlive">{{ character.status }}</p>

    <div>
        User {{ $route.params.id }}
    </div>

    <Character :personaje="character"/>

</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, onUnmounted, reactive, ref } from "vue";
import {useRoute} from "vue-router";
import Name from '../components/Name.vue'
import Character from '../components/Character.vue'
import axios from 'axios';

const route = useRoute()

const id = route.params.id
const character = ref({})

const isAlive = computed(()=>{
    return {
        'text-green-500': character.value.status === 'Alive',
        'text-red-500': character.value.status === 'Dead'
    }
})

const name = ref('carlos')

const imprimir = ()=>{
    console.log(name.value)
}

onMounted(()=>{
    axios.get('/api/character/' + id).then(res=>{
        console.log(res.data)
        character.value = res.data
    }).catch(err=>{
        console.log(err);
    })
})





</script>