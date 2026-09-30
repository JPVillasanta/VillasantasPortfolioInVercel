import { github, projects } from '../data/portfolio'
import Arrow from './Arrow'
import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'

export default function Projects() {
  return (
<section className="projects section-wrap" id="projects" aria-labelledby="projects-title">
          <SectionHeading index="02 / SELECTED WORK" title="Projects" description="My role and contributions in each project." />
          <div className="project-list">
            {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
          </div>
          <a className="all-work" href={github} target="_blank" rel="noreferrer">View all repositories on GitHub <Arrow diagonal /></a>
        </section>
  )
}
