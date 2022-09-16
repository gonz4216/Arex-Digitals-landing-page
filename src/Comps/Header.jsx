import React from 'react'
import { useState } from 'react'
import Logo from './images/logo white.png'
const Header = () => {



    return (

        <nav>
            <div className="row">
                <div className="container-nav">
                    <div className="logo-wrapper">
                        <img src={Logo} alt="" className='logo' />
                        {/* <h1 className='logo-text'>AREX</h1> */}
                    </div>


                    <ul className='nav__links--wrapper'>
                        <li className='nav-li'><a href="#" className='nav-link'>Services</a></li>
                        <li className='nav-li'><a href="#" className='nav-link'>Our Work</a></li>
                        <li className='nav-li'><a href="#" className='nav-link'>Contact</a></li>
                        <li className='nav-li'><a href="#" className='nav-link'>About</a></li>
                        <li className='nav-li'><a href="#" className='nav-link'>Careers</a></li>
                        {/* <a href='#' className='btn'>GET STARTED</a> */}
                    </ul>

                </div>
            </div>

        </nav>
    )
}

export default Header