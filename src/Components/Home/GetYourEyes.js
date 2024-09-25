import React from 'react'
import { NavLink } from 'react-router-dom'

// CSS
import './GetYourEyes.css'

const GetYourEyes = () => {
  return (
    <>
      <div className='get-image-container'>
        <div>
            <h2 className='get-heading'>Get your eyes checked at home all over chennai</h2>
            <p className='get-para'>A certified refractionist will visit you with the latest eye testing machines and over 150 trial frames.</p>

            {/* Button */}
            <div className='get-btn-container'>
                <NavLink className='get-btn' to='/Contact' >For More Enquiries</NavLink>
            </div>
        </div>
      </div>
    </>
  )
}

export default GetYourEyes
