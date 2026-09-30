import { skills } from '../data/portfolio'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
<section className="skills section-wrap" id="skills" aria-labelledby="skills-title">
          <SectionHeading index="03 / TOOLKIT" title="Skills" description="Tools and subjects I’ve worked with in coursework and projects." />
          <div className="skills-grid">{skills.map((group, index) => <div className="skill-card" key={group.title}><span className="skill-count">0{index + 1}</span><h3>{group.title}</h3><div className="skill-items">{group.items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div>
        </section>
  )
}
