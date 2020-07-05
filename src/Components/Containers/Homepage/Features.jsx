import React from 'react'
import PropTypes from 'prop-types';
import Style from 'style-it'

// components import
import FeatureCard from '../../Custom/FeatureCard';
import Circle from '../../Custom/Particles/Circle';
import Triangle from '../../Custom/Particles/Triangle';
import Hexagon from '../../Custom/Particles/Hexagon';



const Features = () => {
    
    return Style.it(`
    @media only screen and (max-width: 396px) {
        .features__container {
            padding-left: 10px;
            padding-right: 10px;
        }
        .card__container {
            width: 200px !important;
            height: 300px !important;
        }
    }
    `,
    <div className='features__container'>
       <h1 className='features__heading'>How it works.</h1>
       <div className='features__card--container'>
            <FeatureCard 
            
                withButton header='Step 1' 
                content={'Create an iTazkir account to start receiving reminders'} 
                color={'#31DE28'}
                icon={'fa-hourglass-start'}
            > 
                <i className="fa fa-hourglass-start" aria-hidden="true"></i> 
            </FeatureCard>
            <FeatureCard 
                header='Step 2' 
                content={'Pick from varieties of Reminder and subscribe to all of your choices'} 
                color={'pink'}
                icon={'fa-check-circle-o'}
            >
                <i className="fa fa-check-circle-o" aria-hidden="true"></i>    
            </FeatureCard> 
            <FeatureCard 
                header='Step 3' 
                content={'Relax and start receiving reminders you subscribe to'} 
                color={'orange'}
            >
                <i className="fa fa-clock-o" aria-hidden="true"></i>    
            </FeatureCard> 

            
       </div>
       <Circle color='#31DE28' width='20' height='20' top='10' left='105'/>
       <Triangle color='pink' width='5' height='5' top='85' left='50'/>
       <Hexagon color='orange' width='5' height='5' top='20' left='12'/>
    </div>
    )
}

Features.propTypes = {

}

export default Features;
