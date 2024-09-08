import React, {useState} from 'react';
import technologies from '../technologies';

const Technologies = () => {

 const frontend = technologies.find((el) => el.type === "frontend");
 const backend = technologies.find((el) => el.type === "backend");

 
  return (
    <section className="mb-3">
      <div className='tech-title'>
      <h3 className="second-title text-center mb-5 dark-blue">
        Le Tecnologie utilizzate:
      </h3>

      </div>
      {/* inizio tech frontend */}
      <div className='row g-0 justify-content-center row-gap-3 align-items-center mb-5'>
        <div className="col-10 col-lg-7 me-auto icons-container icons-left bg-dark-blue">
          {frontend.icons.map((icon) => {
            return (
              <div className="icon-box">
                <img
                  src={`/assets/tecnologie/${icon}.svg`}
                  alt={icon}
                  className="icon-img"
                />
              </div>
            );
          })}
        </div>
        <div className="col-10 col-lg-4 mx-5 dark-blue text-center">
          <h2>Front-End:</h2>
          <p className="sub-text">
            Per la programmazione lato front-end ho studiato ed utilizzato
            HTML5, CSS3, Bootstrap, Sass/scss, e Figma per struttura e stile,
            come linguaggio si programmazione per la logica, Javascript e come
            framework e librerie, Vue.js e React con Vite
          </p>
        </div>
      </div>
      {/* inizio tech backend */}
      <div className='row g-0 justify-content-center row-gap-3 align-items-center mb-5'>
      <div className="col-10 col-lg-4 dark-blue mx-5 text-center">
        <div className="dark-blue text-center ">
          <h2>Back-End:</h2>
          <p className="sub-text">
            Per la programmazione lato back-end invece ho studiato ed utilizzato
            il linguaggio PHP, con il framework Laravel, ho creato database
            relazionali ed utilizzato Mysql
          </p>
        </div>
      </div>
      <div className="col-10 col-lg-7 bg-yellow icons-container icons-right ms-auto mt-5">
        {backend.icons.map((icon) => {
          return (
            <div className="icon-box">
              <img
                src={`/assets/tecnologie/${icon}.svg`}
                alt={icon}
                className="icon-img"
              />
            </div>
          );
        })}
      </div>

    </div>
    </section>
  );
}

export default Technologies