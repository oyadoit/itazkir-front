import React from 'react';
import { Link } from 'react-router-dom';
import Style from 'style-it'

function AlreadyHave({text, linkText, to}) {
    return Style.it(`
        
    `,
    <div className='already__container'>
        <p className='already__text'>
            {text}
        </p>   
        <Link className='already__link' to={to}>
            {linkText}
        </Link>
    </div>
    )
        
    
}

export default AlreadyHave;
