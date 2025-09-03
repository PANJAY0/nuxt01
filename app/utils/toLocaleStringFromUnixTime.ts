export default function (unixTime: number) {
  return new Date(unixTime * 1000)
    .toLocaleString(undefined, { hour12: false })
}
