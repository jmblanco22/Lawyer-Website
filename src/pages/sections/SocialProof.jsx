import React from 'react'
import Testimonial from '../../components/Testimonial.jsx'
import Card from '../../components/Card.jsx'
import { testimonials } from '../../data/testimonials.js'

export default function SocialProof(){
  return (
    <section className="section" aria-label="Testimonials and Accolades">
      <div className="container grid grid-3">
        <span className="section-label">Social Proof</span>
        <div className="grid grid-3" style={{gridColumn: '1 / -1'}}>
          <Testimonial quote={testimonials[0].quote} author={testimonials[0].author} />
          <Testimonial quote={testimonials[1].quote} author={testimonials[1].author} />
          <Card>
            <p className="helper">Recent recognition</p>
            <ul>
              <li>Featured in <em>[Local Business Journal]</em></li>
              <li>Member, <em>[State Bar Association Committee]</em></li>
              <li>Speaker, <em>[Conference or CLE Topic]</em></li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}
