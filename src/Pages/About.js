import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

// CSS
import './CSS/About.css'

// AOS
import Aos from 'aos'

import Header from '../Main_Components/Header'
import Footer from '../Main_Components/Footer'

// Whats App Icon
import WhatsApp from '../Main_Components/WhatsApp'

// -----------------------------------------------------------------Section 2----------------------------------------------------------
import ScrollTrigger from 'react-scroll-trigger'
import CountUp from 'react-countup'

// -----------------------------------------------------------------Section 3----------------------------------------------------------
import GetYourEyes from '../Components/Home/GetYourEyes'

// -----------------------------------------------------------------Section 4----------------------------------------------------------
import WhoWeAre from '../Components/Home/WhoWeAre'

// -----------------------------------------------------------------Section 5-----------------------------------------------------------
import { abtStrong } from '../Data/AboutData'

// -----------------------------------------------------------------Section 6-----------------------------------------------------------
import Clients from '../Components/Home/Clients'

const About = () => {

  // AOS
  Aos.init();

  // useState for counter in section 2
  const [counterOn, setCounterOn] = useState(false)

  return (
    <>
      <Header />
        {/* -----------------------------------------------------------Section 1--------------------------------------------------------- */}
        <div>
          {/* Background Image */}
          <div className='abt-s1-background-img'>
            {/* Main Text */}
            <h3 className='abt-s1-text'
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
            data-aos-once="true">About Us</h3>
            {/* Nav Link & para */}
            <div className='abt-s1-txt-container'
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
            data-aos-once="true">
              <NavLink className='abt-s1-navlink' to='/'>HOME &gt;</NavLink>
              <span className='abt-s1-para'>ABOUT US &gt;</span>
            </div>
          </div>
        </div>
        {/* -----------------------------------------------------------Section 2--------------------------------------------------------- */}
        <div className='container-fluid abt-s2-container'>
          <div className='row'>
            {/* Column 1 */}
            <div className='col-12 col-lg-6 abt-s2-col1-container'>

              {/* Text */}
              <h3 className='abt-s2-heading1'>Anbazhagan.R</h3>
              <h3 className='abt-s2-heading2'>Bachelor of Optometry (B.Optom.)</h3>
              {/* Paragrap 1 */}
              <p className='abt-s2-para'>An optometrist is a healthcare professional who specializes in the diagnosis and treatment of disorders related to the eye and visual system. They are trained to:</p>
              
              {/* List */}
              <ul className='abt-s2-list-container'>
                <li className='abt-s2-list-txt' >Conduct eye exams and vision tests.</li>
                <li className='abt-s2-list-txt'>Prescribe glasses, contact lenses, and medications.</li>
                <li className='abt-s2-list-txt'>Diagnose and manage eye diseases (e.g., glaucoma, cataracts).</li>
                <li className='abt-s2-list-txt'>Provide pre and post-operative care for eye surgeries.</li>
                <li className='abt-s2-list-txt'>Offer advice on eye health and vision correction.</li>
              </ul>

               {/*Paragraph 2  */}
              <p className='abt-s2-para'>Optometrists may work in collaboration with other healthcare professionals, such as primary care physicians or social workers, to ensure comprehensive care during home visits. Home visits can be beneficial for patients who face barriers in accessing traditional clinical settings, enhancing eye care accessibility and convenience.</p>

            </div>

            {/* Column 2 counter */}
            <div className='col-12 col-lg-6'>
              <ScrollTrigger className='row abt-s2-col2-container' onEnter={()=> setCounterOn(true)} onExit={()=>setCounterOn(true)}>

                {/* Experience */}
                <div className='col-12 col-md-6 col-lg-6 '>
                  <div className='abt-s2-count-container'>
                    <div>
                      <h2 className='abt-s2-count-num'>{counterOn && <CountUp start={0} end={9} duration={5} delay={0.5}/>}+</h2>
                    </div>
                    <span className='abt-s2-count-txt'>Years of Experience</span>
                  </div>
                </div>

                {/* Customer */}
                <div className='col-12 col-md-6 col-lg-6 '>
                  <div className='abt-s2-count-container'>
                    <div>
                      <h2 className='abt-s2-count-num'>{counterOn && <CountUp start={0} end={100} duration={5} delay={0.5}/>}+</h2>
                    </div>
                    <span className='abt-s2-count-txt'>Happy Customers</span>
                    
                  </div>
                </div>

                {/* Brands */}
                <div className='col-12 col-md-6 col-lg-6'>
                  <div className='abt-s2-count-container'>
                    <div>
                      <h2 className='abt-s2-count-num'>{counterOn && <CountUp start={0} end={8} duration={5} delay={0.5}/>}+</h2>
                    </div>
                    <span className='abt-s2-count-txt'>Number of Brands</span>
                  </div>
                </div>

                {/* Frames */}
                <div className='col-12 col-md-6 col-lg-6'>
                  <div className='abt-s2-count-container'>
                    <div>
                      <h2 className='abt-s2-count-num'>{counterOn && <CountUp start={0} end={12} duration={5} delay={0.5}/>}+</h2>
                    </div>
                    <span className='abt-s2-count-txt'>Type of Frames</span>
                  </div>
                </div>

              </ScrollTrigger>
              

            </div>
          </div>

        </div>
        {/* -----------------------------------------------------------Section 3--------------------------------------------------------- */}
        <GetYourEyes />

        {/* -----------------------------------------------------------Section 4-------------------------------------------------------- */}
        <WhoWeAre />

        {/* -----------------------------------------------------------Section 5------------------------------------------------------- */}
        <div className='container-fluid abt-s5-container'>
          <h5 className='abt-s5-heading1'>How We Help You Stay Strong</h5>
          <h2 className='abt-s5-heading2'>Specs vibe works in various settings, including:</h2>

          {/* Cards */}
          <div className='row'>
            {
              abtStrong.map( card =>{
                return(
                  <div key={card.id} className='col-12 col-md-6 col-lg-3 abt-s5-card-container'>
                    <div className='abt-s5-img-container'>
                      <img className='abt-s5-img' src={card.image} alt='About-Strong.png' />
                      <div className='abt-s5-card-hover'>
                        <div>{card.id}</div>
                      </div>
                    </div>
                    <div className='abt-s5-card-txt-container'>
                      <h5 className='abt-s5-caption'>{card.caption}</h5>
                      <p className='abt-s5-para'>{card.paragraph}</p>
                    </div>
                  </div>
                )
              })
            }

          </div>
        </div>


        {/* -----------------------------------------------------------Section 6------------------------------------------------------- */}
        <Clients />

        {/* -----------------------------------------------------------Icon-------------------------------------------------------------- */}
        <WhatsApp />
      <Footer />
    </>
  )
}

export default About
