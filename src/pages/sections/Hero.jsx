import React from 'react'
import { motion } from 'framer-motion'
import { firm } from '../../data/firm.js'

export default function Hero(){
  return (
    <motion.section
      id="home"
      className="hero section"
      aria-label="Hero"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container hero-grid">
        <div>
          <span className="section-label">Home</span>
          <div className="kicker">Trusted counsel in {firm.areaOfLaw}</div>
          <h2>{firm.tagline}</h2>
          <p>
            We help clients navigate complex legal issues with clarity and care.
            Our approach is personal and strategic. You will always know your options
            and the next step.
          </p>
          {/* No hero buttons to avoid duplicate CTAs with header */}
          <p className="helper">
            Serving clients in {firm.city}, {firm.state} and surrounding areas.
          </p>
        </div>

        <div className="headshot">
          <img
            src={`data:image/svg+xml;utf8,${encodeURIComponent(
              "<?xml version='1.0' encoding='UTF-8' standalone='no'?><svg xmlns='http://www.w3.org/2000/svg' width='820' height='700'><rect width='100%' height='100%' fill='%23eef1f6'/><g fill='%2391a4c2'><circle cx='410' cy='230' r='120'/><rect x='205' y='380' width='410' height='240' rx='28'/></g><text x='50%' y='95%' dominant-baseline='middle' text-anchor='middle' font-family='Montserrat' font-size='20' fill='%23778899'>Replace with portrait</text></svg>"
            )}`}
            alt={`Portrait of ${firm.name}`}
            loading="lazy"
          />
        </div>
      </div>
    </motion.section>
  )
}
