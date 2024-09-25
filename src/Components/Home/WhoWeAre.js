import React from 'react'
import { NavLink } from 'react-router-dom'
// CSS
import './WhoWeAre.css'

// AOS
import Aos from "aos";

// Image
import WhoImg from '../../Images/Home/about2.jpg'


const WhoWeAre = () => {

  // AOS
  Aos.init();

  return (
    <>
      <div className='container-fluid who-container'>
        {/* Vertical Text */}
        <div className='who-vertical-container'>
            <h5 className='who-vertical-txt'>ABOUT SEPCS VIBE</h5>
        </div>
        <div className='row who-holder'>
            {/* Column 1 */}
            <div className='col-12 col-md-6 who-col1' 
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
            data-aos-once="true">
                <div>
                    <h5 className='who-heading1'>Who We Are</h5>
                    <h2 className='who-heading2'>Meet Specs Vibe for Personalized Eye Tests</h2>
                    
                    <p className='who-para'>"See Clearly, Live Fully"<br/>At Specs Vibe, we're committed to being your trusted eye care partner for life. We invest in our expert optometrists, latest technology, expert training, and personalized care to ensure you receive the best possible vision solutions. Take the first step towards clearer vision and a brighter future. Discover how Specs Vibe can transform your vision with cutting-edge eye care solutions. Contact us today to schedule your eye exam and discover how we can help you see your best!</p>
                    <p className='who-para'>Get the latest frames and trends delivered to your door with our Frame Trial Service. Try, compare, and find your perfect match in the comfort of your own home!</p>
                    <div className='who-btn'>
                        <NavLink className='who-btn-txt' to='/About'>Learn More About Us</NavLink>
                    </div>
                </div>
            </div>

            {/* Column 2 */}
            <div className='col-12 col-md-6 who-img-container'>
                <img className='who-img' src={WhoImg} alt='about2.jpg' />
            </div>
        </div>
      </div>
    </>
  )
}

export default WhoWeAre
