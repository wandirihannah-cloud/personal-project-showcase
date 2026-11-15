
import ProjectCard from './ProjectCard'

function ProjectList({ projects }) {
  return (
    <section className="projects-section">
      <h2>My Projects</h2>

      {projects.length === 0 ? (
        <p className="empty-message">No projects found.</p>
      ) : (
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default ProjectList
