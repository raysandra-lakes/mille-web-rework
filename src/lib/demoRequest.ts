import type { TrackingData } from "./tracking"

// Endpoint V1 ini dapat diganti dengan CRM atau webhook lain saat integrasi produksi diperbarui.
export const DEMO_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbypjyc1tTtmRTzq9Q-ujra6kkNYWqJjyJwMv1mEHNmkqBM5ioVd74aWCqyTmLqGxOxqSA/exec"

export type DemoRequestValues = {
  nama: string
  email: string
  no_telp: string
  nama_usaha: string
  jenis_usaha: string
  provinsi: string
  kota: string
  pesan: string
}

export async function submitDemoRequest(
  values: DemoRequestValues,
  tracking: TrackingData,
) {
  const body = new FormData()
  const fields: (keyof DemoRequestValues)[] = [
    "nama",
    "email",
    "no_telp",
    "nama_usaha",
    "jenis_usaha",
    "provinsi",
    "kota",
    "pesan",
  ]
  fields.forEach((field) => body.append(field, values[field]))
  Object.entries(tracking).forEach(([key, value]) => {
    if (value) body.append(key, value)
  })

  await fetch(DEMO_ENDPOINT, {
    method: "POST",
    body,
    mode: "no-cors",
  })
}
