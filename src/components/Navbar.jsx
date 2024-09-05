import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='my-nav'>
      <div className="container-sm d-flex justify-content-between align-items-center">

        <h1>FB</h1>
        <Link to="/" className='text-decoration-none dark-blue fw-bold'>Home</Link>
        <Link to="/about" className='text-decoration-none dark-blue fw-bold'>Chi sono</Link>
        <Link to="/projects" className='text-decoration-none dark-blue fw-bold'>Progetti</Link>
      </div>
    </div>
  )
}

export default Navbar