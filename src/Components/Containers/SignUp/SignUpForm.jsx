import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from '../../Custom/Input';
import SubmitButton from '../../Custom/SubmitButton';
import AlreadyHave from '../../Custom/AlreadyHave';


import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks'

// import Circle from '../../Custom/Particles/Circle';
// import Triangle from '../../Custom/Particles/Triangle';
// import Hexagon from '../../Custom/Particles/Hexagon';



const CREATE_USER = gql`
  mutation SignUp($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    createUser(firstName: $firstName, lastName: $lastName,email: $email, password: $password) {
     user {
         id  
     }
    }
  }
`


const SignUpForm = props => {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const [SignUp, {data, loading, error}] = useMutation(CREATE_USER, {
        update(proxy, result){
            console.log(result)
        },
        variables: values
    });

    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        SignUp();
        setValues({
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        })
    }

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    }

    if (loading) return <p>Loading...</p>;

    if (error) {
        console.log(error.message);
        console.log(error.networkError.message);
        console.log(error.networkError);
        console.log(error.stack);
        return <p>{error.message}</p>
    }

    if (data) {
        console.log(data);
        alert('Successfully Logged In');
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
                
                <SubmitButton 
                    text='Create Account'                 
                />

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
    </div>

    )  
    
    
}





SignUpForm.propTypes = {

}

export default SignUpForm;
