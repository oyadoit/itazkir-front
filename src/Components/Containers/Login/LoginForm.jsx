import React from 'react';
import PropTypes from 'prop-types';
import Style from 'style-it';
import { Link } from 'react-router-dom';

import Input from '../../Custom/Input';
import SubmitButton from '../../Custom/SubmitButton';
import AlreadyHave from '../../Custom/AlreadyHave';
import DownloadFromStore from '../../Custom/DownloadFromStore';
import { useState } from 'react';
import { Redirect } from 'react-router'

import { message, Button } from 'antd';

import { Spin } from 'antd';

import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks'
import { AUTH_TOKEN } from '../../../constants'


const SignUpForm = props => {

    const [errors, setErrors] = useState({});
        const [values, setValues] = useState({
            email: '',
            password: ''
        });

        //function from ant design to display error message
        const errorMessage = (args) => {
            message.error(args);
        }

        const [Login, {error, loading, data}] = useMutation(LOGIN, { 
            
            onError: (error) => {
                setErrors(error.message);
              },

            
            
            variables: values 
        });

        const handleSubmit = (e) => {
            e.preventDefault();
             console.log(errors)   
            Login()
            setValues({
                email: '',
                password: '',
               
            })
        }


        const handleChange = (e) => {
            setValues({
                ...values,
                [e.target.name]: e.target.value,
            });
        }
    
        if (error) { 
            (error.graphQLErrors.map(err => {
                console.log(error.graphQLErrors)
                errorMessage(err.message);
            }))
            
        }

        if (data) {

            console.log(data)
            const token  = data.tokenAuth.token
            saveUserData(token)
            if(AUTH_TOKEN){
                return <Redirect to='/dashboard' />
            }
            // else {
            //     return <Redirect to='/login' />
            // }
        }


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
            <form className='signup__form' onSubmit={handleSubmit} noValidate>
                <Input 
                    htmlFor='Email'
                    name='email'
                    inputType='email'
                    value={values.email}
                    placeholder='Enter Email Address'
                    onChange={handleChange}
                />
                <Input 
                    htmlFor='Password'
                    name='password'
                    inputType='password'
                    value={values.password}
                    placeholder='Enter Password'
                    onChange={handleChange}
                />
                
                <div className='login__forget__password-row'>
                    <SubmitButton 
                        text='Login Here'
                    />
                    <Link className='reset__password-link' to='/reset-password'>Forgot Password ?</Link>
                </div>
                <div loader__container>
                        {loading ? <Spin size="large" /> : ('')}
                </div>

                <AlreadyHave 
                    text='Dont have an Account?'
                    linkText='Sign Up'
                    to='/signup'
                />
            </form> 
            
            {/* {
                Object.keys(errors).length > 0 && (
                    <div>
                        <ul>
                        {
                            Object.values(errors).map(value => (
                                <li key={value}>{value}</li>
                            ))
                        }
                        </ul>
                    </div>
                )
            } */}

                
            
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



const LOGIN = gql`
  mutation login(
      $email: String!, 
      $password: String!, 
    ) {
    tokenAuth(
        email: $email, 
        password: $password, 
    )
    {
        token
    }
  }
`

const saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token)
  }


SignUpForm.propTypes = {

}



export default SignUpForm
