// app/page.tsx
"use client"

import MapComponent from "../components/Map"

// Force Next.js to render this page on the client at runtime
export const dynamic = "force-dynamic"

export default function Home() {
  return <MapComponent />
}