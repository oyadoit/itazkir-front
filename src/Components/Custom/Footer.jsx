

import React from 'react'
import Style from 'style-it';


const Footer = () => {
    return Style.it(`
    .footer__container{
        background-color: #F0F0F0;
        color: rgb(63, 61, 86);
        font-size: 14px;
        display: flex;
        justify-content: space-evenly;
        min-height: 8vh;
        align-items: center;
        padding-right: 250px;
        padding-left: 250px;

    }
    `,

        <div className="footer__container">
          <div>Email</div>
          <div>{new Date().getFullYear()} iTazkir.</div>
          <div>Github</div>
        </div>
    );
}

export default Footer;