

import { useState } from 'react'
import Header from './components/Header'
import ProjectForm from './components/ProjectForm'
import SearchBar from './components/SearchBar'
import ProjectList from './components/ProjectList'
import './App.css'

function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'My Portfolio Website',
      description: 'A personal website showcasing my skills and projects.'
    },
    {
      id: 2,
      title: 'Creative Design Project',
      description: 'A project showcasing my creativity and design skills.'
    }
  ])

  const [searchTerm, setSearchTerm] = useState('')

  function handleAddProject(title, description) {
    const newProject = {
      id: Date.now(),
      title,
      description
    }

    setProjects([...projects, newProject])
  }

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="app">
      <Header />

      <main className="container">
        <ProjectForm onAddProject={handleAddProject} />

        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        <ProjectList projects={filteredProjects} />
      </main>
    </div>
  )
}

export default App
