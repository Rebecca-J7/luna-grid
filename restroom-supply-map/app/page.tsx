"use client"

import MapComponent from "../components/Map"

export default function Home() {
  return <MapComponent />
}

// "use client"

// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
// import "leaflet/dist/leaflet.css"
// import L from "leaflet"

// const DefaultIcon = new L.Icon({
//   iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
//   iconRetinaUrl:
//     "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
//   shadowUrl:
//     "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
//   iconSize: [25, 41],
//   iconAnchor: [12, 41]
// })

// L.Marker.prototype.options.icon = DefaultIcon
// /*
// MOCK CABINET DATA
// Later this will come from a database/API
// */

// const cabinets = [
//   {
//     id: 1,
//     building: "Student Center",
//     lat: 32.7157,
//     lng: -117.1611,
//     pads: 18,
//     tampons: 12,
//     lastUpdated: "1 minute ago"
//   },
//   {
//     id: 2,
//     building: "Library",
//     lat: 32.7165,
//     lng: -117.1603,
//     pads: 6,
//     tampons: 4,
//     lastUpdated: "3 minutes ago"
//   },
//   {
//     id: 3,
//     building: "Science Hall",
//     lat: 32.7173,
//     lng: -117.1622,
//     pads: 2,
//     tampons: 1,
//     lastUpdated: "5 minutes ago"
//   }
// ]

// /*
// STATUS LOGIC
// */

// type CabinetStatus = {
//   label: string
//   color: string
// }

// function getStatus(pads: number, tampons: number): CabinetStatus {
//   const total = pads + tampons

//   if (total > 15) {
//     return { label: "Full", color: "green" }
//   }

//   if (total > 5) {
//     return { label: "Low", color: "orange" }
//   }

//   return { label: "Empty", color: "red" }
// }

// /*
// CREATE COLORED MARKER ICON
// */

// function createMarker(color: string) {
//   return new L.Icon({
//     iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-${color}.png`,
//     shadowUrl:
//       "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
//     iconSize: [25, 41],
//     iconAnchor: [12, 41],
//     popupAnchor: [1, -34],
//     shadowSize: [41, 41]
//   })
// }

// export default function Home() {
//   return (
//     <div style={{ height: "100vh", width: "100%" }}>
//       <MapContainer
//         center={[32.7157, -117.1611]}
//         zoom={15}
//         style={{ height: "100%", width: "100%" }}
//       >
//         <TileLayer
//           attribution="© OpenStreetMap"
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />

//         {cabinets.map((cabinet) => {
//           const status = getStatus(cabinet.pads, cabinet.tampons)
//           const icon = createMarker(status.color)

//           return (
//             <Marker
//               key={cabinet.id}
//               position={[cabinet.lat, cabinet.lng]}
//               icon={icon}
//             >
//               <Popup>
//                 <div style={{ fontFamily: "Arial", minWidth: "200px" }}>
//                   <h3>{cabinet.building}</h3>

//                   <p>
//                     <strong>Pads:</strong> {cabinet.pads}
//                   </p>

//                   <p>
//                     <strong>Tampons:</strong> {cabinet.tampons}
//                   </p>

//                   <p>
//                     <strong>Status:</strong>{" "}
//                     <span style={{ color: status.color }}>
//                       {status.label}
//                     </span>
//                   </p>

//                   <p style={{ fontSize: "12px" }}>
//                     Last Updated: {cabinet.lastUpdated}
//                   </p>
//                 </div>
//               </Popup>
//             </Marker>
//           )
//         })}
//       </MapContainer>
//     </div>
//   )
// }