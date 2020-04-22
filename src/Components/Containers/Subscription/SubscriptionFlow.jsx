import React from 'react';
import PropTypes from 'prop-types';
import Style from 'style-it';


// components
import SubscriptionCard from '../../Custom/SubscriptionCard';
import SubmitButton from '../../Custom/SubmitButton';

const SubscriptionFlow = () => {
    return Style.it(`
    
    `,
        <div className='subscription__flow--container'>
            <h1 className='subscription__heading'>Stay updated with topics you care about the most</h1>
            <h3 className='subscription__text'>Subscribe to your choice of reminder, <span className='unsubscribe__span'>Unsubscribe</span> at any time. </h3>
            <div className='reminder__subscription--container'>
                <SubscriptionCard 
                    title='Islamic Reminder' 
                    content=' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam quos atque' 
                    bgColor='rgb(109, 224, 103)'
                    firstButton
                    imageUrl='https://avatars0.githubusercontent.com/u/39632030?s=60&u=17bfe0a10b32f448983358ead04b14382726beca&v=4'
                />
                <SubscriptionCard 
                    title='Islamic Reminder' 
                    content=' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam quos atque' 
                    bgColor='rgb(109, 224, 103)'
                    firstButton
                    imageUrl='https://avatars0.githubusercontent.com/u/39632030?s=60&u=17bfe0a10b32f448983358ead04b14382726beca&v=4'
                />
                <SubscriptionCard 
                    title='Islamic Reminder' 
                    content=' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam quos atque' 
                    bgColor='rgb(109, 224, 103)'
                    firstButton
                    imageUrl='https://avatars0.githubusercontent.com/u/39632030?s=60&u=17bfe0a10b32f448983358ead04b14382726beca&v=4'
                />
                <SubscriptionCard 
                    title='Islamic Reminder' 
                    content=' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam quos atque' 
                    bgColor='rgb(109, 224, 103)'
                    firstButton
                    imageUrl='https://avatars0.githubusercontent.com/u/39632030?s=60&u=17bfe0a10b32f448983358ead04b14382726beca&v=4'
                />
                <SubscriptionCard 
                    title='Islamic Reminder' 
                    content=' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam quos atque' 
                    bgColor='rgb(109, 224, 103)'
                    firstButton
                    imageUrl='https://avatars0.githubusercontent.com/u/39632030?s=60&u=17bfe0a10b32f448983358ead04b14382726beca&v=4'
                />
                <SubscriptionCard 
                    title='Islamic Reminder' 
                    content=' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam quos atque' 
                    bgColor='rgb(109, 224, 103)'
                    firstButton
                    imageUrl='https://avatars0.githubusercontent.com/u/39632030?s=60&u=17bfe0a10b32f448983358ead04b14382726beca&v=4'
                />
                <SubscriptionCard 
                    title='Islamic Reminder' 
                    content=' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam quos atque' 
                    bgColor='rgb(109, 224, 103)'
                    firstButton
                    imageUrl='https://avatars0.githubusercontent.com/u/39632030?s=60&u=17bfe0a10b32f448983358ead04b14382726beca&v=4'
                />
                
            </div>

            <SubmitButton  text='Save and Continue'/>

        </div>
    )
}

SubscriptionFlow.propTypes = {

}

export default SubscriptionFlow;

