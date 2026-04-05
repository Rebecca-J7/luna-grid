# Luna Grid

**Luna Grid** is am **interactive system** that consists of a **cabinet containing feminine products that is linked to a live map for tracking feminine hygiene supplies** (pads & tampons) in women's restrooms. It allows users to quickly see which restrooms have available products and their current quantities, helping them find nearby supplies in case of need.

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

## 🧱 Tech Stack
### Luna Grid Website
| Technology | Purpose |
|-----------|--------|
| **JavaScript (ES2020+)** | Component logic and data handling |
| **Leaflet** | Interactive map rendering |
| **Leaflet MarkerCluster** | Marker clustering for improved performance and usability |
| **OpenStreetMap** | Open-source map tile provider |
| **HTML5** | Semantic markup and accessible structure |
| **CSS3** | Layout and styling |
| **TBD** | Backend data source for reports |

### Luna Grid Cabinet
| Component | Purpose |
|---------|--------|
| **Photoresistor** | Detects lighting to signal the opening and closing of cabinet door |
| **LED's** | Provides optimal lighting for the inside of the cabinet |
| **Servo** | Triggered to cover the ESP32 camera for privacy when it detects the cabinet door is open and uncovers when the cabinet door is closed |
| **Cabinet** | Physical structure integrating all components |
---

---

## Data Stored Per Report

Each submission creates a new row in Google Sheets containing:
- Timestamp  
- Latitude + Longitude
- Building (for demo purposes we are considering a campus environment)  
- Number of pads
- Number of tampons
- Staus (Full, Low, Empty)

---


