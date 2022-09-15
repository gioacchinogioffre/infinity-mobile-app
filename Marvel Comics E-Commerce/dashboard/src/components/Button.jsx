import React from 'react'

const Button = ({ bgColor, color, size, text, borderRadius, icon, handleClose }) => {
  return (
    <button onClick={handleClose} className={`text-${size} p-3 hover:drop-shadow-xl`} type='button' style={{backgroundColor: bgColor, color, borderRadius}}>
      {icon}{text}
    </button>
  )
}

export default Button