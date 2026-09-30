import { email, github } from '../data/portfolio'
import Arrow from './Arrow'

export default function Hero() {
  return (
    <section className="hero section-wrap" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="signal" /> AVAILABLE FOR OPPORTUNITIES</p>
        <p className="hero-kicker">Hi, I'm Jhon Paul Villasanta.</p>
        <h1 id="hero-title">Full stack <span>developer</span><span className="cursor">_</span></h1>
        <p className="hero-description">Computer Science student building web applications with React and Laravel. I began as a UI designer on WalangBrownout and grew into a full stack role.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">View projects <Arrow /></a>
          <a className="button button-outline" href={`mailto:${email}?subject=Portfolio%20inquiry`}>Contact me <Arrow diagonal /></a>
        </div>
        <div className="hero-social"><span>FIND ME ONLINE</span><a href={github} target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.facebook.com/jhonpaul.villasanta.3" target="_blank" rel="noreferrer">Facebook ↗</a></div>
      </div>
      <div className="hero-panel" aria-label="Developer profile code illustration">
        <div className="window-bar"><div className="window-dots"><i /><i /><i /></div><span>developer.js</span><span>✦</span></div>
        <div className="code-window">
          <div><span className="line-no">01</span><span className="code-purple">const</span> developer = {'{'}</div>
          <div><span className="line-no">02</span>&nbsp;&nbsp;name: <span className="code-string">'Jhon Paul Villasanta'</span>,</div>
          <div><span className="line-no">03</span>&nbsp;&nbsp;focus: <span className="code-string">'Full Stack Development'</span>,</div>
          <div><span className="line-no">04</span>&nbsp;&nbsp;tools: [<span className="code-string">'React'</span>, <span className="code-string">'Laravel'</span>],</div>
          <div><span className="line-no">05</span>&nbsp;&nbsp;featured: <span className="code-string">'WalangBrownout'</span>,</div>
          <div><span className="line-no">06</span>{'}'}</div>
          <div><span className="line-no">07</span></div>
          <div><span className="line-no">08</span><span className="code-comment">// design → code → working product</span></div>
        </div>
        <div className="terminal-line"><span>❯</span> npm run build <span className="terminal-result">✓ ready to create</span></div>
      </div>
      <a className="hero-footnote" href="#about">SCROLL TO EXPLORE <span>↓</span></a>
    </section>
  )
}
