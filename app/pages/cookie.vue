<script setup>
const name = useCookie('name')
const counter = useCookie('counter', { maxAge: 60 })

const setNameCookie = () => {
  name.value = 'aaa'
}

const setCounterCookie = () => {
  counter.value = Math.floor(Math.random() * 1000)
}

const sendRequest = () => {
  $fetch('/api/cookie')
}
</script>
<template>
    <div>
        <h1>Cookie頁面</h1>
        <button @click="setNameCookie">(Btn)設置name</button>
        <p>名字: {{ name }}</p>
        <button @click="setCounterCookie">(Btn)設置counter</button>
        <p>counter: {{ counter }}</p>
        <button @click="sendRequest">打/api/cookie API</button>
    </div>
</template>
