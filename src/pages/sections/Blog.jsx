import React from 'react'
import Card from '../../components/Card.jsx'

export default function Blog(){
  return (
    <section id="blog" className="section blog" aria-label="Articles and Resources">
      <div className="container">
        <span className="section-label">Resources</span>
        <h2>Insights and Resources</h2>
        <p className="helper">Short, plain-language guides to common questions in [Area of Law].</p>

        <div className="grid grid-3" style={{marginTop:18}}>
          <Card>
            <h3>What to bring to your first meeting</h3>
            <p className="meta">5 min read - Updated <span>Aug 2025</span></p>
            <p>Documents and details that help us evaluate your matter quickly and accurately.</p>
            <a href="#contact" className="btn btn-outline">Ask a question</a>
          </Card>
          <Card>
            <h3>Timeline basics for [common matter]</h3>
            <p className="meta">6 min read - Updated <span>Aug 2025</span></p>
            <p>Understand the typical stages, key milestones, and how we keep things moving.</p>
            <a href="#contact" className="btn btn-outline">Ask a question</a>
          </Card>
          <Card>
            <h3>Costs and billing, explained</h3>
            <p className="meta">4 min read - Updated <span>Aug 2025</span></p>
            <p>How we scope, estimate, and invoice. No surprises. Clear deliverables.</p>
            <a href="#contact" className="btn btn-outline">Ask a question</a>
          </Card>
        </div>
      </div>
    </section>
  )
}
