import React from 'react'
import './menu.css'
import AVW_LOGO from '../../assets/avw-logo.png'
import CTA from './CTA'

const menu = () => {
  return (
    <div className='container menubar_container'>
        <div className="menubar">
            <a className='menubar_link' href="#">Home</a>
            <a className='menubar_link' href="#about">About</a>
            <a className='menubar_link' href="https://adrianvanwoerkom.com/news.html">News</a>
            <a className='menubar_link' href="https://adrianvanwoerkom.com/listen.html">Listen</a>
            <a href="#"><img className='avw-logo' src={AVW_LOGO} alt="avw logo" /></a>
            <a className='menubar_link' href="https://adrianvanwoerkom.com/film.html">Film</a>
            <a className='menubar_link' href="https://adrianvanwoerkom.com/commercials.html">Commercials</a>
            <a className='menubar_link' href="https://adrianvanwoerkom.com/media.html">Media</a>
            <a className='menubar_link' href="#contact">Contact</a>
        </div>
        <CTA />
    </div>
  )
}

export default menu