import React from 'react'
import { NavLink } from 'react-router-dom'

// CSS
import './Banner.css'

// Infinite Slider
import Slider from 'react-slick'

// Banner JSON
import {HomeBanner} from '../../Data/HomeData'

const Banner = () => {
    
    //  icon Slider settings
    const settings = {
        dots: false,          // Hide dots
        infinite: true,       // Infinite scrolling
        speed: 0,           // Scrolling speed
        slidesToShow: 1,      // Show 6 cards at a time
        slidesToScroll: 1,    // Scroll 1 card at a time
        autoplay: true,       // Auto-scroll
        autoplaySpeed: 6000,  // Stop for 2 seconds
        pauseOnHover: false,   // Pause when hovering
        draggable: true,      // Enable dragging
        swipeToSlide: true,   // Allow swipe to slide functionality
        arrows: false,        //Removes the next and previous buttons
    };

  return (
    <>
        {/* Component */}
        <div>
            <Slider {...settings} >
                {
                    HomeBanner.map( content => {
                        return(
                            <div className='home-s1-container' key={content.id}>
                                <div>
                                    {/* Banner Image */}
                                    <div className='home-img-container' style={{ backgroundImage: `linear-gradient(rgba(9, 30, 62, 0.85), rgba(9, 30, 62, 0.85)), url(${content.image})`}} ></div>
                                    {/* Text inside Banner */}
                                    <div  className='home-txt-container'>
                                        <h1 className='home-banner-heading1'>{content.heading1}</h1>
                                        <h1 className='home-banner-heading2'>{content.heading2}</h1>
                                        <p className='home-banner-para'>{content.paragraph}</p>
                                        {/* Button */}
                                        <div className='home-banner-btn-container'>
                                            <NavLink className='home-banner-btn' to="/Service">View our works</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </Slider>
        </div>
    </>
  )
}

export default Banner
