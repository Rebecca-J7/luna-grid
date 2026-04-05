# Luna Grid

**Luna Grid** is a **live map for tracking feminine hygiene supplies** (pads & tampons) in women's restrooms. It allows users to quickly see which restrooms have available products and their current quantities, helping them find nearby supplies in case of need.

This project is built with **Next.js 13**, **React Leaflet**, and **TypeScript**, and currently uses **mock data** for development. In the future, it will integrate an **ESP32 with a camera** for real-time supply tracking.

---

## How It Works

1. **ESP32 Camera in Cabinets**  
   - Each restroom cabinet contains an ESP32 with a camera pointed at stacks of pads and tampons.  
   - The ESP32 identifies each product and counts the number of pads and tampons.

2. **Real-Time Updates on the Map**  
   - The ESP32 sends the counts to the server (future backend integration).  
   - Users can view a live map showing product availability in nearby restrooms.  
   - This allows users to choose the best restroom based on current supply levels.

3. **Privacy Mechanism**  
   - When a cabinet door is opened, a **photoresistor** detects the light change.  
   - A **servo motor** then closes a flap over the camera to ensure privacy.  
   - Once the cabinet is closed, the flap lifts, the camera recounts the products, and the map updates with the new counts.

---

## Features

- Interactive **Leaflet map** displaying restroom cabinets.  
- **Status indicators**: Full, Low, Empty.  
- Popups show the number of pads and tampons and last updated time.  
- Fully **client-rendered** Leaflet map to avoid SSR issues.  
- Ready for **Vercel deployment**.  
- Designed for **future ESP32 and IoT integration**.

---

## Project Structure
restroom-supply-map/
├── app/
│ └── page.tsx # Home page
├── components/
│ ├── Map.tsx # Client-only dynamic map wrapper
│ ├── MapClient.tsx # Leaflet map component
│ └── CabinetMarker.tsx # Marker popup component
├── data/
│ └── cabinets.ts # Mock cabinet data
├── styles/
│ └── map.css # External CSS
├── package.json
└── tsconfig.json

---

## Getting Started (Local Development)

1. **Clone the repository**:

```bash
git clone https://github.com/<your-username>/luna-grid.git
cd luna-grid/restroom-supply-map

```
2. **Install Dependencies**:

```bash
npm install
```

3. **Run Development Server**:

```bash
npm run dev
```
4. **Open http://localhost:3000 to view the live map.**:

```bash
npm run build
npm start
```



