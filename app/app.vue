<script setup>
import { NuxtLayout } from '#components'

</script>

<template>
  <div>
    <NuxtLayout name="default">
      <template #header>
        <div class=" space-x-8">
          <h1>網頁header</h1>
          <NuxtLink to="/">首頁</NuxtLink>
          <NuxtLink to="/about">前往about</NuxtLink>
          <NuxtLink to="/contact">前往contact</NuxtLink>
        </div>
      </template>
      <template #default>
        <div class=" mt-8 flex flex-col items-center bg-white py-24">
          <NuxtPage/>
        </div>
      </template>
      <template #footer>
        網頁footer
      </template>
    </NuxtLayout>
  </div>
</template>
