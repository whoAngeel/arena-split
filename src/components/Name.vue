<template>
    <div class="mt-4 ">
        <input type="text" v-model="name">
       
        <button class="bg-emerald-400" @:click="imprimir" >Imprimir</button>

        
    </div>
</template>

<script setup>
const name = ref('')
</script>