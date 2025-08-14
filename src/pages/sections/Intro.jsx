import React from 'react'
import Card from '../../components/Card.jsx'
import Button from '../../components/Button.jsx'

export default function Intro(){
  return (
    <section className="section" aria-label="Introduction">
      <div className="container intro">
        <div>
          <span className="section-label">Introduction</span>
          <h2>Clarity first. Strategy always.</h2>
          <p>Legal matters can feel overwhelming. We make them manageable. From your first call to final resolution, we use plain language, set clear timelines, and focus on outcomes that align with your goals.</p>
          <ul>
            <li><strong>Responsive</strong> communication and timely updates</li>
            <li><strong>Tailored</strong> strategies for individuals and businesses</li>
            <li><strong>Transparent</strong> fees and predictable scopes of work</li>
          </ul>
        </div>
        <Card>
          <h3>What to expect in your consult</h3>
          <p className="helper">A 20 to 30 minute conversation that focuses on your needs.</p>
          <ol>
            <li>We listen to your situation and questions</li>
            <li>We outline options, risks, and next steps</li>
            <li>We agree on a plan that fits your goals</li>
          </ol>
          <Button href="#contact">Book now</Button>
        </Card>
      </div>
    </section>
  )
}
