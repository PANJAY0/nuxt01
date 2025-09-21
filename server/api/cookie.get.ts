export default defineEventHandler((event) => {
  const cookie = parseCookies(event)
  return {
    ok: true,
    message: '解析Cookie',
    data: {
      cookie,
    },
  }
})
