export default defineNuxtRouteMiddleware((to, from) => {
  if (Math.random() > 0.8) {
    console.log('middleware 攔截')
    return navigateTo('/ithome')
  }
  console.log('middleware 沒有攔截')
})
