import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Button = (props) => {
    
    return(
    <>
         <Link className={props.className} to='/signup'>{props.children}</Link>
    </>
)
}

Button.propTypes = {

}

export default Button;
