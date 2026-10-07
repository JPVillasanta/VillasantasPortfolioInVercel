import { projects } from '../data/portfolio'
import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'

export default function Projects() {
  return (
<section className="projects section-wrap" id="projects" aria-labelledby="projects-title">
          <SectionHeading index="02 / SELECTED WORK" title="Projects" description="My role and contributions in each project." />
          <div className="project-list">
            {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
          </div>
        </section>
  )
}
