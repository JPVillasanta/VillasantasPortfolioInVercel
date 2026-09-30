import './App.css'

const email = 'jhonpaulvillasanta937@gmail.com'
const github = 'https://github.com/JPVillasanta'

const projects = [
  {
    number: '01',
    title: 'WalangBrownout',
    category: 'Featured · Team web application',
    description: 'An online storefront project with a React frontend and Laravel backend.',
    role: 'UI Designer → Full Stack Developer',
    contribution: 'Started as the UI designer and later took on full stack development work across the frontend and backend.',
    stack: ['React', 'Laravel', 'PHP', 'MySQL'],
    link: 'https://github.com/JESSIEWANTSLEARN/UnpaidDevFrontEnd',
    secondLink: 'https://github.com/JESSIEWANTSLEARN/UnpaidDevBackEnd',
    featured: true,
  },
  {
    number: '02',
    title: 'CuyoTech Student Services Information System',
    category: 'Team project · Student services',
    description: 'A student services information system developed as a course team project.',
    role: 'Developer / UI/UX Designer',
    contribution: 'Assigned to UI/UX wireframes, the student and admin modules, interface consistency, and frontend implementation.',
    stack: ['React', 'UI/UX', 'System design'],
    link: 'https://github.com/JESSIEWANTSLEARN/CuyoTech-Student-Services-Information-System',
  },
  {
    number: '03',
    title: 'React and Laravel CRUD Starter',
    category: 'Personal practice · Full stack',
    description: 'A pair of starter repositories for a React frontend and Laravel backend, intended to demonstrate API communication and basic CRUD.',
    role: 'Developer',
    contribution: 'Created the frontendReactApp and backendLaravelApp repositories as a practice foundation for React and Laravel integration.',
    stack: ['React', 'Laravel', 'REST API', 'CRUD'],
    link: 'https://github.com/JPVillasanta/frontendReactApp',
    secondLink: 'https://github.com/JPVillasanta/backendLaravelApp',
  },
  {
    number: '04',
    title: 'CRUD Task Manager',
    category: 'Personal practice · Web application',
    description: 'A task management practice app with create, view, update, and delete routes.',
    role: 'Developer',
    contribution: 'Set up the Laravel application, database migrations, React/Inertia entry point, and task resource routes.',
    stack: ['Laravel', 'React', 'Inertia', 'MySQL'],
    link: 'https://github.com/JPVillasanta/CRUDTaskManager',
  },
]

const skills = [
  { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite'] },
  { title: 'Backend & data', items: ['PHP', 'Laravel', 'REST APIs', 'MySQL'] },
  { title: 'Programming', items: ['C#', 'Java', 'Python'] },
  { title: 'Workflow & design', items: ['Git & GitHub', 'Postman', 'UI/UX wireframes', 'Testing'] },
]

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? '↗' : '→'}</span>
}

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Jhon Paul Villasanta, back to top">JP<span>.</span>V</a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-link" href={github} target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a>
      </header>

      <main id="top">
        <section className="hero section-wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="signal" /> COMPUTER SCIENCE STUDENT · DEVELOPER</p>
            <h1 id="hero-title">Building useful<br /><em>digital experiences.</em></h1>
            <p className="hero-description">I’m Jhon Paul Villasanta, a computer science student who began on a team project as a UI designer and grew into a full stack development role.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <Arrow /></a>
              <a className="button button-plain" href={`mailto:${email}?subject=Portfolio%20inquiry`}>Get in touch <Arrow diagonal /></a>
            </div>
          </div>
          <div className="hero-panel" aria-label="Portfolio overview">
            <div className="panel-top"><span>PORTFOLIO / 2026</span><span className="panel-star">✳</span></div>
            <div className="monogram">JP<span>V</span><i>↗</i></div>
            <div className="panel-bottom"><span>Code<br />Design<br />Build</span><span>01 / 03</span></div>
          </div>
          <p className="hero-footnote">Scroll to see selected work <span>↓</span></p>
        </section>

        <section className="about section-wrap section-grid" id="about" aria-labelledby="about-title">
          <div className="section-index">01 / ABOUT</div>
          <div>
            <h2 id="about-title">Curious about how things work.<br /><span>Focused on making them work better.</span></h2>
            <p>I’m a third-year Computer Science student with hands-on experience in frontend development, Laravel applications, APIs, databases, and software testing through coursework and team projects.</p>
            <p>I enjoy translating requirements into clear interfaces and working through the full path from a design or data model to a functioning feature. My work includes WalangBrownout, a student services system, and React–Laravel practice projects.</p>
            <a className="text-link" href="https://www.facebook.com/jhonpaul.villasanta.3" target="_blank" rel="noreferrer">Facebook profile <Arrow diagonal /></a>
          </div>
        </section>

        <section className="projects section-wrap" id="projects" aria-labelledby="projects-title">
          <div className="section-heading"><div><p className="section-index">02 / SELECTED WORK</p><h2 id="projects-title">Projects<span className="accent">.</span></h2></div><p>My role and contributions in each project.</p></div>
          <div className="project-list">
            {projects.map((project) => (
              <article className={`project-card${project.featured ? ' project-featured' : ''}`} key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-main">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-detail"><strong>My role</strong><span>{project.role}</span></div>
                  <div className="project-detail"><strong>Contribution</strong><span>{project.contribution}</span></div>
                  <div className="tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                </div>
                <div className="project-links"><a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} repository`}>Repository <Arrow diagonal /></a>{project.secondLink && <a href={project.secondLink} target="_blank" rel="noreferrer">Backend repository <Arrow diagonal /></a>}</div>
              </article>
            ))}
          </div>
          <a className="all-work" href={github} target="_blank" rel="noreferrer">View all repositories on GitHub <Arrow diagonal /></a>
        </section>

        <section className="skills section-wrap" id="skills" aria-labelledby="skills-title">
          <div className="section-heading"><div><p className="section-index">03 / TOOLKIT</p><h2 id="skills-title">Skills<span className="accent">.</span></h2></div><p>Tools and subjects I’ve worked with in coursework and projects.</p></div>
          <div className="skills-grid">{skills.map((group, index) => <div className="skill-card" key={group.title}><span className="skill-count">0{index + 1}</span><h3>{group.title}</h3><div className="skill-items">{group.items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div>
        </section>

        <section className="contact section-wrap" id="contact" aria-labelledby="contact-title">
          <p className="section-index">04 / CONTACT</p>
          <h2 id="contact-title">Have a project<br />in mind? <em>Let’s talk.</em></h2>
          <p>For opportunities, collaborations, or a conversation about my work, send me an email.</p>
          <a className="button button-light" href={`mailto:${email}?subject=Portfolio%20inquiry`}>Email me <Arrow diagonal /></a>
          <p className="contact-address">{email}</p>
        </section>
      </main>
      <footer className="site-footer section-wrap"><span>© {new Date().getFullYear()} Jhon Paul Villasanta</span><span>Built with React + Vite</span><a href="#top">Back to top ↑</a></footer>
    </div>
  )
}

export default App
