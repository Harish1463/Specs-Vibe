import React from 'react'

// CSS
import './CSS/Home.css'

// AOS
import Aos from 'aos'

// Header Content
import Header from '../Main_Components/Header'
// Footer Content
import Footer from '../Main_Components/Footer'

// Banner for Home
import Banner from '../Components/Home/Banner'
// Who We Are
import WhoWeAre from '../Components/Home/WhoWeAre'
// Get Your Eyes
import GetYourEyes from '../Components/Home/GetYourEyes'
// Clients
import Clients from '../Components/Home/Clients'

// Whats App Icon
import WhatsApp from '../Main_Components/WhatsApp'

// icon img for section 5
import choosImg from '../Images/Home/file-and-folder.png'
// Slider for section 8
import Slider from 'react-slick'

// Choose Us, Services, Producs, Testimonial
import { chooseUs, homeServices, homeProducts, homeTestimonial } from '../Data/HomeData'

const Home = () => {

  // AOS
  Aos.init();

  //  icon Slider settings
  const settings = {
    dots: false,          // Hide dots
    infinite: true,       // Infinite scrolling
    speed: 250,           // Scrolling speed
    slidesToShow: 1,      // Show 1 cards at a time
    slidesToScroll: 1,    // Scroll 1 card at a time
    autoplay: true,       // Auto-scroll
    autoplaySpeed: 5000,  // Stop for 5 seconds
    pauseOnHover: false,   // Pause when hovering
    draggable: true,      // Enable dragging
    swipeToSlide: true,   // Allow swipe to slide functionality
    arrows: false,        //Removes the next and previous buttons
  };

  return (
    <>
      <Header />
      {/* -------------------------------------------------------Section 1------------------------------------------------------------- */}
      <Banner />
      {/* ------------------------------------------------------Section 2--------------------------------------------------------------- */}
      <div className='container-fluid p-0'>
        <div className='row home-s2-container'>
          {/* 1st Element */}
          <div className='col-12 col-md-3 home-s2-col-odd'
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="300"
          data-aos-once="true">
            {/* Icon */}
            <div className='d-flex justify-content-center'>
              <div className='home-s2-icon-odd'><i className="fa-solid fa-eye home-s2-icon"></i></div>
            </div>
            <div className='home-s2-txt-container'>
              <h3 className='home-s2-heading'>Qualified Optometrist</h3>
              <p className='home-s2-para'>As dedicated optometrists, we provide comprehensive eye care services to ensure your vision is clear and healthy.</p>
            </div>
          </div>
          {/* 2nd Element */}
          <div className='col-12 col-md-3 home-s2-col-even'
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-delay="200"
          data-aos-duration="300"
          data-aos-once="true">
            {/* Icon */}
            <div className='d-flex justify-content-center'>
              <div className='home-s2-icon-even'><i className="fa-solid fa-file home-s2-icon"></i></div>
            </div>
            <div className='home-s2-txt-container'>
              <h3 className='home-s2-heading'>Personalized Care</h3>
              <p className='home-s2-para'>Our experienced optometrists take a personalized approach to your eye care, listening to your concerns and addressing your unique needs to ensure optimal vision and eye health.</p>
            </div>
          </div>
          {/* 3rd Element */}
          <div className='col-12 col-md-3 home-s2-col-odd'
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-delay="400"
          data-aos-duration="300"
          data-aos-once="true">
            {/* Icon */}
            <div className='d-flex justify-content-center'>
              <div className='home-s2-icon-odd'><i className="fa-solid fa-book home-s2-icon"></i></div>
            </div>
            <div className='home-s2-txt-container'>
              <h3 className='home-s2-heading'>Educating Patients</h3>
              <p className='home-s2-para'>Taking the time to explain conditions, treatments, and options is a crucial aspect of education in various settings, including healthcare and effective education empowers individuals</p>
            </div>
          </div>
          {/* 4th Element */}
          <div className='col-12 col-md-3 home-s2-col-even'
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-delay="600"
          data-aos-duration="300"
          data-aos-once="true">
            {/* Icon */}
            <div className='d-flex justify-content-center'>
              <div className='home-s2-icon-even'><i className="fa-solid fa-house home-s2-icon"></i></div>
            </div>
            <div className='home-s2-txt-container'>
              <h3 className='home-s2-heading'>Home Services</h3>
              <p className='home-s2-para'>Get a comprehensive eye checkup in the comfort of your own home. Our frame trial service brings the latest styles and trends right to your home.</p>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------------------------------------Section 3--------------------------------------------------------------- */}
      <WhoWeAre />
      {/* --------------------------------------------------------Section 4------------------------------------------------------------- */}
      <GetYourEyes />
      {/* --------------------------------------------------------section 5------------------------------------------------------------ */}
      <div className='container-fluid home-s5-container'>
        <div>
          <h5 className='home-s5-heading1'>Why Choose Us</h5>
          <h2 className='home-s5-heading2'>Few Reasons Why You Should Choose Us.</h2>
          <p className='home-s5-para'>We believe that providing exceptional customer service is our main strength. We take pride in providing outstanding services to our customers. We know that our customers are important for us and hence we do not leave any stone unturned in helping, guiding and providing the best possible solutions. A home visit with an optometrist typically involves the optometrist traveling to a patient's home to provide eye care services.<br />This may be ideal for:</p>
        </div>
        <div className='row'>
          {
            chooseUs.map( element => {
              return(
                <div key={element.id} className='col-12 col-lg-6 home-s5-txt-container'>
                  {/* Icon */}
                  <div className='home-s5-icon-container'>
                    <img className='home-s5-icon' src={choosImg} alt='file-and-folder.png'/>
                  </div>
                  {/* Text */}
                  <div className='home-s5-sm-container'>
                    {/* Heading */}
                    <h5 className='home-s5-sm-heading'>{element.heading}</h5>
                    {/* Paragraph */}
                    <p className='home-s5-para'>{element.paragraph}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>   
      {/* ---------------------------------------------------------Section 6----------------------------------------------------------- */}
      <div className='container-fluid home-s6-container'>
        <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="300"
        data-aos-once="true">
          <h5 className='home-s5-heading1'>Services</h5>
          <h2 className='home-s5-heading2'>Specs vibe Services</h2>
          <p className='home-s5-para'>In today's fast-paced world, quality vision care demands innovative, efficient, and patient-centered solutions. At Specs Vibe, we specialize in crafting personalized eye care experiences that transform lives by improving vision. Leveraging advanced technologies and techniques, our comprehensive eye care services ensure exceptional patient care and unparalleled results.</p>
        </div>
        <div className='row home-s6-card-container'>
          {
            homeServices.map( data =>{
              return(
                <div className='col-11 col-md-5 col-lg-3 home-s6-card' key={data.id}
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-delay="500"
                data-aos-duration="300"
                data-aos-once="true">
                  <h5 className='home-s6-card-heading'>{data.heading}</h5>
                  <p className='home-s6-card-para'>{data.paragraph}</p>
                </div>
              )
            })
          }

        </div>
      </div>
      {/* ---------------------------------------------------------Section 7---------------------------------------------------------- */}
      <div className='container-fluid home-s7-container'>
        <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="300"
        data-aos-once="true">
          <h5 className='home-s5-heading1'>Products</h5>
          <h2 className='home-s5-heading2'>Our Brand Products</h2>
          <p className='home-s5-para'>At Specs Vibe, we're dedicated to delivering exceptional eye care. Our advanced lens materials ensure superior optical quality, while personalized prescriptions tailored to your unique needs guarantee optimal vision correction. With a wide range of stylish frames to suit your taste, you'll find the perfect match for your personality. Our expert optometrists are dedicated to your eye health, using comprehensive eye exams and cutting-edge technology to detect even the smallest details.</p>
        </div>
        {/* Images */}
        <div className='row'>
          {
            homeProducts.map( record =>{
              return(
                <div className='col-12 col-md-6 col-lg-3' key={record.id}
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-delay="500"
                data-aos-duration="300"
                data-aos-once="true">
                  <div className='home-s7-img-container'>
                    <img className='home-s7-img' src={record.image} alt='Home-Product.png' />
                  </div>
                  <h3 className='home-s7-heading'>{record.heading}</h3>
                  <h4 className='home-s7-caption'>{record.caption}</h4>
                </div>
              )
            })
          }
        </div>
      </div>
      {/* ----------------------------------------------------------Section 8---------------------------------------------------------- */}
      <div className='container-fluid home-s8-container'>
        <div 
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="300"
        data-aos-once="true">
          <h5 className='home-s5-heading1'>Testimonials</h5>
          <h2 className='home-s5-heading2'>Our Customers Says About Us</h2>
          <p className='home-s5-para'>Our Customers Love Their Experience With Specs Vibe, Expert Care Transforming Vision, Transforming Lives</p>
        </div>
        {/* Slider */}
        <div className='row home-s8-slider'>
          <div className='col-md-10'>
            <Slider {...settings}>
              {
                homeTestimonial.map( info =>{
                  return(
                    <div className='home-s8-txt-container' key={info.id}
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-delay="500"
                    data-aos-duration="300"
                    data-aos-once="true">
                      <p className='home-s8-quote' ><i className="fa-solid fa-quote-left home-s8-icon"></i>{info.quote}<i className="fa-solid fa-quote-right home-s8-icon"></i></p>
                      <h3 className='home-s8-name' >{info.name}</h3>
                      <h4 className='home-s8-place' >{info.place}</h4>
                    </div>
                  )
                })
              }
            </Slider>
          </div>
        </div>
      </div>
      {/* -----------------------------------------------------------Section 9--------------------------------------------------------- */}
      <Clients /> 
      {/* -----------------------------------------------------------Icon-------------------------------------------------------------- */}
      <WhatsApp />
      <Footer />
    </>
  )
}

export default Home
