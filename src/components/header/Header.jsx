import React from 'react'
import logo from '../../assets/logo.png'
import './header.css'

const Header = () => {
  return (
    
        <div className='header-container shadow'>
        <div>
            <img src={logo} alt='logo'/>
        </div>
        <div>
            <ul className='nav-items'>
                <li>Doctors</li>
                <li>Hospitals</li>
                <li>Specialties</li>
                <li>For Patients</li>
                <li>International Patients</li>
                <li>Doctors</li>
            </ul>
        </div>
        <div>
            <button>Book An Appointment</button>
        </div>
        <div className='mobile-menu'>
            Menu
        </div>
        </div>
    
  )
}

export default Header