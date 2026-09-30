import { email } from '../data/portfolio'
import Arrow from './Arrow'

export default function Contact() {
  return (
<section className="contact section-wrap" id="contact" aria-labelledby="contact-title">
          <p className="section-index">04 / CONTACT</p>
          <h2 id="contact-title">Have a project<br />in mind? <em>Let’s talk.</em></h2>
          <p>For opportunities, collaborations, or a conversation about my work, send me an email.</p>
          <a className="button button-light" href={`mailto:${email}?subject=Portfolio%20inquiry`}>Email me <Arrow diagonal /></a>
          <p className="contact-address">{email}</p>
        </section>
  )
}
