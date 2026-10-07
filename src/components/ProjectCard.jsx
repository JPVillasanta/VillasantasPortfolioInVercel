import Arrow from './Arrow'

export default function ProjectCard({ project }) {
  return (
    <article className={`project-card${project.featured ? ' project-featured' : ''}`}>
      <div className="project-number">{project.number}</div>
      <div className="project-main">
        <p className="project-category">{project.category}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-detail"><strong>My role</strong><span>{project.role}</span></div>
        <div className="project-detail"><strong>Contribution</strong><span>{project.contribution}</span></div>
        <div className="tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
      </div>
      {project.link && (
        <div className="project-links">
          <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live demo`}>Live demo <Arrow diagonal /></a>
        </div>
      )}
    </article>
  )
}
