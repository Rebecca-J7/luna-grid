// data/cabinets.ts
export type Cabinet = {
  id: number
  building: string
  lat: number
  lng: number
  pads: number
  tampons: number
  lastUpdated: string
}

export const cabinets: Cabinet[] = [
  {
    id: 1,
    building: "Student Center",
    lat: 32.7157,
    lng: -117.1611,
    pads: 18,
    tampons: 12,
    lastUpdated: "1 minute ago"
  },
  {
    id: 2,
    building: "Library",
    lat: 32.7165,
    lng: -117.1603,
    pads: 6,
    tampons: 4,
    lastUpdated: "3 minutes ago"
  },
  {
    id: 3,
    building: "Science Hall",
    lat: 32.7173,
    lng: -117.1622,
    pads: 2,
    tampons: 1,
    lastUpdated: "5 minutes ago"
  }
]