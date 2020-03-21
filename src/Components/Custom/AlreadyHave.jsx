import React from 'react';
import { Link } from 'react-router-dom';
import Style from 'style-it'

function AlreadyHave({text, linkText, to}) {
    return Style.it(`
        .already__container {
            display: flex;
            margin-top: 40px;
            color: rgb(63, 61, 86);
            justify-content: flex-start;
            align-items: center;
            
        }
        .already__text {
            margin-left: 0px;
            align-content: center;
            margin-bottom: 0px;
            padding-right: 10px;
        }
        .already__link {
            color: #31DE28;
            // padding: 10px;
            // border-radius: 2px;
            // font-weight: bold;
            letter-spacing: 1px;
        }
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
