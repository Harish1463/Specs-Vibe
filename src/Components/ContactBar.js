import React from 'react'
// NavLink from Router
import { NavLink, Link } from 'react-router-dom'

// CSS
import './ContactBar.css'

// Specs Vibe Logo
import ContactBarLogo from '../Images/Specs-Vibe-logo.png'

const ContactBar = () => {
  return (
    <>
        <div className='container-fluid contactbar-container'>
            <div className='row contactbar-container-row'>
                {/* Specs Vibe Logo */}
                <div className='col-6 col-lg-3 d-flex align-items-center contactbar-logo-container'>
                    <NavLink to='/'><img className='contactbar-logo' src={ContactBarLogo} alt='Specs-Vibe-logo.png'/></NavLink>
                </div>
                {/* Address */}
                <div className='col-lg-3 d-none d-lg-block'>
                    <div className='contactbar-info-container'>
                        <div>
                            <i className="fa-solid fa-map contactbar-icon"></i>
                        </div>
                        <Link className='contactbar-info' to='/Contact' >No: 1092, TNHB, Sithalapakkam, Chennai-126.</Link>
                    </div>
                </div>
                

                {/* For TAb view */}
                <div className='col-6 col-lg-6 d-none d-md-block'>
                    <div className='row contactbar-tab-view'>
                        {/* Email */}
                        <div className='col-12 col-lg-6 contactbar-info-container'>
                            <div>
                                <i className="fa-solid fa-paper-plane contactbar-icon"></i>
                            </div>
                            <a className='contactbar-info' href='mailto: specsvibe@gmail.com'>Email: specsvibe@gmail.com</a>
                        </div>
                        {/* Phone Number */}
                        <div className='col-12 col-lg-5 order-first order-lg-1 contactbar-info-container'>
                            <div>
                                <i className="fa-solid fa-phone contactbar-icon"></i>
                            </div>
                            <a className='contactbar-info' href='tel: +91 9962321727'>Phone: +919962321727</a>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
        
    </>
  )
}

export default ContactBar
