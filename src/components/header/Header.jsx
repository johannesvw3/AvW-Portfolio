import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/adrian-full.jpg'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header>
        <div className="container header_container">
          <h1 className='adrian_front-name'>Adrian van Woerkom</h1>
          <h3 className="text-light">Composer & Producer</h3>
          <CTA/>
          <HeaderSocials />

          <div className="me">
            <img className='adrian_full' src={ME} alt="me" />
          </div>
        
        <a href="#contact" className='scroll_down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default header