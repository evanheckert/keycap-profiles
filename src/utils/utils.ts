export function tls(value: number, digits: number) {
  return value.toLocaleString(undefined, {
    minimumFractionDigits: digits || 0,
    maximumFractionDigits: digits || 0,
  })
}
