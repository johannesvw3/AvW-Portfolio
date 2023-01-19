import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      
      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>Film</h3>
          </div>
          <ul className='service_list'>
            <li>
            <BiCheck className='service_list-icon' />
            <p>Lorem, ipsum dolor sit amet consecteur elit</p>
            </li>
            <li>
            <BiCheck className='service_list-icon' />
            <p>Lorem, ipsum dolor sit amet consecteur elit</p>
            </li>
            <li>
            <BiCheck className='service_list-icon' />
            <p>Lorem, ipsum dolor sit amet consecteur elit</p>
            </li>
            <li>
            <BiCheck className='service_list-icon' />
            <p>Lorem, ipsum dolor sit amet consecteur elit</p>
            </li>
          </ul>
        </article>
        {/* Film */}

        <article className='service'>
          <div className="service_head">
            <h3>Commercials</h3>
          </div>
          <ul className='service_list'>
            <li>
            <BiCheck className='service_list-icon' />
            <p>Lorem, ipsum dolor sit amet consecteur elit</p>
            </li>
            <li>
            <BiCheck className='service_list-icon' />
            <p>Lorem, ipsum dolor sit amet consecteur elit</p>
            </li>
            <li>
            <BiCheck className='service_list-icon' />
            <p>Lorem, ipsum dolor sit amet consecteur elit</p>
            </li>
            <li>
            <BiCheck className='service_list-icon' />
            <p>Lorem, ipsum dolor sit amet consecteur elit</p>
            </li>
            <li>
            <BiCheck className='service_list-icon' />
            <p>Lorem, ipsum dolor sit amet consecteur elit</p>
            </li>
            <li>
            <BiCheck className='service_list-icon' />
            <p>Lorem, ipsum dolor sit amet consecteur elit</p>
            </li>
          </ul>
        </article>
        {/* Commercials */}

        <article className='service'>
          <div className="service_head">
            <h3>Private Project</h3>
          </div>
          <ul className='service_list'>
            <li>
            <BiCheck className='service_list-icon' />
            <p>Lorem, ipsum dolor sit amet consecteur elit</p>
            </li>
            <li>
            <BiCheck className='service_list-icon' />
            <p>Lorem, ipsum dolor sit amet consecteur elit</p>
            </li>
            <li>
            <BiCheck className='service_list-icon' />
            <p>Lorem, ipsum dolor sit amet consecteur elit</p>
            </li>
          </ul>
        </article>
        {/* Something Else */}
      </div>
      </section>
  )
}

export default services