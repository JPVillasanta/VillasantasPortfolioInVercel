import Arrow from './Arrow'

export default function Header() {
  return (
<header className="site-header">
        <a className="wordmark" href="#top" aria-label="Jhon Paul Villasanta, back to top">JP<span>.</span>V</a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-link" href="https://github.com/JPVillasanta" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a>
      </header>
  )
}
