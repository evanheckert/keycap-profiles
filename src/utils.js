export function tls(value, digits) {
  return value.toLocaleString(undefined, {
    minimumFractionDigits: digits || 0,
    maximumFractionDigits: digits || 0,
  })
}
