import React from 'react'

// CSS
import './NavBar.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navb-container sticky-top">
            <div className="container-fluid">
                <button className="navbar-toggler me-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    {/* Custom Menu Bar from Font Awesome */}
                    <span><i className="fa-solid fa-bars navbar-toggler-icon navb-menu-btn"></i></span>
                    <span className='navb-menu-btn-txt'>MENU</span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 navb-link-container">
                        <li className="nav-item">
                            {/* className={({isActive})=>(isActive ? "nav-link navb-page-txt navb-page-txt-active" : "nav-link navb-page-txt")} */}
                            <NavLink className={({isActive})=>(isActive ? "nav-link navb-page-txt navb-page-txt-active" : "nav-link navb-page-txt")} to="/" aria-current="page" >HOME</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive})=>(isActive ? "nav-link navb-page-txt navb-page-txt-active" : "nav-link navb-page-txt")} to="/About" aria-current="page" >ABOUT US</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive})=>(isActive ? "nav-link navb-page-txt navb-page-txt-active" : "nav-link navb-page-txt")} to="/Product" aria-current="page" >PRODUCTS</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive})=>(isActive ? "nav-link navb-page-txt navb-page-txt-active" : "nav-link navb-page-txt")} to="/Service" aria-current="page" >SERVICE</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive})=>(isActive ? "nav-link navb-page-txt navb-page-txt-active" : "nav-link navb-page-txt")} to="/Contact" aria-current="page" >CONTACT US</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='navb-btn-container' >
                    <button className='navb-btn'><NavLink className="navb-btn-txt" to="/Contact" >GET A QUOTES</NavLink></button>
                </div>
            </div>
        </nav>
    </>
  )
}

export default NavBar