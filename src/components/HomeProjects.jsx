import React from 'react'
import projects from '../projects';
const HomeProjects = () => {
  const firstThreeProj = projects.slice(0,3);
  console.log(firstThreeProj)
  return (
    <>
    <section className="bg-pink p-3 flex-grow-1 ">
      <div className="container">
        <h3 className="second-title light-blue text-center my-5 ">
          Alcuni dei miei progetti:
        </h3>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-around my-5">
        {firstThreeProj.map((project) =>{
          return(

        <div key={project.id} className="col">
        
          <div className="my-card">
            <div className="my-card-img-box mb-2">
                <img src={project.copertina} alt={project.nome}  className='my-card-img'/>
            </div>
            <h4 className='text-white mt-3'>{project.nome}</h4>
            <p className='text-white text-center'>{project.descrizione}</p>
            <a href={project.repo} target="_blank" className='text-decoration-none dark-blue fw-bold mb-5'>Vai alla repo su GitHub</a>
            <button className='my-btn btn-yellow'>vai al progetto</button>
          </div>
        </div>
          )
        })}
       
        </div>
        <div className='d-flex justify-content-center my-5'>

        <button className='my-btn btn-green'>Vedi tutti progetti</button>
        </div>
      </div>
    </section>
    
    </>
  );
}

export default HomeProjects