import speechPhoto from '../assets/Speech.jpg'
import Arrow from './Arrow'

export default function Profile() {
  return (
    <section className="profile section-wrap" id="profile" aria-labelledby="profile-title">
      <div className="profile-photo">
        <img src={speechPhoto} alt="Jhon Paul Villasanta speaking into a microphone" loading="lazy" />
        <span className="profile-photo-label">JHON PAUL VILLASANTA / PROFILE</span>
      </div>
      <div className="profile-copy">
        <p className="section-index">PROFILE</p>
        <h2 id="profile-title">Developer with a<br /><span>designer’s eye.</span></h2>
        <p>I’m Jhon Paul Villasanta, a third-year Computer Science student at the University of Cabuyao (PNC). On WalangBrownout, I started as a UI designer and later took on a full stack development role.</p>
        <a className="text-link" href="#projects">See my work <Arrow diagonal /></a>
      </div>
    </section>
  )
}
