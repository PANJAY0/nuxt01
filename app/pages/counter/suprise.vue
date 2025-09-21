<script setup>
const counter = useState(
  'counter',
  () => Math.floor(Math.random() * 100),
)
</script>
<template>
    <div>
        <h1>suprise頁面</h1>
        <p>{{ counter }}</p>
        <button @click="counter++">+</button>
        <button @click="counter--">-</button>
        <NuxtLink to="/counter/increment">前往increment</NuxtLink>
    </div>
</template>
