import React from 'react';
import PropTypes from 'prop-types';
import Style from 'style-it';

import Input from '../../Custom/Input';
import SubmitButton from '../../Custom/SubmitButton';
import AlreadyHave from '../../Custom/AlreadyHave';

import Circle from '../../Custom/Particles/Circle';
import Triangle from '../../Custom/Particles/Triangle';
import Hexagon from '../../Custom/Particles/Hexagon';


const SignUpForm = props => {
    return Style.it(`
    .signup__container {
        margin-right: 100px;
        margin-left: 100px;
        padding-top: 10px;
        height: 80vh;
        display: flex;
        // justify-content: space-evenly;
    }
    .signup__form-right {
        padding-top: 50px;
        padding-left: 100px;
    }
    .signup__form {
        display: flex;
        flex-direction: column;
    }
    .signup__form-heading {
        font-weight: bold;
        font-size: 36px;
        color: rgb(63, 61, 86);
        margin-bottom: 30px;
    }
    .signup__green-text {
        color: #31DE28;
        font-size: 40px;
    }
    `,
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
