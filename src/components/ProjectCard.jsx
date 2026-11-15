function ProjectCard({ title, description }) {
  return (
    <article className="project-card">
      <div className="project-image">
        <span>My Project</span>
      </div>

      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  )
}

export default ProjectCard
