import React from 'react'
import PropTypes from 'prop-types'

import Header from '../Custom/Header';
import SignUpForm from '../Containers/SignUp/SignUpForm';

const Signup = props => {
    return (
        <div>
            <Header />
            <SignUpForm />
        </div>
    )
}

Signup.propTypes = {

}

export default Signup
