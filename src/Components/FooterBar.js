import React from 'react'
import { NavLink } from 'react-router-dom'

// CSS
import './FooterBar.css'

// Footer Image
import FooterImg from '../Images/Specs-Vibe-logo.png'

const FooterBar = () => {
  return (
    <>
      <div className='container-fluid foot-container'>
        {/* 1st Row */}
        <div className='row foot-r1-container'>
            {/* 1st Column */}
            <div className='col-12 col-md-8 col-lg-4 foot-r1-c1-tabview'>
                <div className='foot-r1-c1'>
                    <NavLink to='/'><img className='foot-c1-img' src={FooterImg} alt='Specs-Vibe-logo.png'/></NavLink>
                    <p className='foot-c1-para'>Specsvibe offering a one-stop-shop for patients' eye care and optical needs at your home.</p>
                </div>
            </div>
            
            {/* 2nd Column */}
            <div className='col-12 col-md-5 col-lg-2 foot-r1-c2'>
                
                <ul className="">
                    <h2 className='foot-heading'>Quick Links</h2>
                        <li className="foot-c2-link">
                            <NavLink className={({isActive})=>(isActive ? "foot-c2-link-txt foot-c2-link-txt-active" : "foot-c2-link-txt")} to="/" aria-current="page" >Home</NavLink>
                        </li>
                        <li className="foot-c2-link">
                            <NavLink className={({isActive})=>(isActive ? "foot-c2-link-txt foot-c2-link-txt-active" : "foot-c2-link-txt")} to="/About" aria-current="page" >About Us</NavLink>
                        </li>
                        <li className="foot-c2-link">
                            <NavLink className={({isActive})=>(isActive ? "foot-c2-link-txt foot-c2-link-txt-active" : "foot-c2-link-txt")} to="/Product" aria-current="page" >Products</NavLink>
                        </li>
                        <li className="foot-c2-link">
                            <NavLink className={({isActive})=>(isActive ? "foot-c2-link-txt foot-c2-link-txt-active" : "foot-c2-link-txt")} to="/Service" aria-current="page" >Services</NavLink>
                        </li>
                        <li className="foot-c2-link">
                            <NavLink className={({isActive})=>(isActive ? "foot-c2-link-txt foot-c2-link-txt-active" : "foot-c2-link-txt")} to="/Contact" aria-current="page" >Contact Us</NavLink>
                        </li>
                </ul>

            </div>
            {/* 3rd Column */}
            <div className='col-12 col-md-6 col-lg-3 foot-r1-c3'>
                
                <ul className="foot-c3-link-container">
                    <h2 className='foot-heading'>Get In Touch</h2>
                        <li className="foot-c3-link">
                            <div><i className="fa-solid fa-location-dot foot-c3-icon"></i></div><span className='foot-c3-link-txt'>No:1092,TNHB,Sithalapakkam,Chennai-126.</span>
                        </li>
                        <li className="foot-c3-link">
                            <div><i className="fa-solid fa-envelope foot-c3-icon"></i></div><a className='foot-c3-link-txt foot-c3-link-txt-hover' href='mailto: specsvibe@gmail.com'>specsvibe@gmail.com</a>
                        </li>
                        <li className="foot-c3-link">
                            <div><i className="fa-solid fa-phone foot-c3-icon"></i></div><span className='foot-c3-link-txt'>+919962321727 / +919940311407</span>
                        </li>
                </ul>

            </div>
        </div>
        {/* 2nd Row */}
        <div className='row foot-r2'>
            <span className='foot-r2-copyright'>&copy; <NavLink to="/" className='foot-r2-website'>Specsvibe</NavLink>. All Rights Reserved.</span>
            <p className='foot-r2-copyright'>Created by <a className='foot-r2-hubsem' href='https://hubsem.com/'>Hubsem</a></p>
        </div>
      </div>
    </>
  )
}

export default FooterBar
