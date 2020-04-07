import React from 'react'
import PropTypes from 'prop-types';

// components import
import FeatureCard from '../../Custom/FeatureCard';
import Circle from '../../Custom/Particles/Circle';
import Triangle from '../../Custom/Particles/Triangle';
import Hexagon from '../../Custom/Particles/Hexagon';



const Features = () => {
    
    return (
    <div className='features__container'>
       <h1 className='features__heading'>How it works.</h1>
       <div className='features__card--container'>
            <FeatureCard 
                withButton header='Step 1' 
                content={'Create an iTazkir account to start receiving reminder'} 
                color={'#31DE28'}
                icon={'fa-hourglass-start'}
            > 
                <i class="fa fa-hourglass-start" aria-hidden="true"></i> 
            </FeatureCard>
            <FeatureCard 
                header='Step 2' 
                content={'Pick from varieties of Reminder and subscribe to all of your choices'} 
                color={'pink'}
                icon={'fa-check-circle-o'}
            >
                <i class="fa fa-check-circle-o" aria-hidden="true"></i>    
            </FeatureCard> 
            <FeatureCard 
                header='Step 3' 
                content={'Relax and start receiving reminder your selected reminders'} 
                color={'orange'}
            >
                <i class="fa fa-clock-o" aria-hidden="true"></i>    
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