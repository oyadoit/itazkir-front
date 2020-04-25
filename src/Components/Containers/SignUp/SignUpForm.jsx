import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router'

import Input from '../../Custom/Input';
import SubmitButton from '../../Custom/SubmitButton';
import AlreadyHave from '../../Custom/AlreadyHave';

import { Spin } from 'antd';

import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks'

import { FormValidation } from "calidation";
import validator from '../../../utils/validation';

import { errorMessage } from '../../../utils/helpers'




const SignUpForm = props => {
    // const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });
    


    const [SignUp, {loading, data}] = useMutation(CREATE_USER, {

        onError({graphQLErrors, networkError}){
            if (graphQLErrors)
                graphQLErrors.map(err => {
                    errorMessage(err.message)
                    // setErrors(err.message);
                    console.log(`err: ${err.message}`)
                    
                }        
          );
          if (networkError) errorMessage('You are not connected to the internet');
        },

        variables: values,
        
    });


    
    
    const handleSubmit = ({ isValid }) => {
        if(isValid){
            SignUp();
        }
    }

   

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    } 
      


    if (data) {

        // Redirect to dashboard page
        return <Redirect to='/get-started' />
    }


    return (
        <div className='signup__container'>
        <div className='signup__image-left'>
            <img 
                src="https://res.cloudinary.com/dg7n6i9e1/image/upload/v1584798045/iTazkir/signup_yxdljr.png" 
                alt=""
                className='sign__up--image'
            />
        </div>
        
        <div className='signup__form-right'>
            <h1 className='signup__form-heading'>Create <span className='signup__green-text'> iTazkir </span>Account</h1>
            <FormValidation config={validator} className='signup__form'  onSubmit={handleSubmit}>
                {({ fields, errors, submitted }) => (
                    <>
                        <div className="firstname__lastname-input-container">
                            <div>
                                <Input 
                                    htmlFor='firstName'
                                    labelValue='firstName'
                                    name='firstName'
                                    inputType='text'
                                    value={values.firstName &&fields.firstName}
                                    placeholder='Enter First Name'
                                    width='300'
                                    onChange={handleChange}
                                />
                                {submitted && errors.firstName &&                             
                                    <div className="input__error">
                                        {errors.firstName}
                                    </div>
                                }
                            </div>
                            <div>
                                <Input 
                                    htmlFor='lastName'
                                    labelValue='lastName'
                                    name='lastName'
                                    inputType='text'
                                    value={values.lastName && fields.lastName}
                                    placeholder='Enter Last Name'
                                    width='300'
                                    onChange={handleChange}
                                /> 
                                {submitted && errors.lastName &&                             
                                    <div className="input__error">
                                        {errors.lastName}
                                    </div>
                                 }
                            </div>
                
                        </div>
                        
                        <Input 
                            htmlFor='Email'
                            labelValue='Email'
                            name='email'
                            inputType='email'
                            value={values.email && fields.email}
                            placeholder='Enter Email Address'
                            onChange={handleChange}
                        />
                        {submitted && errors.email &&
                            <div className="input__error">{errors.email}</div>
                        }
                        <Input 
                            htmlFor='Password'
                            labelValue='Password'
                            name='password'
                            inputType='password'
                            value={values.password && fields.password}
                            placeholder='Enter Password'
                            onChange={handleChange}
                        />
                        {submitted && errors.password &&
                            <div className="input__error">{errors.password}</div>
                        }
                    
                        <div className='same__line'>
                            <SubmitButton 
                                text='Create Account'                 
                            />
                            <div loader__container>
                                {loading ? <Spin size="large" /> : ('')}
                            </div>
                        </div>
                    
                    

                        <AlreadyHave 
                            text='Already have an Account?'
                            linkText='Login'
                            to='/login'
                        />
                </>
                )}
            </FormValidation> 


        </div>
        
        

            

        
    </div>

    )      
}


const CREATE_USER = gql`
  mutation createUser(
      $firstName: String!, 
      $email: String!, 
      $password: String!, 
      $lastName: String!
    ) {
    createUser(
        firstName: $firstName,
        email: $email, 
        password: $password, 
        lastName:$lastName
    ) {
        user
            {
                id
                firstName
                lastName
                email
            }
    }
   
  }
`





SignUpForm.propTypes = {

}

export default SignUpForm;
