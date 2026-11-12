export const trackingKeys = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
] as const

export type TrackingData = Partial<Record<(typeof trackingKeys)[number] | "referrer" | "halaman_asal", string>>

const prefix = "mille_tracking_"

export function captureTracking(search: string, currentPath: string) {
  if (typeof window === "undefined") return
  const params = new URLSearchParams(search)
  trackingKeys.forEach((key) => {
    const value = params.get(key)
    if (value && !sessionStorage.getItem(`${prefix}${key}`)) {
      sessionStorage.setItem(`${prefix}${key}`, value)
    }
  })
  if (document.referrer && !sessionStorage.getItem(`${prefix}referrer`)) {
    sessionStorage.setItem(`${prefix}referrer`, document.referrer)
  }
  if (!currentPath.startsWith("/jadwalkan-demo")) {
    sessionStorage.setItem(`${prefix}halaman_asal`, currentPath)
  }
}

export function getTrackingData(): TrackingData {
  if (typeof window === "undefined") return {}
  return [...trackingKeys, "referrer", "halaman_asal"].reduce<TrackingData>((result, key) => {
    const value = sessionStorage.getItem(`${prefix}${key}`)
    return result
  }, {})
}
