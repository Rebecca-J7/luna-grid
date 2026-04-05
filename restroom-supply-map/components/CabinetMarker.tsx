"use client"

import { Marker, Popup } from "react-leaflet"
import L from "leaflet"
import { Cabinet } from "../data/cabinets"
import "../styles/map.css"

type Props = {
  cabinet: Cabinet
}

type CabinetStatus = {
  label: string
  color: string
}

// Determine status based on supply
function getStatus(pads: number, tampons: number): CabinetStatus {
  const total = pads + tampons
  if (total >= 7) return { label: "Full", color: "green" }
  if (total <= 6 && total > 0) return { label: "Low", color: "orange" }
  return { label: "Empty", color: "red" }
}

// Create marker icon with color
function createMarker(color: string) {
  return new L.Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-${color}.png`,
    shadowUrl:
      "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  })
}

export default function CabinetMarker({ cabinet }: Props) {
  const status = getStatus(cabinet.pads, cabinet.tampons)
  const icon = createMarker(status.color)

  return (
    <Marker position={[cabinet.lat, cabinet.lng]} icon={icon}>
      <Popup>
        <div className="popup-content">
          <h3 className="popup-title">{cabinet.building}</h3>
          <p className="popup-text">
            <strong>Pads:</strong> {cabinet.pads}
          </p>
          <p className="popup-text">
            <strong>Tampons:</strong> {cabinet.tampons}
          </p>
          <p className="popup-text">
            <strong>Status:</strong>{" "}
            <span className={`status ${status.color}`}>{status.label}</span>
          </p>
          <p className="popup-small">Last Updated: {cabinet.lastUpdated}</p>
        </div>
      </Popup>
    </Marker>
  )
}