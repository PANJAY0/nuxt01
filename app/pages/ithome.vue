<script setup>
const enableCustomLayout = () => {
  setPageLayout('custom')
}
</script>
<template>
    <div>
        <h1>這裡是ithome頁</h1>
        <button class=" mt-8 rounded bg-blue-600 px-4 py-2 text-white" @click="enableCustomLayout">更新佈局</button>
    </div>
</template>
