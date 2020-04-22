import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router'

import Input from '../../Custom/Input';
import SubmitButton from '../../Custom/SubmitButton';
import AlreadyHave from '../../Custom/AlreadyHave';

import { Spin } from 'antd';
import { message } from 'antd';



import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks'
import { onError } from "apollo-link-error";

// import Circle from '../../Custom/Particles/Circle';
// import Triangle from '../../Custom/Particles/Triangle';
// import Hexagon from '../../Custom/Particles/Hexagon';




const SignUpForm = props => {
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });


    const [SignUp, {loading, error, data}] = useMutation(CREATE_USER, {

        onError(err) {
            // console.log(err.graphQLErrors.extensions.exception.errors)
            // setErrors(err.graphQLErrors[0].extensions.exception.errors);
        },
        
        variables: values,
        
    });


    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        SignUp();
        setValues({
            firstName: '',
            lastName: '',
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
        return  (
            <div>
                {error.graphQLErrors.map(({ message }, i) => (
                    <h1 key={i}>{message}</h1>
                ))}
            </div>
        )
    }

    // const link = onError(({ graphQLErrors, networkError }) => {
    //     if (graphQLErrors)
    //       graphQLErrors.map(({ message, locations, path }) =>
    //         console.log(
    //           `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
    //         ),
    //       );
      
    //     if (networkError) console.log(`[Network error]: ${networkError}`);
    //   });

      


    if (data) {

        // Redirect to dashboard page
        // alert('sign up successful')
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
            <form className='signup__form' noValidate onSubmit={handleSubmit}>
                <div className="firstname__lastname-input-container">
                
                    <Input 
                        htmlFor='firstName'
                        labelValue='firstName'
                        name='firstName'
                        inputType='text'
                        value={values.firstName}
                        placeholder='Enter First Name'
                        width='300'
                        onChange={handleChange}
                    />
                     <Input 
                        htmlFor='lastName'
                        labelValue='lastName'
                        name='lastName'
                        inputType='text'
                        value={values.lastName}
                        placeholder='Enter Last Name'
                        width='300'
                        onChange={handleChange}
                    /> 
        
                </div>
                <Input 
                    htmlFor='Email'
                    labelValue='Email'
                    name='email'
                    inputType='email'
                    value={values.email}
                    placeholder='Enter Email Address'
                    onChange={handleChange}
                />
                <Input 
                    htmlFor='Password'
                    labelValue='Password'
                    name='password'
                    inputType='password'
                    value={values.password}
                    placeholder='Enter Password'
                    onChange={handleChange}
                />
              
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
                {/* <Triangle color='#31DE28' width='15' height='15' top='390' left='400'/>
                <Circle color='#31DE28' width='20' height='20' top='370' left='305'/>
                <Triangle color='pink' width='5' height='5' top='595' left='800'/>
                <Hexagon color='orange' width='5' height='5' top='550' left='160'/> */}

            </form> 
        </div>
        {/* {
            Object.keys(errors).length > 0 && (
                <div className="error__mesage">
                    <ul>
                    {error.graphQLErrors.map(({ message }, i) => (
                        <h1 key={i}>{message}</h1>
                    ))}
                    </ul>
                </div>

            )
        } */}
        

            

        
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
