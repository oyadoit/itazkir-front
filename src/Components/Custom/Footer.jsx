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
        background-color: rgb(109, 224, 103);
        color: #fff;
        font-size: 16px;
        display: flex;
        justify-content: space-around;
        height: 8vh;
        align-items: center;
        padding-right: 120px;
        padding-left: 120px;

    }
    

  

    `,

        <div className="footer__container">
          <div>© 2019-2020 iTazkir.</div>
          <div>Terms Privacy Legal</div>
          <div>About Us</div>
          <div>Contact</div>
        </div>
    );
}

export default Footer;