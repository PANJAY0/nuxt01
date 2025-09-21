<script setup>
import { useCounterStore } from '@/stores/counter'
const counterStore = useCounterStore()
</script>
<template>
    <div>
        <p>{{ counterStore.count }}</p>
        <p>{{ counterStore.doubleCount }}</p>
        <button @click="counterStore.increment">+</button>
        <button @click="counterStore.decrement">-</button>
    </div>
</template>
