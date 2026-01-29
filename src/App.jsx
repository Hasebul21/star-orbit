import { useState } from 'react'
import './App.css'

function App() {
  const [starCount, setStarCount] = useState(2)
  const [isDayMode, setIsDayMode] = useState(true)

  // Generate stars based on count
  const stars = Array.from({ length: starCount }, (_, i) => {
    const angle = (360 / starCount) * i
    const delay = (i * 2) / starCount
    return { id: i, angle, delay }
  })

  return (
    <div className={`app-container ${isDayMode ? 'day' : 'night'}`}>
      <div className="controls">
        <div className="control-group">
          <label>Number of Stars:</label>
          <select 
            value={starCount} 
            onChange={(e) => setStarCount(Number(e.target.value))}
            className="star-select"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>
        
        <button 
          onClick={() => setIsDayMode(!isDayMode)}
          className="mode-toggle"
        >
          Switch to {isDayMode ? 'Moon' : 'Sun'} Mode
        </button>
      </div>

      <div className="orbit-container">
        <div className={`center-body ${isDayMode ? 'sun' : 'moon'}`}>
          {isDayMode ? '☀️' : '🌙'}
        </div>
        
        <div className="orbit-path"></div>
        
        {stars.map(star => (
          <div
            key={star.id}
            className="star"
            style={{
              '--angle': `${star.angle}deg`,
              '--delay': `${star.delay}s`
            }}
          />
        ))}
      </div>

      <div className="info">
        <p>Currently orbiting: <strong>{starCount}</strong> star{starCount !== 1 ? 's' : ''}</p>
        <p>Mode: <strong>{isDayMode ? 'Day (Sun)' : 'Night (Moon)'}</strong></p>
      </div>
    </div>
  )
}

export default App
