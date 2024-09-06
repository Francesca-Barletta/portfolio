import React from 'react'
import projects from '../projects'

const ProjectPage = () => {
  return (
    <section className='flex-grow-1'>
      <div className="container">
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
                    <p className='dark-blue text-center mb-4'>{project.descrizione}</p>
                    <ul className='list-unstyled d-flex flex-direction-row justify-content-center flex-wrap gap-4 mb-4'>
                      {project.tecnologie.map((tech)=>(
                        <li className='bg-yellow rounded p-1 shadow'>{tech}</li>
                      ))}
                    </ul>
                    <a href={project.repo} target="_blank" className='mb-3 text-decoration-none dark-blue fw-bold'>Repo GitHub</a>
                    <button className='my-btn btn-green'>Vai al dettaglio</button>
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