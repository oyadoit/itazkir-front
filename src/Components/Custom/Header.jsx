import React from 'react';
import PropTypes from 'prop-types';
import Style from 'style-it';
import {  Link  } from 'react-router-dom'


const Header = props => {
    return Style.it(
        `
   


        `,
        
    <div className='header'>
        <div className="header__logo--container">
            <Link to='/'className='header__logo--icon' >iTazkir</Link>
        </div> 
        <div className="nav__container">
            <ul>                
                <li><Link to='/about' className="nav__container--link">About</Link></li>
                <li><Link to='/login' className="nav__container--link">Login</Link></li>
                <li><Link className='header__signup--button' to='/signup'>Get Started</Link></li>
            </ul>
        </div>
    </div>
     
    )
}

Header.propTypes = {
    
}

export default Header;

