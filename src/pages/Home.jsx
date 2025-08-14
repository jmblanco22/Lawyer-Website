import React from 'react'
import SectionBreak from '../components/SectionBreak.jsx'
import Hero from './sections/Hero.jsx'
import Intro from './sections/Intro.jsx'
import PracticeAreas from './sections/PracticeAreas.jsx'
import Expertise from './sections/Expertise.jsx'
import SocialProof from './sections/SocialProof.jsx'
import About from './sections/About.jsx'
import Blog from './sections/Blog.jsx'
import Contact from './sections/Contact.jsx'

export default function Home(){
  return (
    <>
      <Hero />
      <SectionBreak />

      <Intro />
      <SectionBreak />

      <PracticeAreas />
      <SectionBreak />

      <Expertise />
      <SectionBreak />

      <SocialProof />
      <SectionBreak />

      <About />
      <SectionBreak />

      <Blog />
      <SectionBreak />

      <Contact />
    </>
  )
}
