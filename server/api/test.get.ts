export default defineEventHandler((event) => {
  const query = getQuery(event)
  const a = query.name
  return {
    ok: true,
    message: '測試GET請求',
    data: {
      query,
      a,
    },
  }
})
