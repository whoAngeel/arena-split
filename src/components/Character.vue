<template>
    <div>
        <h1 class="text-3xl font-bold">{{ personaje.name }}</h1>

        <p>{{ personaje.status }}</p>

        <div>
            <span v-if="personaje.gender === 'Female'">
                Femenino
            </span>

            <span v-else-if="personaje.gender === 'Male'">
                Masculino
            </span>

            <span v-else>
                No definido
            </span>
        </div>


    </div>
</template>

<script setup>

const { personaje } = defineProps(['personaje'])



</script>