import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
        <h1>FB</h1>
        <Link to="/">Home</Link>
        <Link to="/about">Chi sono</Link>
        <Link to="/projects">Progetti</Link>
    </div>
  )
}

export default Navbar