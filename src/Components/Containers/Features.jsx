import React from 'react'
import PropTypes from 'prop-types';
import Style from 'style-it';

// components import
import Card from '../Custom/Card';


const Features = () => {
    
    return Style.it(`
      .features__container {
          background-color: rgba(226, 219, 219, 0.062)   !important;
          padding-right: 120px;
          padding-left: 120px;
          padding-top:   60px;
      }
      .features__heading {
          font-size: 33px;
        //   color: green;
          color: rgba(78, 78, 78, 0.658);
          display: flex;
          justify-content: center;
      }
      .features__card--container {
          display: flex;
          justify-content: space-between;
      }
    `,
    <div className='features__container'>
       <h1 className='features__heading'>How it works.</h1>
       <div className='features__card--container'>
            <Card 
                withButton header='Step 1' 
                content={'Create an iTazkir account to start receiving reminder'} 
                color={'#31DE28'}
                icon={'fa-hourglass-start'}
            > 
                <i class="fa fa-hourglass-start" aria-hidden="true"></i> 
            </Card>
            <Card 
                header='Step 2' 
                content={'Pick from varieties of Reminder and subscribe to all of your choices'} 
                color={'pink'}
                icon={'fa-check-circle-o'}
            >
                <i class="fa fa-check-circle-o" aria-hidden="true"></i>    
            </Card> 
            <Card 
                header='Step 3' 
                content={'Relax and start receiving reminder your selected reminders'} 
                color={'orange'}
            >
                <i class="fa fa-clock-o" aria-hidden="true"></i>    
            </Card> 

            
       </div>
    </div>
    )
}

Features.propTypes = {

}

export default Features;
