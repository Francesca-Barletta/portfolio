import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import { FaPhoneAlt, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-dark-blue p-4 justify-self-end'>
        <div>
          <ul className='list-unstyled yellow'>

          <li className='d-flex align-items-center gap-1'><TfiEmail/> barlettafrancesca88@gmail.com</li>
          <li className='d-flex align-items-center gap-1'><FaPhoneAlt/> 3299510537</li>
          <li className='d-flex align-items-center gap-1'><FaLinkedin/> <a href="https://www.linkedin.com/in/francesca-barletta-38577815a/" className='text-decoration-none yellow' target="_blank">Il mio profilo Linkedin</a></li>
          <li><p><FaMapMarkerAlt/> Civitavecchia (RM)</p></li>
          </ul>
        </div>
        <h5 className='yellow my-5 text-center'>Powered with &hearts;  by Francesca Barletta </h5>
    </div>
  )
}

export default Footer