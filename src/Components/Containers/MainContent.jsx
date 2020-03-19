import React from 'react'
import PropTypes from 'prop-types'
import Style from 'style-it';

import GetStartedButton from '../Custom/GetStartedButton';


const MainContent = props => {
    return Style.it(`
        .get__started {
            margin-top: 20px;
        }
    `,
    <div className="main__content--container">
        <div className="main__content--left">
            <h1 className='main__content--large-text'>And remind, for indeed,  the reminder benefits the believers.</h1>
            <h5 className='main__content--small-text'>Quran 51:55</h5>
            <GetStartedButton className='header__signup--button'>Get Started Now</GetStartedButton>
        </div>  
        <div className="main__content--right">
        </div>     
    </div>
)
       
    
}

MainContent.propTypes = {

}

export default MainContent
