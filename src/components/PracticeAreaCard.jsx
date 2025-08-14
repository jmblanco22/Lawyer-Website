import React from 'react'
import Button from './Button.jsx'

export default function PracticeAreaCard({ title, description }){
  return (
    <article className="card" tabIndex="0" aria-labelledby={`${title}-id`}>
      <div className="icon-wrap" aria-hidden="true">
        <svg className="icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4zm0 2.2L7 6.7v5.3c0 4 2.8 7.4 5 8.5 2.2-1.1 5-4.5 5-8.5V6.7l-5-2.5z"/></svg>
      </div>
      <h3 id={`${title}-id`}>{title}</h3>
      <p>{description}</p>
      <Button href="#contact" variant="outline">Ask about this</Button>
    </article>
  )
}
