import React from 'react'
import { RiFileDownloadFill } from "react-icons/ri";
import { Link } from 'react-router-dom';


const Hero = () => {
   
  return (
    <section className='mb-3'>
      <div className="bg-pink">
        <div className="container mb-3 pt-4">

        <div className="row row-gap-3 row-cols-1 row-cols-md-2 justify-content-between">
          <div className="col d-flex flex-column justify-content-around align-items-start ">
            <h1 className="text-light">Ciao!,<br/>sono Francesca Barletta</h1>
            <h2 className="">Jr Full Stack Web Developer</h2>
            <a href="/assets/files/Francesca.Barletta.pdf" download="cv_Francesca-Barletta" className='mb-1 text-decoration-none d-flex my-btn text-center btn-yellow'><h6 className='fw-bold mb-0'><RiFileDownloadFill/> Scarica il mio CV</h6></a>
          </div>
          <div className="col d-flex justify-content-center">
            <div className="hero-img-box">
              <img src='/assets/app-images/Group-16.png' alt="immagine"className='w-100 mt-3 my-hero-bg' />
              <img src='/assets/app-images/myHero.png' alt="immagine"className='w-100 mt-3 my-hero-img' />
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="container">
        <p className='mb-3 dark-blue text-center sub-text'>
          Sono una creativa e studiando grafica mi sono avvicinata al mondo della programmazione. Di recente ho deciso di mettermi alla prova in questo campo ed ho completato con successo il corso intensivo di sei mesi con Boolean Academy per Full Stack Web Developer, finito il corso sto ampliando il mio bagaglio di conoscenze tecniche studiando React e Figma e non vedo l'ora di mettere in pratica le mie conoscenze sul lavoro!
        </p>
        <Link to="/projects"  className="my-btn text-decoration-none mx-auto w-25 btn-green">Progetti</Link>
      </div>
    </section>
  );
}

export default Hero
