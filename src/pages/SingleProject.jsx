import React,{useEffect} from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import projects from '../projects';
import ErrorPage from './ErrorPage';

const SingleProject = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);  // Quando il componente viene montato, scrolla verso l'alto
  }, []);


  const navigate = useNavigate();


  if (!project) {
    return <ErrorPage />;
  }

  return (
    <section className="flex-grow-1 bg-yellow ">
      <div className="container my-5">
        <div className="row align-items-center justify-content-center my-5">
            <div className='col-7'>
            <h1 className="dark-blue main-title text-end ">{project.nome}</h1>
            </div>
            <div className='col-auto ms-auto'>

            <button
              className="my-btn btn-dark-blue"
              onClick={() => navigate(-1)}
            >
              Torna indietro
            </button>
            </div>
          
        </div>
        <div className="row justify-content-center row-gap-2">
          <div className="col-12">
            <p className="sub-text text-center dark-blue mb-4">
              {project.descrizione}
            </p>
          </div>
          <div className="col-12">
            <div className="container">
              <div className="row align-items-center">
                
              </div>
            </div>
            <div className="col-12">
              <img
                className="w-100"
                src={project.copertina}
                alt={project.nome}
              />
              <h3 className=" fw-bold dark-blue text-center my-4">
                  Tecnologie utilizzate:
                </h3>
                <ul className="list-unstyled d-flex flex-wrap justify-content-center align-items-center mb-5 gap-3">
                  {project.tecnologie.map((tech, index) => {
                    return (
                      <li key={index} className="bg-pink text-white p-2 rounded shadow">
                        {tech}
                      </li>
                    );
                  })}
                </ul>
                <a
                  className="my-btn btn-dark-blue text-decoration-none w-25 mx-auto mb-5"
                  href={project.repo}
                  target="_blank">
                  Vai alla repo
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProject;