import { email } from '../data/portfolio'
import Arrow from './Arrow'

export default function Hero() {
  return (
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
  )
}
