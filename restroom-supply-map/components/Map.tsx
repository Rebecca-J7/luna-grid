"use client"
import dynamic from "next/dynamic"

const MapWithNoSSR = dynamic(() => import("./MapClient"), { ssr: false })
export default MapWithNoSSR
// // Dynamically import MapContainer component with no SSR
// const MapWithNoSSR = dynamic(
//   () => import("./MapClient"), // separate client-only map component
//   { ssr: false }
// )

// export default function MapComponent() {
//   return <MapWithNoSSR />
// }