
# Luna Grid — Feminine Product Vision Counter

A complete system for monitoring feminine hygiene product levels in restroom cabinets.
An ESP32-CAM captures images on a timer, Claude Vision counts the pads and tampons, users can navigate to a restroom with enough products,
and a live web dashboard shows restocking status for staff.

```
[ESP32-CAM] ──(WiFi/HTTP)──► [Flask API + Claude Vision] ──► [SQLite] ──► [Live Dashboard]
```

---

## Project Structure

```
esp32_cabinet_counter/
├── esp32_firmware/
│   └── cabinet_counter.ino     ← Flash to your ESP32-CAM
└── server/
    ├── server.py               ← Python backend (Flask + Claude Vision)
    ├── requirements.txt
    └── static/
        └── index.html          ← Live dashboard (served by Flask)
```

---

## 1. Hardware Required

| Part | Notes |
|---|---|
| ESP32-CAM (AI-Thinker) | ~$8–12. Any ESP32 with OV2640 camera works |
| FTDI USB–Serial adapter | For flashing (the ESP32-CAM has no USB) |
| 5V power supply (≥500 mA) | Stable power is important for the camera |
| Wide-angle lens (optional) | For wider cabinet view |

### Wiring (FTDI → ESP32-CAM for flashing)
```
FTDI GND  → ESP32 GND
FTDI VCC  → ESP32 5V
FTDI TX   → ESP32 U0R (GPIO3)
FTDI RX   → ESP32 U0T (GPIO1)
GPIO0     → GND   (hold during upload, then release)
```

---

## 2. Flash the Firmware

1. Install **Arduino IDE** and add ESP32 board support:  
   `https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json`

2. Install required libraries via Library Manager:
   - **ArduinoJson** by Benoit Blanchon (v6+)
   - **Base64** (built into ESP32 Arduino core)

3. Open `esp32_firmware/cabinet_counter.ino`

4. Edit these lines at the top:
   ```cpp
   const char* WIFI_SSID     = "YOUR_WIFI_SSID";
   const char* WIFI_PASSWORD = "YOUR_WIFI_PASSWORD";
   const char* API_ENDPOINT  = "http://YOUR_SERVER_IP:5000/api/update";
   const char* CABINET_ID    = "restroom_floor2_cabinet_A";   // unique per device
   const char* LOCATION_NAME = "2nd Floor Women's Restroom";
   const char* BUILDING      = "Main Building";
   ```

5. Select board: `AI Thinker ESP32-CAM`
   - Hold **GPIO0 to GND**, press Reset, then upload
   - After upload: release GPIO0, press Reset again

6. Open Serial Monitor at 115200 baud to see status

---

## 3. Server Setup

### Requirements
```bash
pip install flask anthropic pillow flask-cors
```

Or use the requirements file:
```bash
pip install -r requirements.txt
```

### Configure
Edit `server.py` line 22 (or set environment variable):
```python
ANTHROPIC_API_KEY = "sk-ant-..."
```

Or:
```bash
export ANTHROPIC_API_KEY="sk-ant-..."
```

### Run
```bash
cd server/
python server.py
```

The server starts on `http://0.0.0.0:5000`.  
Dashboard is at: `http://YOUR_SERVER_IP:5000`

---

## 4. Cabinet Placement Tips

For best AI counting accuracy:

- Mount the ESP32-CAM **inside the cabinet door** pointing at the shelf
- Aim for even lighting — add a small LED strip inside the cabinet if needed
- Products should be in a **single visible layer** when possible (stacked is fine, Claude handles it)
- Test angle: take a photo and see if you can manually count the items — if you can, Claude can

---

## 5. API Reference

| Endpoint | Method | Description |
|---|---|---|
| `/api/update` | POST | Receives image from ESP32, runs vision, saves count |
| `/api/counts` | GET | Returns latest count for all cabinets |
| `/api/history/<cabinet_id>` | GET | Returns recent readings for one cabinet |
| `/api/cabinets/set_location` | POST | Set lat/lon for a cabinet |
| `/api/simulate` | POST | Inject test data without a camera |

### Test with curl (simulate a reading)
```bash
curl -X POST http://localhost:5000/api/simulate \
  -H "Content-Type: application/json" \
  -d '{"cabinet_id":"test_cab","location_name":"1st Floor Restroom","building":"East Wing","pads":8,"tampons":5}'
```

---

## 6. Multiple Cabinets

Deploy one ESP32-CAM per cabinet. Each device gets a unique `CABINET_ID` in the firmware.
They all report to the same server. The dashboard automatically shows all cabinets.

---

## 7. Production Deployment

For production use, consider:

- **HTTPS**: Use nginx + Let's Encrypt as a reverse proxy in front of Flask
- **Process manager**: Run `server.py` with `gunicorn` or `systemd`
- **Backup**: SQLite DB is just a file — back up `cabinet_counts.db` regularly
- **Alerting**: Add email/Slack webhooks in `server.py` when `pads <= LOW_THRESHOLD`

### Gunicorn example
```bash
pip install gunicorn
gunicorn -w 2 -b 0.0.0.0:5000 server:app
```

---

## 8. Thresholds

Adjust these in `server/static/index.html`:
```js
const LOW_THRESHOLD   = 5;   // amber warning when ≤ this many items
const EMPTY_THRESHOLD = 1;   // red alert when ≤ this many items
```

Adjust the capture interval in the firmware:
```cpp
const unsigned long CAPTURE_INTERVAL_MS = 30000;  // 30 seconds
```

---

## Requirements File (server/)

```
flask>=3.0
flask-cors>=4.0
anthropic>=0.25
Pillow>=10.0
```
