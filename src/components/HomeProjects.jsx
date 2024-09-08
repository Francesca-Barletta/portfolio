import React from 'react'
import projects from '../projects';
import { useNavigate, Link } from 'react-router-dom';
const HomeProjects = () => {
  const firstThreeProj = projects.slice(0,3);
 
  const navigate = useNavigate();
  const goToProject = (id) => {
       navigate(`/projects/${id}`)
  }
  return (
    <>
    <section className="bg-pink p-3 flex-grow-1 ">
      <div className="container">
        <h3 className="second-title text-white text-center my-5 ">
          Alcuni dei miei progetti:
        </h3>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-around my-5">
        {firstThreeProj.map((project) =>{
          return(

        <div key={project.id} className="col">
        
          <div className="my-card">
            <div className="my-card-img-box mb-5">
                <img src={project.copertina} alt={project.nome}  className='my-card-img'/>
            </div>
            <h3 className='text-white fw-bold'>{project.nome}</h3>
           
            <a href={project.repo} target="_blank" className='text-decoration-none repo-anchor dark-blue fw-bold'>Vai alla repo su GitHub</a>
            <button className='my-btn btn-yellow ' onClick={() => {goToProject(project.id)}}>vai al progetto</button>
          </div>
        </div>
          )
        })}
       
        </div>
        <div className='d-flex justify-content-center my-5'>
        <Link to="/projects" className='text-decoration-none my-btn btn-green'>Vedi tutti progetti</Link>
        
        </div>
      </div>
    </section>
    
    </>
  );
}

export default HomeProjects