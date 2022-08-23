import React from 'react'

const Svg = () => {
  return (
    <><svg height={80} width={150}>
      <defs>
        <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style={{ stopColor: 'var(--selected-theme-background-color)', stopOpacity: 0 }} />
          <stop offset="100%" style={{ stopColor: 'var(--selected-theme-main-color)', stopOpacity: 1 }} />
        </radialGradient>
      </defs>
      <ellipse cx={45} cy={40} rx={45} ry={20} fill="url(#grad1)" /><text fill="var(--selected-theme-sub-text-color)" fontFamily="Verdana" x={11} y={47}>Shahid</text>
      Sorry, your browser does not support inline SVG.
    </svg>

    </ >
  )
}

export default Svg