import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../Custom/Input';
import SubmitButton from '../../Custom/SubmitButton';
import AlreadyHave from '../../Custom/AlreadyHave';

import Circle from '../../Custom/Particles/Circle';
import Triangle from '../../Custom/Particles/Triangle';
import Hexagon from '../../Custom/Particles/Hexagon';


const SignUpForm = props => {
    return (
        <div className='signup__container'>
        <div className='signup__image-left'>
            <img 
                src="https://res.cloudinary.com/dg7n6i9e1/image/upload/v1584798045/iTazkir/signup_yxdljr.png" 
                alt=""
            />
        </div>
        <div className='signup__form-right'>
            <h1 className='signup__form-heading'>Create <span className='signup__green-text'> iTazkir </span>Account</h1>
            <form className='signup__form'>
                <Input 
                    htmlFor='Name'
                    labelValue='Name:'
                    inputName='name'
                    inputType='text'
                    placeholder='Enter Full Name'
                    width='300'
                />
                <Input 
                    htmlFor='Email'
                    // labelValue='Email:'
                    inputName='email'
                    inputType='email'
                    placeholder='Enter Email Address'
                />
                <Input 
                    htmlFor='Password'
                    // labelValue='Password:'
                    inputName='password'
                    inputType='password'
                    placeholder='Enter Password'
                />
                
                <SubmitButton 
                    text='Create Account'
                />

                <AlreadyHave 
                    text='Already have an Account?'
                    linkText='Login'
                    to='/login'
                />
                <Triangle color='#31DE28' width='15' height='15' top='390' left='400'/>
                <Circle color='#31DE28' width='20' height='20' top='370' left='305'/>
                <Triangle color='pink' width='5' height='5' top='595' left='800'/>
                <Hexagon color='orange' width='5' height='5' top='550' left='160'/>
            </form> 
        </div>
    </div>

    )
    
    
    
}

SignUpForm.propTypes = {

}

export default SignUpForm
