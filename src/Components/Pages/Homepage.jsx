import React from 'react'
import PropTypes from 'prop-types'
import Style from 'style-it';

import MainContent from '../../Components/Containers/MainContent';
import Features from '../../Components/Containers/Features';

const Homepage = props => {
    return Style.it(`
    
    `,
    <div>
         <MainContent /> 
         <Features />  
    </div>
)
       
    
}

Homepage.propTypes = {

}

export default Homepage;
