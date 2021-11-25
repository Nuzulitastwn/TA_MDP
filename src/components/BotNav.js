import React from 'react'
import { NavLink } from 'react-router-dom'

export default function BotNav() {
  return (
    <div className="bottom-nav">
      <NavLink to="/" className="link nav-link">
        Nama Gunung
      </NavLink>
      <NavLink to="/tipe" className="link nav-link">
        Tipe Gunung
      </NavLink>
      <NavLink to="/about" className="link nav-link">
        About
      </NavLink>
    </div>
  )
}
