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
    building: "Computer Science & Engineering Building",
    lat: 32.881875,
    lng: -117.233485,
    pads: 10,
    tampons: 2,
    lastUpdated: "1 minute ago",
  },
  {
    id: 2,
    building: "Jason Hall",
    lat: 32.881722742918114,
    lng: -117.2352323525576,
    pads: 6,
    tampons: 4,
    lastUpdated: "3 minutes ago",
  },
  {
    id: 3,
    building: "Warren College",
    lat: 32.881540543454555,
    lng: -117.23397504691314,
    pads: 2,
    tampons: 1,
    lastUpdated: "5 minutes ago",
  },
  {
    id: 4,
    building: "Atkinson Hall",
    lat: 32.88242007009082,
    lng:-117.23481408628746,
    pads: 0,
    tampons: 0,
    lastUpdated: "2 minutes ago",
  },
  {
    id: 5,
    building: "Engineering Building Unit 2",
    lat: 32.8810996145701,
    lng: -117.2330027458802,
    pads: 4,
    tampons: 0,
    lastUpdated: "1 minute ago",
  },
]