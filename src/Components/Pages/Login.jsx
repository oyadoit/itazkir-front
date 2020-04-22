import React from 'react'
import PropTypes from 'prop-types';

import Header from '../Custom/Header';
import LoginForm from '../Containers/Login/LoginForm';

const Login = props => {
    return (
        <>
            <Header />
            <LoginForm />
        </>
    )
}

Login.propTypes = {

}

export default Login;   
