import React from 'react'
import Header from './components/header/Header'
import Menu from './components/menu/Menu'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Images from './components/Images/Images'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <>
        <Header />
        <Menu />
        <Nav />
        <About />
        <Portfolio />
        <Images />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
    </>
  )
}

export default App