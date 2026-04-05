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
    building: "Computer Science and Engineering Building",
    lat:32.881879,
    lng: -117.233433,
    pads: 1,
    tampons: 3,
    lastUpdated: "1 minute ago"
  },
  {
    id: 2,
    building: "Atkinson Hall",
    lat:32.88243150576296,
    lng: -117.23489861486742,
    pads: 6,
    tampons: 4,
    lastUpdated: "3 minutes ago"
  },
  {
    id: 3,
    building: "Department of Mechanical and Aerospace Engineering",
    lat: 32.88116772422583,
    lng:-117.2330260830131,
    pads: 0,
    tampons: 0,
    lastUpdated: "5 minutes ago"
  },
  {
    id: 4,
    building: "Jacobs Hall",
    lat: 32.88172364732286,
    lng: -117.2352397316279,
    pads: 2,
    tampons: 3,
    lastUpdated: "5 minutes ago"
  },
  {
    id: 5,
    building: "Warren College",
    lat: 32.88260962509286,
    lng: -117.23335507941414,
    pads: 6,
    tampons: 5,
    lastUpdated: "5 minutes ago"
  }
]