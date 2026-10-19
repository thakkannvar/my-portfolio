import { useState } from 'react'
import { ArrowDown, ArrowUp, ArrowUpRight, BrainCircuit, Code2, Database, Mail, Menu, PanelsTopLeft, Wrench, X } from 'lucide-react'
import { certifications, education, experience, projects, skills } from './data/portfolioData.js'
import './App.css'

const navItems = [['About', 'about'], ['Skills', 'skills'], ['Experience', 'experience'], ['Projects', 'projects'], ['Education', 'education'], ['Contact', 'contact']]
const currentYear = new Date().getFullYear()
const skillIcons = [Code2, PanelsTopLeft, Database, BrainCircuit, Wrench]

function LinkedInMark() { return <span className="linkedin-mark" aria-hidden="true">in</span> }

function SectionHeading({ eyebrow, title, number }) {
  return <div className="section-heading"><span className="section-number">{number}</span><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div></div>
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return <header className="site-header">
    <a className="wordmark" href="#home" aria-label="Kiran Thakkannavar, home">KT<span>.</span></a>
    <button className="menu-toggle icon-button" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
    <nav className={`primary-navigation${menuOpen ? ' is-open' : ''}`} id="primary-navigation" aria-label="Primary navigation">
      {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
      <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Let&apos;s talk <ArrowUpRight size={15} aria-hidden="true" /></a>
    </nav>
  </header>
}

function Hero() {
  const [photoAvailable, setPhotoAvailable] = useState(true)
  return <section className="hero" id="home" aria-labelledby="hero-title">
    <div className="hero-topline"><span>PORTFOLIO / 2026</span><span>OPEN TO OPPORTUNITIES</span></div>
    <div className="hero-grid"><div className="hero-copy">
      <p className="hero-kicker"><span className="status-dot" /> Python - Django - Backend</p>
      <h1 id="hero-title">Kiran B.<br /><span>Thakkannavar</span></h1>
      <p className="hero-title">Python Developer <span>/</span> Django Developer</p>
      <p className="hero-intro">I build thoughtful web applications and dependable backend systems, turning complex business workflows into software people can use every day.</p>
      <div className="hero-actions"><a className="button button-lime" href="#projects">View my projects <ArrowDown size={16} /></a><a className="button button-outline" href="#contact">Contact me <ArrowUpRight size={16} /></a></div>
      <div className="hero-socials" aria-label="Social links"><a href="https://linkedin.com/in/kiran-thakkannavar-703544334" target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><LinkedInMark /></a><a href="mailto:kiranthakkannavar169@gmail.com" aria-label="Email Kiran"><Mail size={17} /></a><span>Open to meaningful engineering work</span></div>
    </div><div className="hero-art" aria-label="Profile image placeholder">
      <div className="portrait-frame">{photoAvailable ? <img src="/profiles.jpg" alt="Kiran B. Thakkannavar" onError={() => setPhotoAvailable(false)} /> : <div className="portrait-placeholder"><span className="portrait-initials">KT</span><span className="portrait-caption">YOUR PHOTO<br />GOES HERE</span></div>}</div>
      <span className="portrait-index">01 / DEVELOPER</span><div className="orbit-note">Building useful things<br />with Python <ArrowUpRight size={15} /></div>
    </div></div>
    <div className="tech-strip" aria-label="Highlighted technologies"><span className="tech-label">WORKING WITH</span>{['Python', 'Django', 'React.js', 'REST APIs', 'PostgreSQL'].map((item, index) => <span className="tech-item" key={item}><i>0{index + 1}</i>{item}</span>)}</div>
    <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
  </section>
}

function About() {
  return <section className="section about-section" id="about">
    <SectionHeading number="01" eyebrow="A LITTLE ABOUT ME" title="Software with a purpose." />
    <div className="about-layout"><p className="about-lead">I&apos;m a software developer focused on building practical, database-driven products, from well-structured APIs to complete business applications.</p><div className="about-detail">
      <p>At Unizen Technologies, I worked across web applications and enterprise management systems using Python, Django, Django REST Framework, JavaScript, and SQL. My work has included backend services, authentication, reporting, and the day-to-day workflows that keep operations moving.</p>
      <p>I enjoy connecting reliable backend engineering with clear interfaces, and I&apos;m especially curious about applying AI and machine learning to useful, real-world business problems.</p>
      <a className="text-link" href="#experience">Explore my experience <ArrowUpRight size={15} /></a>
    </div></div>
  </section>
}

function Skills() {
  return <section className="section skills-section" id="skills"><SectionHeading number="02" eyebrow="MY TOOLKIT" title="Skills, not scorecards." />
    <div className="skills-grid">{skills.map((group, index) => { const SkillIcon = skillIcons[index]; return <article className="skill-group" key={group.title}><div className="skill-group-heading"><span>0{index + 1}</span><SkillIcon size={18} strokeWidth={1.7} aria-hidden="true" /><h3>{group.title}</h3></div><ul>{group.items.map((skill) => <li key={skill}>{skill}</li>)}</ul></article> })}</div>
  </section>
}

function Experience() {
  return <section className="section experience-section" id="experience"><SectionHeading number="03" eyebrow="WHERE I HAVE WORKED" title="Experience in practice." />
    {experience.map((role) => <article className="experience-entry" key={role.company}><div className="experience-meta"><span>{role.period}</span><span className="experience-mark">●</span></div><div className="experience-content"><p className="eyebrow">{role.company}</p><h3>{role.title}</h3><ul>{role.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul><div className="tag-row">{role.technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}</div></div></article>)}
  </section>
}

function ProjectCard({ project, index }) {
  return <article className={`project-card${project.featured ? ' project-featured' : ''}`}>
    <div className="project-card-top"><span>PROJECT / 0{index + 1}</span><span className="project-arrow"><ArrowUpRight size={18} /></span></div>
    <div className="project-card-body">{project.featured && <span className="featured-label">AI / OPERATIONS CONCEPT</span>}<h3>{project.title}</h3><p className="project-description">{project.description}</p><ul className="feature-list">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div>
    <div className="project-card-bottom"><div className="tag-row">{project.technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}</div><div className="project-links">
      {project.github && <a href={project.github} target="_blank" rel="noreferrer"><Code2 size={14} /> Source</a>}{project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={14} /></a>}{!project.github && !project.demo && <span className="no-link">Links not provided</span>}
    </div></div>
  </article>
}

function Projects() {
  return <section className="section projects-section" id="projects"><SectionHeading number="04" eyebrow="SELECTED WORK" title="Problems worth solving." />
    <p className="section-intro">A mix of business systems and applied computer vision. Repository and demo links can be added as they become available.</p><div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div>
  </section>
}

function Education() {
  return <section className="section education-section" id="education"><SectionHeading number="05" eyebrow="LEARNING & CREDENTIALS" title="The foundations." />
    <div className="education-layout"><div className="timeline-list"><h3 className="subsection-title">Education</h3>{education.map((item) => <article className="education-item" key={item.school}><span className="education-period">{item.period}</span><div><h4>{item.qualification}</h4><p>{item.school}</p></div></article>)}</div>
      <div className="cert-list"><h3 className="subsection-title">Certifications</h3>{certifications.map((item, index) => <article className="cert-item" key={item.name}><span className="cert-number">0{index + 1}</span><div><h4>{item.name}</h4><p>{item.provider}</p></div><ArrowUpRight size={16} aria-hidden="true" /></article>)}</div>
    </div>
  </section>
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [formMessage, setFormMessage] = useState('')
  function handleChange(event) { setForm((current) => ({ ...current, [event.target.name]: event.target.value })); setFormMessage('') }
  function handleSubmit(event) {
    event.preventDefault()
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    if (!form.name.trim() || !emailIsValid || !form.subject.trim() || !form.message.trim()) { setFormMessage('Please complete every field with a valid email address.'); return }
    setFormMessage('This frontend demo does not send messages. Please use the email link to contact Kiran.')
  }
  return <section className="section contact-section" id="contact"><SectionHeading number="06" eyebrow="START A CONVERSATION" title="Have a good problem?" />
    <div className="contact-layout"><div className="contact-copy"><p>I&apos;m interested in Python, Django, backend, and full-stack opportunities. The best way to reach me is by email.</p><a className="contact-email" href="mailto:kiranthakkannavar169@gmail.com">kiranthakkannavar169@gmail.com <ArrowUpRight size={17} /></a><a className="contact-phone" href="tel:+918494831875">+91 84948 31875</a><a className="contact-linkedin" href="https://linkedin.com/in/kiran-thakkannavar-703544334" target="_blank" rel="noreferrer"><LinkedInMark /> LinkedIn profile</a></div>
      <form className="contact-form" onSubmit={handleSubmit} noValidate><div className="form-row"><label>Name<input name="name" autoComplete="name" value={form.name} onChange={handleChange} required /></label><label>Email<input name="email" type="email" autoComplete="email" value={form.email} onChange={handleChange} required /></label></div><label>Subject<input name="subject" value={form.subject} onChange={handleChange} required /></label><label>Message<textarea name="message" rows="4" value={form.message} onChange={handleChange} required /></label><div className="form-submit-row"><button className="button button-lime" type="submit">Check message <ArrowUpRight size={16} /></button><span className="form-note">Demo form - no backend connected</span></div><p className="form-message" role="status" aria-live="polite">{formMessage}</p></form>
    </div>
  </section>
}

function Footer() {
  return <footer className="site-footer"><a className="footer-name" href="#home">Kiran B. Thakkannavar<span>.</span></a><p>Python Developer - Django Developer - Backend Developer</p><nav aria-label="Footer navigation">{navItems.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
    <div className="footer-bottom"><span>© {currentYear} Kiran Thakkannavar</span><div><a href="https://linkedin.com/in/kiran-thakkannavar-703544334" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInMark /></a><a href="mailto:kiranthakkannavar169@gmail.com" aria-label="Email"><Mail size={16} /></a></div><a className="back-to-top" href="#home">Back to top <ArrowUp size={14} /></a></div>
  </footer>
}

function App() { return <><div className="hero-shell"><Header /><Hero /></div><main><About /><Skills /><Experience /><Projects /><Education /><Contact /></main><Footer /></> }
export default App