import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header-wrapper'>
            <h1 className='header-title'><img src="./assets/logo.svg" alt="" className='header-img'/></h1>
            <ul>
                <NavLink to='/' className="link">Home</NavLink>
                <NavLink to='/product' className="link">Products</NavLink>
                <NavLink to='/contact' className="link">Contact</NavLink>
            </ul>
        </div>
    )
}

export default Header