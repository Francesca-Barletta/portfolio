import React from 'react'
import {Link} from 'react-router-dom'
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { useGlobalContext } from "../context";
import { AiFillCloseCircle } from "react-icons/ai";

const Sidebar = () => {
    const {isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <section className={`${isSidebarOpen ? 'show-sidebar' : 'hide-sidebar'}`}>
        <div className='bg-light d-flex flex-column gap-3 py-4 align-items-center'>
            <Link to="/" className='text-decoration-none dark-blue fw-bold' onClick={closeSidebar}>Home</Link>
            <Link to="/about" className='text-decoration-none dark-blue fw-bold' onClick={closeSidebar}>Chi sono</Link>
            <Link to="/projects" className='text-decoration-none dark-blue fw-bold' onClick={closeSidebar}>Progetti</Link>
            <div className="d-flex justify-content-end gap-2 align-items-center">
          <a href="https://github.com/Francesca-Barletta" target="_blank" className='text-decoration-none dark-blue fw-bold' onClick={closeSidebar}><FaGithub/></a>
          <a href="https://www.linkedin.com/in/francesca-barletta-38577815a/" target="_blank" className='text-decoration-none dark-blue fw-bold' onClick={closeSidebar}><FaLinkedin/></a>
        </div>
        <button className="my-btn btn-green" onClick={closeSidebar}>
          <AiFillCloseCircle className="nav-icon"/>
        </button>
        </div>
    </section>
  )
}

export default Sidebar