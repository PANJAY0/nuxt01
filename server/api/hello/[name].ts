export default defineEventHandler((event) => {
  const name = getRouterParam(event, 'name')
  const params = getRouterParams(event)
  return {
    ok: true,
    message: 'Hello!!' + name,
    params,
  }
})
