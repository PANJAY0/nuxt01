<template>
    <div class=" bg-slate-100 px-4 py-8">
        <p class="text-2xl text-slate-500">預設layouts頭</p>
        <slot name="header"/>
        <slot/>
        <slot name="footer"/>
    </div>
</template>
