<script setup>
const notify = () => {
  useNuxtApp().$toast.info('產生一個通知就是這麼簡單')
}

</script>
<template>
    <div class=" mt-8 flex flex-col items-center bg-white py-24">
        <h1 class=" my-12 text-6xl font-semibold text-gray-800">
            這裡是首頁
        </h1>
        <button @click="notify">產生通知</button>
    </div>
</template>
