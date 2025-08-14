import React from 'react'
import { motion } from 'framer-motion'
import { expertise } from '../../data/expertise.js'

export default function Expertise(){
  return (
    <motion.section
      id="expertise"
      className="section"
      aria-label="Areas of Expertise"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <span className="section-label">Expertise</span>
        <h2>Areas of expertise</h2>
        <ul className="grid grid-3" style={{ marginTop: 12 }}>
          {expertise.map(item => (
            <li key={item} className="card" style={{ fontWeight: 600 }}>{item}</li>
          ))}
        </ul>
      </div>
    </motion.section>
  )
}
