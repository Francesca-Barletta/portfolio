import React from 'react'

const HomeProjects = () => {
  return (
    <>
    <section className="bg-pink p-3 mb-3">
      <div className="container">
        <h3 className="second-title light-blue text-center mb-3 ">
          Qui ci sono i progetti
        </h3>
        <div className="row between">

        <div className="col-4">
          <div className="card d-flex center align-center between column">
            <div className="card-img-box">
                <img src="" alt="immagineprog" />
            </div>
            <h4>Titolo</h4>
            <p>progetto descrizione</p>
            <button className='btn btn-yellow'>vai al progetto</button>
          </div>
        </div>
        <div className="col-4">
          <div className="card d-flex center align-center between column">
            <div className="card-img-box">
                <img src="" alt="immagineprog" />
            </div>
            <h4>Titolo</h4>
            <p>progetto descrizione</p>
            <button className='btn btn-yellow'>vai al progetto</button>
          </div>
        </div>
        <div className="col-4">
          <div className="card d-flex center align-center between column">
            <div className="card-img-box">
                <img src="" alt="immagineprog" />
            </div>
            <h4>Titolo</h4>
            <p>progetto descrizione</p>
            <button className='btn btn-yellow'>vai al progetto</button>
          </div>
        </div>
        </div>
      </div>
    </section>
    <section className='text-center p-3 mb-3'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit atque, iure architecto nulla repellat quidem amet eaque ut ad sint eos cum modi illum explicabo. Voluptate error inventore consequuntur ratione?</p>
    </section>
    </>
  );
}

export default HomeProjects