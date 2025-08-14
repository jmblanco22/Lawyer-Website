import React from 'react'
import { motion } from 'framer-motion'
import { firm } from '../../data/firm.js'

export default function About(){
  return (
    <motion.section
      id="about"
      className="section team"
      aria-label="About the Firm"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <span className="section-label">About</span>
        <h2>About the firm</h2>
        <p>{firm.name} focuses on practical solutions in family matters. We combine litigation experience with settlement-first planning and clear communication.</p>

        {/* stacked cards, larger images */}
        <div className="grid" style={{marginTop:18}}>
          <div className="card member" style={{ display:'grid', gridTemplateColumns:'120px 1fr', gap:18, alignItems:'center' }}>
            <img
              src={`data:image/svg+xml;utf8,${encodeURIComponent(
                "<svg xmlns='http://www.w3.org/2000/svg' width='320' height='320'><rect width='100%' height='100%' rx='20' fill='#e8ecf3'/><g fill='#91a4c2'><circle cx='160' cy='120' r='72'/><rect x='66' y='190' width='188' height='100' rx='22'/></g></svg>"
              )}`}
              alt={`Headshot of ${firm.name}`}
              loading="lazy"
              style={{ width:120, height:120, objectFit:'cover', borderRadius:20 }}
            />
            <div>
              <h3>Sofia Rivera, Esq.</h3>
              <p className="helper">Principal Attorney - J.D., University of Minnesota; B.A., Macalester College</p>
              <p>Sofia leads case strategy, mediation preparation, and trial work. She is known for clear planning and steady client communication.</p>
            </div>
          </div>

          <div className="card member" style={{ display:'grid', gridTemplateColumns:'120px 1fr', gap:18, alignItems:'center' }}>
            <img
              src={`data:image/svg+xml;utf8,${encodeURIComponent(
                "<svg xmlns='http://www.w3.org/2000/svg' width='320' height='320'><rect width='100%' height='100%' rx='20' fill='#e8ecf3'/><g fill='#91a4c2'><circle cx='160' cy='120' r='72'/><rect x='66' y='190' width='188' height='100' rx='22'/></g></svg>"
              )}`}
              alt="Headshot of Marcus Lee"
              loading="lazy"
              style={{ width:120, height:120, objectFit:'cover', borderRadius:20 }}
            />
            <div>
              <h3>Marcus Lee</h3>
              <p className="helper">Paralegal - ABA-approved Paralegal Certificate, St. Paul College</p>
              <p>Marcus coordinates discovery and filings, tracks deadlines, and is your main point of contact for scheduling and document intake.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
