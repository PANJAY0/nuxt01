<script setup>
const counter = useState(
  'counter',
  () => 0,
)
</script>
<template>
    <div>
        <h1>increment頁面</h1>
        <p>{{ counter }}</p>
        <button @click="counter++">+</button>
        <button @click="counter--">-</button>
        <NuxtLink to="/counter/suprise">前往suprise</NuxtLink>
    </div>
</template>
