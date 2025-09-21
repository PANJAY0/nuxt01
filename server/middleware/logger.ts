export default defineEventHandler((event) => {
  const header = event.node.req.headers
  console.log('新的請求:', header)
})
