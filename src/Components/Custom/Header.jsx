import React from 'react';
import PropTypes from 'prop-types';
import Style from 'style-it';
import {  Link  } from 'react-router-dom';

import GetStartedButton from './GetStartedButton';
import Circle from '../Custom/Particles/Circle';
import Triangle from '../Custom/Particles/Triangle';
import Hexagon from '../Custom/Particles/Hexagon';

import Button from '../Custom/SubmitButton'
import { AUTH_TOKEN } from '../../utils/constants';




const Header = props => {

    const authToken = localStorage.getItem(AUTH_TOKEN)
    
    return Style.it(
        `
        .profile__image {
            border-radius: 50%;
            width: 50px;
            height: 50px;
        }
        li {
            align-self: center;
        }
        .profile__image--container {
            padding-left: 50px;
        }
        li {
            display: block;
            transition-duration: 0.5s;
        }
           
        li:hover {
            cursor: pointer;
        }
        
        ul li ul {
            visibility: hidden;
            opacity: 0;
            position: absolute;
            transition: all 0.8s ease;
            margin-top: .2rem;
            right: 0;
            margin-right: 4.2rem !important;
            right: 10;
            display: none;
            background-color:  #fff;
            border-radius: 3px;
            border-width: 1px;
            border-style: solid;
            border-color: rgba(0, 0, 0, 0.05);
            padding: 15px 50px 15px 15px;
        }
        ul li:hover > ul,
        ul li ul:hover {
            visibility: visible;
            opacity: 1;
            display: block;
        }

        ul li ul li {
            clear: both;
            width: 100%;
            padding: 10px;
        }
        `,
        
    <div className='header'>
        <div className="header__logo--container">
            <Link to='/'className='header__logo--icon' >iTazkir</Link>
        </div> 
        <div className="nav__container">
            <ul> 
                {
                    props.isLoggedIn? (
                        <>
                           
                            <li className='profile__image--container'>
                                <Link to='/profile' className="">
                                    <img className='profile__image' src='https://avatars0.githubusercontent.com/u/8108337?s=460&v=4' alt="Reminder Owner"/>
                                </Link>
                                <ul>
                                    <li><Link to='/notifications'>Notifications</Link></li>
                                    <li><Link to='/profile'>Profile</Link></li>
                                    <li><Link to='/setting'>Setting</Link></li>
                                    <li><Button text='Logout'/></li>
                                </ul>
                            </li>  
                        </>
                        
                    ):(
                        <>
                            <li><Link to='/about' className="nav__container--link">About</Link></li>
                            {
                                authToken ? (
                                <li><Link onClick={()=> {
                                        localStorage.removeItem(AUTH_TOKEN)
                                        // props.history.push('/')
                                    }
                                    } 
                                    className="nav__container--link">Logout</Link></li>
                                ) : (
                                    <>
                                        <li><Link to='/login' className="nav__container--link">Login</Link></li>
                                        <li><GetStartedButton to='/signup' className='button__green'>Get Started</GetStartedButton></li>
                                    </>                    
                                )
                            }
                           
                        </>
                        
                    )
                }               
                
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

