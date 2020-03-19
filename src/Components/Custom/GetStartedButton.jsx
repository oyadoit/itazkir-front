import React from 'react'
import PropTypes from 'prop-types';
import Style from 'style-it';
import { Link } from 'react-router-dom';


const Button = (props) => {
    
    return Style.it(`
        // .header__signup--button {
        //     margin-top: 20px;
        // }
       
    `,
    <>
         <Link className={props.className} to='/signup'>{props.children}</Link>
    </>
    )
}

Button.propTypes = {

}

export default Button;
