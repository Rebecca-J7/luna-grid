"use client"

import { useState, useEffect } from "react"
import { MapContainer, TileLayer, Marker, Circle, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "../styles/map.css"
import CabinetMarker from "./CabinetMarker"
import { cabinets as mockCabinets, type Cabinet } from "../data/cabinets"
import L from "leaflet"

const DefaultIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41]
})
L.Marker.prototype.options.icon = DefaultIcon

export default function MapClient() {
  function UserLocation() {
    const map = useMap()
    const [pos, setPos] = useState<[number, number] | null>(null)
    const [accuracy, setAccuracy] = useState<number | null>(null)

    useEffect(() => {
      if (!navigator.geolocation) return

      const success = (p: GeolocationPosition) => {
        const lat = p.coords.latitude
        const lng = p.coords.longitude
        const acc = p.coords.accuracy
        setPos([lat, lng])
        setAccuracy(acc)
        try {
          map.setView([lat, lng], map.getZoom())
        } catch (err) {
          console.warn("Failed to set map view:", err)
        }
      }

      const error = (e: GeolocationPositionError) => {
        console.warn("Geolocation error:", e)
      }

      const id = navigator.geolocation.watchPosition(success, error, {
        enableHighAccuracy: true,
        maximumAge: 10000,
        timeout: 10000,
      })

      return () => {
        navigator.geolocation.clearWatch(id)
      }
    }, [map])

    if (!pos) return null

    return (
      <>
        <Marker position={pos} />
        <Circle
          center={pos}
          radius={accuracy ?? 50}
          pathOptions={{ color: "#1E90FF", fillColor: "#1E90FF", fillOpacity: 0.15 }}
        />
      </>
    )
  }
  const [cabinets, setCabinets] = useState<Cabinet[]>(mockCabinets)
  const [isLive, setIsLive] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCabinets = async () => {
      try {
        const res = await fetch("/api/cabinets")
        const data = await res.json()

        if (Array.isArray(data) && data.length > 0) {
          setCabinets(data as Cabinet[])
          setIsLive(true)
        } else {
          setCabinets(mockCabinets)
          setIsLive(false)
        }
      } catch (err: unknown) {
        console.error("Failed to fetch cabinets:", err)
        setCabinets(mockCabinets)
        setIsLive(false)
      } finally {
        setLoading(false)
      }
    }

    fetchCabinets()
    const interval = setInterval(fetchCabinets, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {!isLive && (
        <p className="demo-notice">Showing demo data — no live cabinets connected yet</p>
      )}
      <MapContainer center={[32.7157, -117.1611]} zoom={15} className="map-container">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        <UserLocation />
        {!loading && cabinets.map((cabinet) => (
          <CabinetMarker key={cabinet.id} cabinet={cabinet} />
        ))}
      </MapContainer>
    </>
  )
}