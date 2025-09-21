let counter = 0
export default defineEventHandler(async () => {
  return ++counter
})
