"use client"

import { MapContainer, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import CabinetMarker from "./CabinetMarker"
import { cabinets } from "../data/cabinets"
import L from "leaflet"

// Fix default marker for Leaflet
const DefaultIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41]
})
L.Marker.prototype.options.icon = DefaultIcon

export default function MapClient() {
  return (
    <MapContainer center={[32.7157, -117.1611]} zoom={15} className="map-container">
      <TileLayer
        attribution="© OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {cabinets.map((cabinet) => (
        <CabinetMarker key={cabinet.id} cabinet={cabinet} />
      ))}
    </MapContainer>
  )
}