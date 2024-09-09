import React from 'react';
import {Link} from 'react-router-dom';
import Lottie from 'lottie-react'
import animation from '../not-found.json';

const ErrorPage = () => {
 
  return (
    <section className="flex-grow-1">
      <div className="container">
        <div className="row justify-content-center align-items-center flex-column text-center">
         
            <div className="col-10 d-flex justify-content-center">
              <Lottie
                animationData={animation}
                loop={true}
                autoplay={true}
                style={{ width: 500, height: 500 }}
              />
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <Link to="/" className="text-decoration-none my-btn btn-green my-5 text-center">
              Torna alla home
            </Link>
          </div>
        </div>
      
    </section>
  );
}

export default ErrorPage