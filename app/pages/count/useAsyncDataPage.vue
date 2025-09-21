<script setup>
const { data } = await useAsyncData(
  'count',
  () => $fetch('/api/count'),
)
</script>
<template>
    <div>
        <h1>瀏覽次數 : {{ data }}</h1>
    </div>
</template>
