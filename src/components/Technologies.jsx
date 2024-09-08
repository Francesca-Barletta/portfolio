import React, {useState} from 'react';
import technologies from '../technologies';

const Technologies = () => {

 const frontend = technologies.find((el) => el.type === "frontend");
 const backend = technologies.find((el) => el.type === "backend");

 
  return (
    <section className="mb-5">
      <div className="tech-title position-relative">
        <img
          src="/assets/app-images/Group-12.png"
          className="icon-abs-group"
          alt=""
        />
        <img
          src="/assets/app-images/Group-11.png"
          className="icon-abs-group-pink"
          alt=""
        />
        <h2 className=" text-center my-5 dark-blue">
          Le Tecnologie utilizzate
        </h2>
      </div>
      {/* inizio tech frontend */}
      <div className="row g-0 justify-content-center row-gap-3 align-items-center mb-3">
        <div className="col-10 col-lg-7 me-auto icons-container icons-left bg-dark-blue mb-5">
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
      <div className="row g-0 justify-content-center row-gap-3 align-items-center mb-3">
        <div className="col-10 col-lg-4 dark-blue mx-5 text-center position-relative">
          <div className="dark-blue text-center ">
            <h2>Back-End:</h2>
            <p className="sub-text">
              Per la programmazione lato back-end invece ho studiato ed
              utilizzato il linguaggio PHP, con il framework Laravel, ho creato
              database relazionali ed utilizzato Mysql
            </p>
          </div>
          <img src="/assets/app-images/Vector-5.png" alt="" className='line-blue' />
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