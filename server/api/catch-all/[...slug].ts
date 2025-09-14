export default defineEventHandler((event) => {
  const params = getRouterParams(event)
  return {
    ok: true,
    data: {
      url: event.path,
      params,
    },
    message: '/api/catch-all 下不匹配的路由都會進入這裡',
  }
})
