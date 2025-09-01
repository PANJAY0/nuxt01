<script setup>
const { $hello } = useNuxtApp()
const message = $hello('aaa')
</script>
<template>
    <div class=" mt-8 flex flex-col items-center bg-white py-24">
        <h1 class=" my-12 text-6xl font-semibold text-gray-800">
            這裡是首頁
        </h1>
        {{ message }}
        {{ $hello('bbb') }}
    </div>
</template>
