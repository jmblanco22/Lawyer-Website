import React from 'react'
export default function Testimonial({ quote, author }){
  return (
    <div className="card testimonial">
      <div className="stars" aria-hidden="true">★★★★★</div>
      <div>
        <p className="quote">"{quote}"</p>
        <p><strong>- {author}</strong></p>
      </div>
    </div>
  )
}
