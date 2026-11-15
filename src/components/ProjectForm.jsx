
import { useState } from 'react'

function ProjectForm({ onAddProject }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (!title.trim() || !description.trim()) {
      alert('Please fill in both fields.')
      return
    }

    onAddProject(title.trim(), description.trim())

    setTitle('')
    setDescription('')
  }

  return (
    <section className="form-section">
      <h2>Add a New Project</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <button type="submit">Add Project</button>
      </form>
    </section>
  )
}

export default ProjectForm

