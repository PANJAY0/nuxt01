export default defineEventHandler((event) => {
  const contentType = event.node.req.headers['content-type']
  return {
    ok: true,
    message: '解析 Request Header',
    data: {
      header: {
        contentType,
      },
    },
  }
})
