export default defineNuxtPlugin(() => {
  addRouteMiddleware('global-test', () => {
    console.log('由plugins插件添加全域中介層')
  }, { global: true })

  addRouteMiddleware('name-test', () => {
    console.log('由plugins插件添加具名中介層, 會覆蓋任何現有的同名中介層')
  })
})
