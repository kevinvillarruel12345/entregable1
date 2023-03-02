import React from 'react'
import './Button.css'

export const Button = ({handleClick}) => {
  return (
    <button onClick={handleClick}>
        <span>Siguiente</span>
    </button>
  )
}
