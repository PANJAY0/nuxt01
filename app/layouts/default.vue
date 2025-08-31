<script setup>
</script>
<template>
    <div class=" bg-slate-100 px-4 py-8">
        <p class="text-2xl text-slate-500">預設layouts頭</p>
        <div class=" space-x-4">
            <NuxtLink to="/">前往首頁</NuxtLink>
            <NuxtLink to="/about">前往About頁</NuxtLink>
            <NuxtLink to="/contact">前往contact頁</NuxtLink>
            <NuxtLink to="/ithome">前往ithome頁</NuxtLink>
        </div>
        <slot name="header"/>
        <slot/>
        <slot name="footer"/>
    </div>
</template>
