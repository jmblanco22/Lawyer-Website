import React from 'react'
import { motion } from 'framer-motion'
import ContactForm from '../../components/ContactForm.jsx'
import { firm } from '../../data/firm.js'

export default function Contact(){
  return (
    <>
      <motion.section
        id="contact"
        className="section"
        aria-label="Contact"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <span className="section-label">Contact</span>
          <h2>Get in touch</h2>

          <div className="contact-grid">
            <div className="card">
              <ContactForm />
            </div>
            <div>
              <div className="card">
                <h3>Office</h3>
                <p><strong>Address</strong><br/>{firm.address}, {firm.city}, {firm.state} {firm.zip}</p>
                <p><strong>Phone</strong><br/><a href={`tel:+${firm.phoneDigits}`}>{firm.phone}</a></p>
                <p><strong>Email</strong><br/><a href={`mailto:${firm.email}`}>{firm.email}</a></p>
              </div>
            </div>
          </div>

          <div className="card" style={{marginTop:18}}>
            <h3>Disclaimer</h3>
            <p>Contacting this firm does not create an attorney client relationship.
              Do not send confidential information until an engagement letter is signed.
              Information on this site is for general informational purposes and is not legal advice.</p>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="location"
        className="section"
        aria-label="Location"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <span className="section-label">Location</span>
          <h2>Find our office</h2>
          <iframe
            className="map"
            title="Map to office"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${encodeURIComponent(firm.mapQuery)}&output=embed`}
          ></iframe>
        </div>
      </motion.section>
    </>
  )
}
