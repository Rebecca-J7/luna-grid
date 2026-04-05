import MapComponent from "../components/Map"

export const dynamic = "force-dynamic"

export default function Home() {
  return (
    <main className="page-container">
      <header className="site-header">
        <div className="logo-mark">
          <svg width="36" height="36" viewBox="0 0 32 32" fill="none">
            <path d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12c1.5 0 2.94-.277 4.27-.78C17.1 25.94 14 21.32 14 16c0-5.32 3.1-9.94 7.27-11.22A11.93 11.93 0 0 0 16 4z" fill="url(#moonGrad)"/>
            <defs>
              <linearGradient id="moonGrad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#C47AB8"/>
                <stop offset="100%" stopColor="#7B5EA7"/>
              </linearGradient>
            </defs>
          </svg>
          <h1 className="main-title">Luna Grid</h1>
        </div>
        <p className="subtitle">Navigate nearby restrooms stocked with period hygiene products</p>
      </header>

      <div className="stats-row">
        <div className="stat-pill"><span className="stat-dot dot-green"></span>Fully stocked</div>
        <div className="stat-pill"><span className="stat-dot dot-amber"></span>Low supply</div>
        <div className="stat-pill"><span className="stat-dot dot-red"></span>Empty</div>
      </div>

      <div className="map-card">
        <div className="map-card-header">
          <span className="map-label">Nearby locations</span>
          <span className="live-badge"><span className="live-dot"></span>Live</span>
        </div>
        <MapComponent />
        <div className="map-legend">
          <div className="legend-item"><span className="legend-dot dot-stocked"></span>Fully stocked</div>
          <div className="legend-item"><span className="legend-dot dot-low"></span>Low supply</div>
          <div className="legend-item"><span className="legend-dot dot-empty"></span>Empty</div>
        </div>
      </div>

      <p className="footer-note">Data refreshes every 3 minutes · Luna Grid</p>
    </main>
  )
}