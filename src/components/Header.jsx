import React, { useState } from 'react'

export default function Header(){
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header" role="banner">
      <div className="container nav">
        <div className="brand">
          <div className="brand-logo" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img" aria-label="Brand icon">
              <path d="M12 2c.6 0 1 .4 1 1v2h2.5a1 1 0 010 2H13v11a3 3 0 01-3 3H7a1 1 0 010-2h3a1 1 0 001-1V7H8.5a1 1 0 010-2H11V3c0-.6.4-1 1-1zM5 8l3 6H2l3-6zm12 0l3 6h-6l3-6zM5 6a1 1 0 100 2h6a1 1 0 100-2H5zm8 0a1 1 0 100 2h6a1 1 0 100-2h-6z"></path>
            </svg>
          </div>
          <h1>The Law Office of Jose Blanco</h1>
        </div>

        <nav aria-label="Primary">
          <button
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(v => !v)}
            id="menuToggle"
          >
            Menu
          </button>
          <div className="menu">
            <a href="#home">Home</a>
            <a href="#practice">Practice Areas</a>
            <a href="#about">About</a>
            <a href="#blog">Resources</a>
            <a href="#contact">Contact</a>
            <a href="#contact" className="btn">Schedule a Consultation</a>
          </div>
        </nav>
      </div>
    </header>
  )
}
