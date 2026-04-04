"use client"

import dynamic from "next/dynamic"
import "../styles/map.css"

// Dynamically import MapContainer component with no SSR
const MapWithNoSSR = dynamic(
  () => import("./MapClient"), // separate client-only map component
  { ssr: false }
)

export default function MapComponent() {
  return <MapWithNoSSR />
}