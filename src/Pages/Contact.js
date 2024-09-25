import React from 'react'
import { NavLink } from 'react-router-dom'
import Aos from 'aos'

// CSS
import './CSS/Contact.css'

import Header from '../Main_Components/Header'
import Footer from '../Main_Components/Footer'

// Whats App Icon
import WhatsApp from '../Main_Components/WhatsApp'

const Contact = () => {

  // AOS
  Aos.init();

  return (
    <>
      <Header />
      {/* -----------------------------------------------------------Section 1--------------------------------------------------------- */}
      <div>
          {/* Background Image */}
          <div className='con-s1-background-img'>
            {/* Main Text */}
            <h3 className='con-s1-text'
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
            data-aos-once="true">Contact Us</h3>
            {/* Nav Link & para */}
            <div className='con-s1-txt-container'
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
            data-aos-once="true">
              <NavLink className='con-s1-navlink' to='/'>HOME &gt;</NavLink>
              <span className='con-s1-para'>CONTACT &gt;</span>
            </div>
          </div>
      </div>

      {/* -----------------------------------------------------------Section 2--------------------------------------------------------- */}

      <div className='container-fluid con-s2-container'>
        <div className='row'>
          {/* Column 1 */}
          <div className='col-12 col-md-12 col-lg-6 con-s2-col1-container'>
            <h5 className='con-s2-heading1'>Contact Us</h5>
            <h2 className='con-s2-heading2'>Feel Free To Contact Us</h2>

            {/* Location */}
            <div className='d-flex mb-1'>
              {/* Icon */}
              <div className='pt-3'>
                <i className="fa-solid fa-location-dot con-s2-icon"></i>
              </div>

              {/* Text */}
              <div>
                <h5 className='con-s2-sm-heading'>Our Office</h5>
                <p className='con-s2-sm-para'>No: 1092, TNHB, Sithalapakkam, Chennai-126.</p>
              </div>
            </div>

            {/* Mail */}
            <div className='d-flex mb-1'>
              {/* Icon */}
              <div className='pt-3'>
                <i className="fa-solid fa-envelope con-s2-icon"></i>
              </div>

              {/* Text */}
              <div>
                <h5 className='con-s2-sm-heading'>Email Us</h5>
                <p className='con-s2-sm-para'>specsvibe@gmail.com</p>
              </div>
            </div>

            {/* Mobile */}
            <div className='d-flex mb-1'>
              {/* Icon */}
              <div className='pt-3'>
                <i className="fa-solid fa-mobile con-s2-icon"></i>
              </div>

              {/* Text */}
              <div>
                <h5 className='con-s2-sm-heading'>Call Us</h5>
                <p className='con-s2-sm-para'>+91 9962321727 / +91 9940311407</p>
              </div>
            </div>

            <p className='con-s2-para'>Home trials are available only in Chennai</p>
            
          </div>

          {/* Column 2 */}
          <div className='col-12 col-md-12 col-lg-6'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2025537855056!2d80.17198247454543!3d12.894693216560858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f131!3m3!1m2!1s0x3a5259002964d851%3A0xa6e18d0208c7b32a!2sTNHB%20Sithalapakkam!5e0!3m2!1sen!2sin!4v1724858191899!5m2!1sen!2sin" title='Specs Vibe Map' width="100%" height="505" style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-100 h-250 con-s2-map"></iframe>
          </div>
        </div>

      </div>


        {/* -----------------------------------------------------------Icon-------------------------------------------------------------- */}
        <WhatsApp />
      <Footer />
    </>
  )
}

export default Contact
