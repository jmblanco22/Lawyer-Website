# Law Office - One Page React Site (Refined)

A professional, modern, single-page site with a clean file structure and visible section dividers.

## Structure
```
src/
  assets/            - images and static assets
  components/        - shared UI components
    Button.jsx
    Card.jsx
    ContactForm.jsx
    Footer.jsx
    Header.jsx
    PracticeAreaCard.jsx
    Testimonial.jsx
  data/              - simple JSON-like data
    practiceAreas.js
    testimonials.js
  pages/
    Home.jsx         - assembles all sections
    sections/
      About.jsx
      Blog.jsx
      Contact.jsx
      Hero.jsx
      Intro.jsx
      PracticeAreas.jsx
      SocialProof.jsx
  styles/
    globals.css      - tokens, layout, responsive rules
    sections.css     - small helpers and labels
  App.jsx
  main.jsx
index.html           - root HTML with fonts and structured data
vite.config.js
```

## Quick start
```bash
npm install
npm run dev
```
Open the printed local URL in your browser.

## Customize
- Replace placeholders like `[Lawyer's Name]`, `[Area of Law]`, address, phone in `index.html` and the section files.
- Update practice areas in `src/data/practiceAreas.js`.
- Update testimonials in `src/data/testimonials.js`.
- Change accent color in `src/styles/globals.css` by editing `--accent`.
- Replace placeholder SVGs with real portraits and office photos.
- To integrate a backend for the contact form, replace the `mailto` logic inside `ContactForm.jsx` with a `fetch` call to your API and add server validation.
