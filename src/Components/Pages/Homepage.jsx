import React from 'react'
import PropTypes from 'prop-types'
import Style from 'style-it';

import Header from '../Custom/Header';
import MainContent from '../Containers/Homepage/MainContent';
import Features from '../Containers/Homepage/Features';
import RecentReminder from '../Containers/Homepage/RecentReminder';
import ContactUs from '../Containers/Homepage/ContactUs';



const Homepage = props => {
    return Style.it(`
    
    `,
    <div>
         <Header />
         <MainContent /> 
         <Features /> 
         <RecentReminder /> 
         <ContactUs />

    </div>
)
       
    
}

Homepage.propTypes = {

}

export default Homepage;
