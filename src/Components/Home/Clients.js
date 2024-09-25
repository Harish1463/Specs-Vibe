import React from 'react'

// Slider
import Slider from 'react-slick'

// CSS
import './Clients.css'

// Big Clients
import { bigClients } from '../../Data/HomeData'

const Clients = () => {

  // Slider settings
  const settings = {
    dots: false,          // Hide dots
    infinite: true,       // Infinite scrolling
    speed: 1500,           // Scrolling speed
    slidesToShow: 5,      // Show 5 cards at a time
    slidesToScroll: 1,    // Scroll 1 card at a time
    autoplay: true,       // Auto-scroll
    autoplaySpeed: 2000,  // Stop for 2 seconds
    pauseOnHover: false,   // Pause when hovering
    draggable: true,      // Enable dragging
    swipeToSlide: true,   // Allow swipe to slide functionality
    arrows: false,        //Removes the next and previous buttons
    responsive: 
    [
      {
        breakpoint: 992,
        settings: 
        {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: 
        {
          slidesToShow: 2
        }
      }
    ]
  };

  return (
    <>
        <div className='container-fluid client-container'>
            <h5 className='client-heading1'>Our Trusted Big Clients</h5>
            <h2 className='client-heading2'>We provide all kinds of branded lenses and frames</h2>
            <div className='row client-slider-container'>
                <div className='col-10 col-md-9 col-lg-11'>
                    <Slider {...settings}>
                        {
                            bigClients.map( record =>{
                                return(
                                    <div key={record.id}>
                                        <div className='client-img-container'>
                                            <img className='client-img' src={record.image} alt='brand.png' />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>
    </>
  )
}

export default Clients
