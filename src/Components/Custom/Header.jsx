import React from 'react';
import PropTypes from 'prop-types';
import Style from 'style-it';
import {  Link  } from 'react-router-dom';

import GetStartedButton from './GetStartedButton';
import Circle from '../Custom/Particles/Circle';
import Triangle from '../Custom/Particles/Triangle';
import Hexagon from '../Custom/Particles/Hexagon';


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
                <li><GetStartedButton className='button__green'>Get Started</GetStartedButton></li>
                
            </ul>
        </div>

        <Circle color='#31DE28' width='20' height='20' top='10' left='105'/>
        <Triangle color='pink' width='5' height='5' top='85' left='50'/>
        <Hexagon color='orange' width='5' height='5' top='20' left='12'/>
    </div>
     
    )
}

Header.propTypes = {
    
}

export default Header;

