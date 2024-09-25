import React from 'react'
import { NavLink } from 'react-router-dom'

// CSS
import './CSS/Product.css'

// AOS
import Aos from 'aos'

// Product Lens For Section 2
import { lensProduct } from '../Data/ProductData'
import proS2Img from '../Images/Product/contact-lens.png'

// Product What we Are for Section 3
import { whatProduct } from '../Data/ProductData'
import proS3Img from '../Images/Product/glasses-for-sun-protection.png'

// Section 4
import GetYourEyes from '../Components/Home/GetYourEyes'

// Section 5
import { ourProducts } from '../Data/ProductData'

// Section 7
import Clients from '../Components/Home/Clients'

import Header from '../Main_Components/Header'
import Footer from '../Main_Components/Footer'

// Whats App Icon
import WhatsApp from '../Main_Components/WhatsApp'

const Product = () => {

  // AOS
  Aos.init();

  return (
    <>
      <Header />
        {/* -----------------------------------------------------------Section 1--------------------------------------------------------- */}
        <div>
          {/* Background Image */}
          <div className='pro-s1-background-img'>
            {/* Main Text */}
            <h3 className='pro-s1-text'
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
            data-aos-once="true">Products</h3>
            {/* Nav Link & para */}
            <div className='pro-s1-txt-container'
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
            data-aos-once="true">
              <NavLink className='pro-s1-navlink' to='/'>HOME &gt;</NavLink>
              <span className='pro-s1-para'>PRODUCTS &gt;</span>
            </div>
          </div>
        </div>

        {/* -----------------------------------------------------------Section 2--------------------------------------------------------- */}
        <div className='container-fluid pro-s2-container'>
          <h5 className='pro-s2-heading1'>Optical Lenses</h5>
          <h2 className='pro-s2-heading2'>Help You See Better</h2>
          <p className='pro-s2-para'>Optical lenses are transparent devices that refract light to correct vision problems, magnify objects, or redirect light. They come in various types each designed to address specific vision needs and improve visual clarity.</p>

          {/* Grid */}
          <div className='pro-s2-grid'>
            {
              lensProduct.map( data =>{
                return(
                  <div className='pro-s2-child' key={data.id}>
                    {/* Image */}
                    <div className='pro-s2-circle-container'>
                      <div className='pro-s2-circle'></div>
                      <div className='pro-img-container'>
                        <img className='pro-s2-img' src={proS2Img} alt='contact-lens.png' />
                      </div>
                    </div>

                    {/* Content */}
                    <div className='pro-s2-sm-container'>
                      <h4 className='pro-s2-sm-heading'>{data.heading}</h4>
                      <p className='pro-s2-para'>{data.paragraph}</p>
                    </div>
                  </div>
                )
              })
            }

          </div>
        </div>

        {/* -----------------------------------------------------------Section 3--------------------------------------------------------- */}
        <div className='container-fluid pro-s3-container'>
          <h5 className='pro-s2-heading1'>What we have</h5>
          <h2 className='pro-s2-heading2'>Here are some catchy options for specs frames:</h2>
          <p className='pro-s2-para'>A specs frame, or eyeglass frame, is the part of glasses that holds the lenses in front of the eyes. It's the basic structure of the glasses, and is often made from metal or acetate. The frame is made up of several components, including the bridge, hinges, temples, nose pads, and eyewire.</p>

          {/* Grid */}
          <div className='row pro-s3-grid'>
            {
              whatProduct.map( component =>{
                return(
                  <div className='col-12 col-md-6 col-lg-4 pro-s3-child' key={component.id}>
                    {/* Image */}
                    <div className='pro-s3-img-container'>
                      <img className='pro-s3-img' src={proS3Img} alt='glasses-for-sun-protection.png' />
                    </div>

                    {/* Content */}
                    <div>
                      <h5 className='pro-s3-sm-heading'>{component.heading}</h5>
                      <p className='pro-s2-para'>{component.paragraph}</p>
                    </div>
                  </div>
                )
              })
            }

          </div>

        </div>

        {/* ------------------------------------------------------------Section 4------------------------------------------------------- */}
        <GetYourEyes />

        {/* -----------------------------------------------------------Section 5--------------------------------------------------------- */}
        <div className='container-fluid pro-s5-container'>
          <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="300"
          data-aos-once="true">
            <h5 className='pro-s2-heading1'>Products</h5>
            <h2 className='pro-s2-heading2'>Our Brand Products</h2>
            <p className='pro-s2-para'>At Specs Vibe, we're dedicated to delivering exceptional eye care. Our advanced lens materials ensure superior optical quality, while personalized prescriptions tailored to your unique needs guarantee optimal vision correction. With a wide range of stylish frames to suit your taste, you'll find the perfect match for your personality. Our expert optometrists are dedicated to your eye health, using comprehensive eye exams and cutting-edge technology to detect even the smallest details.</p>
          </div>

          <div className='row pro-s5-child-container'>
            {
              ourProducts.map( product =>{
                return(
                  <div className='col-12 col-md-6 col-lg-4 pro-s5-child' key={product.id}
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-delay="500"
                  data-aos-duration="300"
                  data-aos-once="true">

                      {/* Image */}
                      <div className='pro-s5-img-container'>
                        <img className='pro-s5-img' src={product.image} alt='Our Product.png' />
                      </div>

                      {/* Content */}
                        <h4 className='pro-s5-sm-heading'>{product.heading}</h4>
                        <h5 className='pro-s5-sm-para'>{product.caption}</h5>
                    </div>
                )
              })
            }

          </div>
        </div>

        {/* -----------------------------------------------------------Section 6-------------------------------------------------------- */}
        <div className='container-fluid pro-s6-container'>
          {/* Horizontal Line */}
          <div className='pro-s6-hr-line-container'>
            <hr className='pro-s6-hr-line' />
          </div>

          {/* Content */}
          <div className='pro-s6-txt-container'>
            <h5 className='pro-s2-heading1'>Terms and conditions</h5>
            <h2 className='pro-s2-heading2'>Delivery Policy</h2>
            
            {/* Lists */}
            <ul className='pro-s6-list'>
              <li>Glasses and sunglasses (without prescription lenses): 2 to 5 working days.</li>
              <li>Glasses and sunglasses (with prescription lenses): 5 to 10 working days.</li>
              <li>Contact Lenses: 1 to 2 working days.</li>
            </ul>
          </div>
        </div>

        {/* ------------------------------------------------------------Section 7------------------------------------------------------- */}
        <Clients />

        {/* -----------------------------------------------------------Icon-------------------------------------------------------------- */}
        <WhatsApp />
      <Footer />
    </>
  )
}

export default Product
