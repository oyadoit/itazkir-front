// import React from 'react'
// import PropTypes from 'prop-types'

// const Footer = props => {
//     return (
//         <div className='footer__container'>
//             This is the footer for crying out loud
//         </div>
//     )
// }

// Footer.propTypes = {

// }

// export default Footer

import React from 'react'
import Style from 'style-it';


const Footer = () => {
    return Style.it(`
    .footer__container{
        // background-color: rgb(109, 224, 103);
        background-color: #F0F0F0;
        // color: #fff;
        color: rgb(63, 61, 86);
        font-size: 14px;
        display: flex;
        justify-content: space-evenly;
        height: 8vh;
        align-items: center;
        padding-right: 300px;
        padding-left: 300px;

    }
    `,

        <div className="footer__container">
          <div>Email</div>
          <div>Github</div>
          <div>2020 iTazkir.</div>
        </div>
    );
}

export default Footer;