import React, {useEffect} from 'react'
import {Link                                                                                                                                                                                                                                                             } from 'react-router-dom'
import projects from '../projects'


const ProjectPage = () => {


  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <section className='flex-grow-1 bg-yellow pt-5'>
      <div className="container my-5">
        <h1 className='text-center dark-blue mb-5'>I miei Progetti</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center row-gap-5 my-5">
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
                    <Link className='my-btn btn-green text-decoration-none' to={`/projects/${project.id}`}>Vai al dettaglio</Link>
                    
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