import Arrow from './Arrow'

export default function About() {
  return (
    <section className="about section-wrap section-grid" id="about" aria-labelledby="about-title">
      <div className="section-index">01 / ABOUT</div>
      <div>
        <h2 id="about-title">Curious about how things work.<br /><span>Focused on making them work better.</span></h2>
        <p>I’m a third-year Computer Science student at the University of Cabuyao (PNC), with hands-on experience in frontend development, Laravel applications, APIs, databases, and software testing through coursework and team projects.</p>
        <p>I enjoy translating requirements into clear interfaces and working through the full path from a design or data model to a functioning feature. My work includes WalangBrownout, a student services system, and React–Laravel practice projects.</p>
        <a className="text-link" href="https://www.facebook.com/jhonpaul.villasanta.3" target="_blank" rel="noreferrer">Facebook profile <Arrow diagonal /></a>
      </div>
    </section>
  )
}
