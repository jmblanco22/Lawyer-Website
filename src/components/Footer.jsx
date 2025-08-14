import React from 'react'

export default function Footer(){
  return (
    <footer role="contentinfo">
      <div className="container footer-grid">
        <p>© {new Date().getFullYear()} The Law Office of [Lawyer's Name]. All rights reserved.</p>
        <div>
          <a href="#home">Home</a> • <a href="#practice">Practice Areas</a> • <a href="#about">About</a> • <a href="#blog">Resources</a> • <a href="#contact">Contact</a>
        </div>
      </div>

      {/* Back to top lives at the absolute bottom */}
      <div className="container" style={{marginTop: 12, display:'grid', placeItems:'center'}}>
        <a href="#home" className="btn btn-outline" aria-label="Back to top">Back to top</a>
      </div>
    </footer>
  )
}
