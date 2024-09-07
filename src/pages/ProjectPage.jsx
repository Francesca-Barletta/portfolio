import React from 'react'
import {useNavigate} from 'react-router-dom'
import projects from '../projects'


const ProjectPage = () => {
  const navigate = useNavigate();
  const goToProject = (id) => {
    navigate(`/projects/${id}`)
  }
  return (
    <section className='flex-grow-1 bg-green pt-5'>
      <div className="container">
        <h1 className='text-center dark-blue mb-5'>I miei Progetti:</h1>
        <div className="row row-col-1 row-cols-md-2 row-cols-lg-3 row-gap-5">
          {
            projects.map((project) => {
              return(
                <div className="col" key={project.id}>
                  <div className="my-card">
                    <div className="my-card-img-box">
                      <img src={project.copertina} alt={project.name} className='my-card-img' />
                    </div>
                    <h3 className='mt-4 dark-blue'>{project.nome}</h3>
                
                    <a href={project.repo} target="_blank" className='mb-3 text-decoration-none dark-blue fw-bold'>Repo GitHub</a>
                    <button className='my-btn btn-green' onClick={() => {goToProject(project.id)}}>Vai al dettaglio</button>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>

    </section>
  )
}

export default ProjectPage