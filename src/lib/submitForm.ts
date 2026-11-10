export async function submitForm(payload: Record<string, unknown>) {
  // Sambungkan endpoint form produksi di sini saat layanan backend telah tersedia.
  console.log("Form submission:", payload)
  await new Promise((resolve) => window.setTimeout(resolve, 800))
}
