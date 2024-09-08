import React from 'react'
import { RiFileDownloadFill } from "react-icons/ri";

const AboutPage = () => {
  return (
    <>
      <section className="bg-green">
        <div className="container flex-grow-1 my-5 text-center py-5">
          <div className="position-relative my-5">
            <h2 className="dark-blue mb-5">Mi presento!</h2>
            <img
              src="/assets/app-images/Group-10.png"
              className="about-ab-group"
              alt="immagine-astratta"
            />
          </div>
          <p className="dark-blue sub-text py-5">
            Ho una passione per la musica e in passato ho suonato la chitarra
            elettrica in una band femminile, nel 2017 ho scoperto il ballo
            country e sono diventata insegnante, inoltre ho da sempre una grande
            passione per la grafica, lo sviluppo web e per l’artigianato, per la
            creatività in ogni forma insomma, che sia manuale o attraverso lo
            sviluppo del codice. <br />
            Ho lavorato per 12 anni in una pelletteria dove venivano create
            borse per una marca di alta moda, ho iniziato da semplice
            apprendista per poi arrivare a ricoprire il ruolo di responsabile,
            seppur in ambito totalmente diverso da quello che è la
            programmazione questo lavoro mi ha insegnato la serietà sul lavoro,
            mi ha insegnato a lavorare in team e la gestione del tempo.
            <br />
            Quando lo scorso novembre l'attività ha chiuso ho deciso di prendere
            la situazione come un'opportunità per studiare e diventare
            programmatore, quindi ho iniziato il corso di Boolean Academy per
            diventare Full Stack Web Developer, e ad oggi continuo a studiare in
            autonomia per ampliare le mie competenze.
          </p>
        </div>
        <div className="position-relative">
          <img
            src="/assets/app-images/Vector-4.png"
            className="about-ab-line  pb-3"
            alt="immagine-astratta"
          />
        </div>
      </section>
      <section className="bg-yellow">
        <div className="container flex-grow-1 my-5 text-center py-5">
          <div className="position-relative">
            <h2 className="dark-blue mb-5">La mia formazione</h2>
            <img
              src="/assets/app-images/Group-17.png"
              className="form-ab-group"
              alt="immagine-astratta"
            />
          </div>
          <ul className="row row-cols-1 row-cols-md-2 row-cols-lg-4 row-gap-4 list-unstyled d-flex justify-content-around">
            <li className="col px-3">
              <div className="my-card">

              <h4 className="dark-blue fw-bold mb-3">Boolean Careers</h4>
              <h6 className="dark-blue fw-bold">Full Stack Web Developer</h6>
              <p className="dark-blue">
                <span className="fw-bold">Anno: </span>2024
              </p>
              <p className="dark-blue">
                Corso intensivo di 700 ore durante le quali ho partecipato a
                lezioni teoriche e pratiche, dove ho appreso le basi della
                programmazione lato front-end e back-end.
              </p>
              <a
                href="/assets/files/certificato-boolean.pdf"
                download="boolean_francesca_barletta"
                className="text-decoration-none  my-btn btn-green"
              >
                <RiFileDownloadFill />
                 Scarica il certificato
              </a>
              </div>
            </li>
            <li className="col px-3">
              <div className="my-card">

              <h4 className="dark-blue fw-bold mb-3">Udemy</h4>
              <p className="dark-blue">
                <span className="fw-bold">Anno: </span>2024
              </p>
             
                  <h6 className="dark-blue fw-bold">
                    Corso su React.js e Redux
                  </h6>
                  <p className="dark-blue">
                    Corso della durata di 24 ore dove vengono eseguiti 11
                    progetti e vengono spiegati gli hooks di React
                  </p>
                  <a
                    href="/assets/files/certificato-react.pdf"
                    download="react_francesca_barletta"
                    className="text-decoration-none  my-btn btn-green"
                  >
                    <RiFileDownloadFill /> 
                      Scarica il certificato
                  </a>
                
                  <h6 className="dark-blue fw-bold">Corso su Figma</h6>
              <p className="dark-blue">
                Corso base per disegnare siti web e mobile app su Figma.
              </p>
              <a
                href="/assets/files/figma-certificato.pdf"
                download="figma_francesca_barletta"
                className="text-decoration-none  my-btn btn-green"
                >
                <RiFileDownloadFill />
                Scarica il certificato
              </a>
            
              </div>
            </li>
            <li className="col px-3">
              <div className="my-card">

              <h4 className="dark-blue fw-bold mb-3">Gatto sul web</h4>
              <p className="dark-blue">
                <span className="fw-bold">Anno: </span>2019
              </p>
              <p className="dark-blue">
                Corso online di 24 ore sull’utilizzo di Adobe Illustrator cc
              </p>
              <a
                href="/assets/files/certificato-illustrator.pdf"
                download="illustrator_francesca_barletta"
                className="text-decoration-none my-btn btn-green"
              >
                <RiFileDownloadFill />
                Scarica il certificato
              </a>
              </div>
            </li>

            <li className="col px-3">
              <div className="my-card">

              <h4 className="dark-blue fw-bold mb-3">CMFP Adriatico</h4>
              <p className="dark-blue">
                <span className="fw-bold">Anno: </span>2009
              </p>
              <p className="dark-blue">
                Corso per qualifica della provincia di Roma della durata di
                circa 6 mesi, dove ho imparato i fondamenti della grafica e
                principalmente l’utilizzo di Adobe Photoshop.
              </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default AboutPage