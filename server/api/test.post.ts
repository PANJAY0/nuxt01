export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const a = body.name
  return {
    ok: true,
    message: '測試POST請求',
    data: {
      body,
      a,
    },
  }
})
