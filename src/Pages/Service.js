import React from 'react'
import { NavLink } from 'react-router-dom'
import Aos from 'aos'

// CSS
import './CSS/Service.css'

import Header from '../Main_Components/Header'
import Footer from '../Main_Components/Footer'

// Whats App Icon
import WhatsApp from '../Main_Components/WhatsApp'

// Section 2
import serS2img from '../Images/Service/service about.jpg'

// Section 3
import GetYourEyes from '../Components/Home/GetYourEyes'

// Section 4
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSuitcaseMedical, faStar, faPeopleGroup, faLeaf, faHeart, faUserTie, faUserDoctor, faHandshake } from "@fortawesome/free-solid-svg-icons"
import { strongService } from '../Data/ServiceData'

// Section 5
import { conditionService } from '../Data/ServiceData'

// Section 6
import Clients from '../Components/Home/Clients'

// Icon Map Section 4
const serviceIconMap ={
  faUser : faUser,
  faSuitcaseMedical : faSuitcaseMedical,
  faStar : faStar,
  faPeopleGroup : faPeopleGroup,
  faLeaf : faLeaf,
  faHeart : faHeart,
  faUserTie : faUserTie,
  faUserDoctor : faUserDoctor,
  faHandshake : faHandshake
}

const Service = () => {

  // Aos
  Aos.init();

  return (
    <>
      <Header />
      {/* -----------------------------------------------------------Section 1--------------------------------------------------------- */}
      <div>
          {/* Background Image */}
          <div className='ser-s1-background-img'>
            {/* Main Text */}
            <h3 className='ser-s1-text'
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
            data-aos-once="true">Services</h3>
            {/* Nav Link & para */}
            <div className='ser-s1-txt-container'
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
            data-aos-once="true">
              <NavLink className='ser-s1-navlink' to='/'>HOME &gt;</NavLink>
              <span className='ser-s1-para'>SERVICES &gt;</span>
            </div>
          </div>
      </div>

      {/* -----------------------------------------------------------Section 2--------------------------------------------------------- */}
      <div className='container-fluid ser-s2-container'>
          <div className='row'>
            {/* Column 1 */}
            <div className='col-12 col-md-6 col-lg-6 ser-s2-col1-container'
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-delay="500"
            data-aos-duration="300"
            data-aos-once="true">

              {/* Text */}
              <h3 className='ser-s2-heading1'>What We Do</h3>
              <h3 className='ser-s2-heading2'>We are ready at your door step</h3>
              {/* Paragrap 1 */}
              <p className='ser-s2-para'>"Look good, see great, with Specs Vibe."<br />Experience the future of eye care today. At Specs Vibe, we combine innovative solutions, advanced technologies, and personalized attention to transform your vision and enrich your life. Our comprehensive eye care services prioritize your unique needs, ensuring a clearer, brighter tomorrow.</p>
              
              {/* List */}
              <p className='ser-s2-para2'>Home visits may require specialized equipment, such as:</p>
              <ul className='ser-s2-list-container'>
                <li className='ser-s2-list-txt' >Portable autorefractors machine</li>
                <li className='ser-s2-list-txt'>Handheld retinoscopes</li>
                <li className='ser-s2-list-txt'>Visual acuity charts</li>
              </ul>

               {/*Paragraph 2  */}
              <p className='ser-s2-para'>Home visits can be beneficial for patients who face barriers in accessing traditional clinical settings, enhancing eye care accessibility and convenience.</p>

            </div>

            {/* Column 2 */}
            <div className='col-12 col-md-5 col-lg-5 ser-s2-img-container'>

              {/* Image  */}
              <img src={serS2img} alt='service about.jpg' className='ser-s2-image' />

            </div>
          </div>

      </div>

      {/* -----------------------------------------------------------Section 3-------------------------------------------------------- */}
      <GetYourEyes />

      {/* -----------------------------------------------------------Section 4-------------------------------------------------------- */}
      <div className='container-fluid ser-s4-container'>
        {/* Text */}
        <h3 className='ser-s2-heading1'>How We Help You Stay Strong</h3>
        <h3 className='ser-s2-heading2'>We demonstrate care for the customer in the following ways:</h3>

        <div className='row ser-s4-card-container'>
          {
            strongService.map( element =>{
              return(
                <div className='col-12 col-md-5 col-lg-3 ser-s4-card' key={element.id}
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-delay="500"
                data-aos-duration="300"
                data-aos-once="true">

                  <div className='ser-s4-icon-container'>
                    {
                      <FontAwesomeIcon className='ser-s4-icon' icon={serviceIconMap[element.icon]} />
                    }
                  </div>

                  {/* <div className='ser-s4-text-container'> */}
                    <h5 className='ser-s4-sm-heading'>{element.heading}</h5>
                    <p className='ser-s4-sm-para'>{element.paragraph}</p>
                  {/* </div> */}
                </div>
              )
            })
          }
        </div>

      </div>

      {/* -----------------------------------------------------------Section 5------------------------------------------------------- */}
      <div className='container-fluid ser-s5-container'>
        {/* Horizontal Line */}
        <div className='ser-s5-hr-line-container'>
            <hr className='ser-s5-hr-line' />
        </div>

        {/* Content */}

        {/* Heading */}
        <h3 className='ser-s2-heading1'>Terms and conditions</h3>
        <h3 className='ser-s2-heading2'>Payment & Return Policy</h3>

        <div className='row'>
          {
            conditionService.map( condition =>{
              return(
                <div className='col-12 col-md-12 col-lg-6 ser-s5-sm-container' key={condition.id}>
                  <h3 className='ser-s5-sm-heading'>{condition.heading}</h3>
                  <p className='ser-s5-sm-para'>{condition.paragraph}</p>
                </div>
              )
            })
          }

        </div>


      </div>

      {/* -----------------------------------------------------------Section 6-------------------------------------------------------- */}
      <Clients />

      {/* -----------------------------------------------------------Icon-------------------------------------------------------------- */}
      <WhatsApp />
      <Footer />
    </>
  )
}

export default Service
