import React, { useState } from 'react'
import { firm } from '../data/firm.js'
import { motion } from 'framer-motion'

function sanitize(str){ return String(str).replace(/[<>]/g, '') }

const fade = { initial:{opacity:0,y:16}, animate:{opacity:1,y:0}, transition:{duration:.4} }

export default function ContactForm(){
  const [status, setStatus] = useState('')

  function onSubmit(e){
    e.preventDefault()
    setStatus('Sending...')
    const form = e.currentTarget
    const data = {
      name: sanitize(form.name.value),
      email: sanitize(form.email.value),
      phone: sanitize(form.phone.value),
      practice: sanitize(form.practice.value),
      message: sanitize(form.message.value)
    }
    const mailto =
      `mailto:${firm.email}?subject=New inquiry from ${encodeURIComponent(data.name)}&body=${encodeURIComponent(
        'Practice area: ' + data.practice + '\nPhone: ' + data.phone + '\n\n' + data.message
      )}`
    try{
      window.location.href = mailto
      setStatus('Thanks. Your email app should open with a drafted message.')
      form.reset()
    }catch{
      setStatus(`There was an issue starting your mail app. Please email us at ${firm.email}.`)
    }
  }

  return (
    <motion.form className="form modern" noValidate onSubmit={onSubmit} {...fade}>
      <div className="fields">
        <div className="field triwrap">
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" type="text" autoComplete="name" required placeholder="Jane Doe" className="input" />
          <span aria-hidden="true" className="tri deco"></span>
        </div>

        <div className="field triwrap">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" required placeholder="you@domain.com" className="input" />
          <span aria-hidden="true" className="tri deco"></span>
        </div>

        <div className="field triwrap">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" inputMode="tel" placeholder="(555) 123-4567" className="input" />
          <span aria-hidden="true" className="tri deco"></span>
        </div>

        <div className="field">
          <label htmlFor="practice">Practice area</label>
          <select id="practice" name="practice" className="input">
            <option value="General">General question</option>
            <option>Divorce and Property Division</option>
            <option>Child Custody and Parenting Time</option>
            <option>Prenuptial and Postnuptial Agreements</option>
          </select>
        </div>

        <div className="field wide triwrap">
          <label htmlFor="message">How can we help?</label>
          <textarea id="message" name="message" required placeholder="Tell us a bit about your situation" className="input tall"></textarea>
          <span aria-hidden="true" className="tri deco"></span>
        </div>
      </div>

      <p className="helper">By submitting, you agree to be contacted and confirm you have read the disclaimer below.</p>

      <button className="btn large" type="submit">Send message</button>
      <p className="helper" role="status" aria-live="polite">{status}</p>
    </motion.form>
  )
}
