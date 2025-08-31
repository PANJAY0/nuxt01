<template>
    <div class=" bg-sky-100 px-4 py-8">
        使用<span class=" font-bold text-sky-500">Custom</span>佈局
        <slot/>
        <slot name="footer">
            <footer class=" mt-6 flex justify-center">
                <NuxtLink to="/" class=" font-medium">回首頁</NuxtLink>
            </footer>
        </slot>
    </div>
</template>
