import React from 'react'
import image from '../assets/images/16.png'
import heroImg from '../assets/images/hero.png'

const Hero = () => {
    const backImage = image;
    const myHero = heroImg;
  return (
    <section className='mb-3'>
      <div className="bg-pink">
        <div className="container mb-3">

        <div className="row gap-2 justify-content-between align-items-center">
          <div className="col-5">
            <h1 className="main-title">Ciao!, sono Francesca Barletta</h1>
            <h3 className="sub-title">Jr Full Stack Web Developer</h3>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <div className="hero-img-box">
              <img src={backImage} alt="immagine"className='w-100 mt-3' />
              <img src={myHero} alt="immagine"className='w-100 mt-3 my-hero-img' />
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="container">
        <p className='mb-3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          ipsam minus repellat vel, quaerat maxime non vitae inventore
          distinctio expedita aliquid voluptas laborum error qui explicabo.
          Corporis veritatis ducimus impedit!
        </p>
        <button className="btn btn-green">Progetti</button>
      </div>
    </section>
  );
}

export default Hero