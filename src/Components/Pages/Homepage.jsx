import React from 'react'
import PropTypes from 'prop-types'
import Style from 'style-it';

import MainContent from '../Containers/Homepage/MainContent';
import Features from '../Containers/Homepage/Features';
import Reminder from '../Containers/Homepage/Reminder';



const Homepage = props => {
    return Style.it(`
    
    `,
    <div>
         <MainContent /> 
         <Features /> 
         <Reminder /> 
         

    </div>
)
       
    
}

Homepage.propTypes = {

}

export default Homepage;
