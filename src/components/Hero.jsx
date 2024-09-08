import React from 'react'
import { RiFileDownloadFill } from "react-icons/ri";


const Hero = () => {
   
  return (
    <section className='mb-3'>
      <div className="bg-pink">
        <div className="container mb-3 pt-4">

        <div className="row row-gap-3 row-cols-1 row-cols-md-2 justify-content-between">
          <div className="col d-flex flex-column justify-content-around align-items-start ">
            <h1 className="main-title">Ciao!,<br/>sono Francesca Barletta</h1>
            <h2 className="sub-title">Jr Full Stack Web Developer</h2>
            <a href="/assets/files/Francesca-Barletta.pdf" download="cv_Francesca-Barletta" className='mb-1 text-decoration-none w-75 my-btn text-center btn-yellow'><RiFileDownloadFill/>Scarica il mio CV</a>
          </div>
          <div className="col h-100 d-flex justify-content-center">
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
          Sono una creativa, mi piace la musica il ballo e la grafica, ed è stato proprio studiando grafica che mi sono approcciata al mondo della programmazione. Recentemente ho desico di mettermi alla prova ed ho completato con successo il corso intensivo di sei mesi con Boolean Academy per Full Stack Web Developer, finito il corso sto ampliando il mio bagaglio di conoscenze tecniche studiando React e Figma, mi sento portata per il lato frontend ma sono aperta anche a lavorare come backend developer, e non vedo l'ora di mettere in pratica in un ambiente lavorativo le mie conoscenze e crescere professionalmente!
        </p>
        <button className="my-btn btn-green">Progetti</button>
      </div>
    </section>
  );
}

export default Hero