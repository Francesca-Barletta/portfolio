import React from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import projects from '../projects';
import ErrorPage from './ErrorPage';

const SingleProject = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === parseInt(id));

  const navigate = useNavigate();

  if (!project) {
    return <ErrorPage />;
  }

  return (
    <section className="flex-grow-1 bg-yellow">
      <div className="container my-5">
        <div className="row align-items-center justify-content-between my-5">
          <div className="col-3">
            <h1 className=" dark-blue fw-bold">{project.nome}</h1>
          </div>

          <div className="col-3">
            <button
              className="my-btn btn-green ms-auto"
              onClick={() => navigate(-1)}
            >
              Torna indietro
            </button>
          </div>
        </div>
        <div className="row justify-content-center row-gap-2">
          <div className="col-12">
            <p className="sub-text text-center dark-blue mb-2">
              {project.descrizione}
            </p>
          </div>
          <div className="col-12">
            <div className="container">
              <div className="row align-items-center">
                <h5 className=" fw-bold dark-blue text-center mb-4">
                  Tecnologie utilizzate:
                </h5>
                <ul className="list-unstyled d-flex flex-wrap justify-content-center align-items-center mb-5 gap-3">
                  {project.tecnologie.map((tech, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-pink text-white p-2 rounded shadow"
                      >
                        {tech}
                      </li>
                    );
                  })}
                </ul>
                <a
                  className="my-btn btn-green justify-self-end text-decoration-none w-25 ms-auto mb-2"
                  href={project.repo}
                  target="_blank"
                >
                  Vai alla repo
                </a>
              </div>
            </div>
            <div className="col-12">
              <img
                className="w-100"
                src={project.copertina}
                alt={project.nome}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProject;