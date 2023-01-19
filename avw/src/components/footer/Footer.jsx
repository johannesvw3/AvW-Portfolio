import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Adrian van Woerkom Productions</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#Services">Services</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>
        <li><a href="#Testimonials">Testimonials</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://instagram.com"><FaInstagram /></a>
        <a href="https://linkedin.com"><BsLinkedin /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Adrian van Woerkom Productions. All rights reserved. </small>
      </div>
    </footer>
  )
}

export default footer