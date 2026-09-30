import { emails } from '../data/portfolio'
import Arrow from './Arrow'

export default function Contact() {
  return (
    <section className="contact section-wrap" id="contact" aria-labelledby="contact-title">
      <p className="section-index">04 / CONTACT</p>
      <h2 id="contact-title">Have a project<br />in mind? <em>Let’s talk.</em></h2>
      <p>For opportunities, collaborations, or a conversation about my work, choose an email address below.</p>
      <div className="email-options">
        {emails.map((address, index) => (
          <a className="email-card" key={address} href={`mailto:${address}?subject=Portfolio%20inquiry`}>
            <span className="email-label">EMAIL 0{index + 1}</span>
            <span className="email-address">{address}</span>
            <Arrow diagonal />
          </a>
        ))}
      </div>
    </section>
  )
}
