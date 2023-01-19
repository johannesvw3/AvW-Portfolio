import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_heozgkb', 'template_kwe48gr', form.current, 'mUp5DWHhEOwfYBIUo')

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact ME</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>adrianvwj@gmail.com</h5>
            <a href="mailto:adrianvwj@gmail.com">Send a Message</a>
          </article>
          <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon' />
            <h4>Messenger</h4>
            <h5>Adrian van Woerkom</h5>
            <a href="https://m.me/adrian.vanwoerkom" target='_blank'>Send a Message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon' />
            <h4>WhatsApp</h4>
            <h5>+58 412.6238636</h5>
            <a href="https://api.whatsapp.com/send?phone=+4126238636" target='_blank'>Send a Message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Enter Full Name' required />
          <input type="email" name='email' placeholder='Enter Your Email' required />
          <input type="text" name='subject' placeholder='Enter Email Subject Title' required />
          <textarea name="message"  rows="7" placeholder='Type Your Message...' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact