import React from 'react'
import {Link} from 'react-router-dom'
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import {FaBars} from 'react-icons/fa';
import { useGlobalContext } from '../context';
const Navbar = () => {
  const {openSidebar, isSidebarOpen, closeSidebar} = useGlobalContext();
  
  const handleSidebar = (e) => {
    if(isSidebarOpen){
      closeSidebar()
    } else{
      openSidebar()
    }
  }
  return (
    <div className='container'>
      <div className="row py-3 justify-content-between align-items-center">
        <div className="col-auto">
             <Link to="/" className='text-decoration-none dark-blue fw-bold'><h1 className='m-0'>FB</h1></Link>
        </div>
        <div className='col-auto col-lg-6 d-flex justify-content-between align-items-center gap-4'>

        <div className="col-10 col-lg-8 justify-content-between align-items-center gap-1 link-box">
              <Link to="/" className='text-decoration-none dark-blue fw-bold'>Home</Link>
              <Link to="/about" className='text-decoration-none dark-blue fw-bold'>Chi sono</Link>
              <Link to="/projects" className='text-decoration-none dark-blue fw-bold'>Progetti</Link>
        </div>
      
        <div className="col-2 justify-content-end gap-2 align-items-center social-box">
          <a href="https://github.com/Francesca-Barletta" target="_blank" className='text-decoration-none dark-blue fw-bold'><FaGithub/></a>
          <a href="https://www.linkedin.com/in/francesca-barletta-38577815a/" target="_blank" className='text-decoration-none dark-blue fw-bold'><FaLinkedin/></a>
        </div>
        
        <button className='my-nav-toggler' onClick={handleSidebar}>
          <FaBars className='nav-icon'/>
        </button>
      
      </div>
    </div>
  </div>
  )
}

export default Navbar