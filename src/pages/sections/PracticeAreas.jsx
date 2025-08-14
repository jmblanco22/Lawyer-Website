import React from 'react'
import PracticeAreaCard from '../../components/PracticeAreaCard.jsx'
import { practiceAreas } from '../../data/practiceAreas.js'

export default function PracticeAreas(){
  return (
    <section id="practice" className="section" aria-label="Practice Areas">
      <div className="container">
        <span className="section-label">Practice Areas</span>
        <h2 className="section-title">How we can help</h2>
        <p className="helper">Click a card to learn more and send a focused inquiry.</p>
        <div className="grid grid-3">
          {practiceAreas.map((p) => (
            <PracticeAreaCard key={p.title} title={p.title} description={p.description} />
          ))}
        </div>
      </div>
    </section>
  )
}
