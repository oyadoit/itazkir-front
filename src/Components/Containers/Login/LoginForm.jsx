import React from 'react';
import PropTypes from 'prop-types';
import Style from 'style-it';
import { Link } from 'react-router-dom';

import Input from '../../Custom/Input';
import SubmitButton from '../../Custom/SubmitButton';
import AlreadyHave from '../../Custom/AlreadyHave';
import DownloadFromStore from '../../Custom/DownloadFromStore';


const SignUpForm = props => {
    return Style.it(`

    .login__forget__password-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .reset__password-link {
        color: #31DE28;
    }
    .login__image {
        width: 99%;
    }
    `,
    <div className='signup__container'>
        <div className='signup__image-left'>
            <img 
                src="https://res.cloudinary.com/dg7n6i9e1/image/upload/v1584811416/iTazkir/login_ipiiei.png" 
                alt=""
                className='login__image'
            />
        </div>
        <div className='signup__form-right'>
            <h1 className='signup__form-heading'>Welcome back to<span className='signup__green-text'> iTazkir</span></h1>
            <form className='signup__form'>
                <Input 
                    htmlFor='Email'
                    inputName='email'
                    inputType='email'
                    placeholder='Enter Email Address'
                />
                <Input 
                    htmlFor='Password'
                    inputName='password'
                    inputType='password'
                    placeholder='Enter Password'
                />
                
                <div className='login__forget__password-row'>
                    <SubmitButton 
                        text='Login Here'
                    />
                    <Link className='reset__password-link' to='/reset-password'>Forgot Password ?</Link>
                </div>
               

                <AlreadyHave 
                    text='Dont have an Account?'
                    linkText='Sign Up'
                    to='/signup'
                />
            </form> 
            <div className='download__container' style={{marginTop:'40px'}}>
                <DownloadFromStore 
                    imageUrl='https://res.cloudinary.com/dg7n6i9e1/image/upload/v1584607070/iTazkir/get_google_play_lmo8uc.png'
                    className='download-from-store'
                    alt='Download from android store'
                    to='#'
                />

                <DownloadFromStore 
                    imageUrl='https://res.cloudinary.com/dg7n6i9e1/image/upload/v1584607077/iTazkir/download_app_store_kyq4uh.png'
                    className='download-from-store'
                    alt='Download from apple store'
                    to='#'
                />

       
                
            </div>
        </div>
    </div>

    
    )
}

SignUpForm.propTypes = {

}

export default SignUpForm