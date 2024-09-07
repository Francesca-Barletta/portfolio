import React, {useState} from 'react';
import technologies from '../technologies';

const Technologies = () => {

 const frontend = technologies.find((el) => el.type === "frontend");
 const backend = technologies.find((el) => el.type === "backend");

 
  return (
    <section className="mb-3">
      <div className="container">
        <h3 className="second-title text-center mb-3 dark-blue">
          Le Tecnologie utilizzate:
        </h3>
        <div className="row justify-content-end position-relative align-items-center my-5">
        
              <div className="icons-container icons-left bg-dark-blue">
          

             {frontend.icons.map((icon) => {
              return <div className='icon-box'>
                <img src={`/assets/tecnologie/${icon}.svg`} alt={icon} className='icon-img' />
              </div>
             })}
            
           

           
            </div>
          
          <div className="col-3 mt-5 me-4 ">
            <div className='dark-blue text-center '>
              <h2 >
                Front-End:
              </h2>
              <p className='sub-text'>Per la programmazione lato front-end ho studiato ed utilizzato HTML5, CSS3, Bootstrap, Sass/scss, e Figma per struttura e stile, come linguaggio si programmazione per la logica, Javascript e come framework e librerie, Vue.js e React con Vite</p>
            </div>
          </div>
        </div>

        <div className="row justify-content-between position-relative align-items-center gap-2 mb-5">
          <div className="col-3 mt-5 ms-4">
            <div className='dark-blue text-center '>
              <h2>
             Back-End:
              </h2>
              <p className='sub-text'>Per la programmazione lato back-end invece ho studiato ed utilizzato il linguaggio PHP, con il framework Laravel, ho creato database relazionali ed utilizzato Mysql</p>
            </div>
          </div>
          
            <div
              className="bg-yellow icons-container icons-right mt-5">
                    {backend.icons.map((icon) => {
              return <div className='icon-box'>
                <img src={`/assets/tecnologie/${icon}.svg`} alt={icon} className='icon-img' />
              </div>
             })}

              </div>
         
        </div>
      </div>
    </section>
  );
}

export default Technologies