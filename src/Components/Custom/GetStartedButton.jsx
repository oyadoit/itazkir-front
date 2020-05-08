import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Button = (props) => {
    
    return(
    <>
         <Link className={props.className} to={props.to}>{props.children}</Link>
    </>
)
}

Button.propTypes = {

}

export default Button;
