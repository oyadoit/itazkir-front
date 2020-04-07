import React from 'react';
import PropTypes from 'prop-types';
import Style from 'style-it';


// components
import SubscriptionCard from '../../Custom/SubscriptionCard';
import SubmitButton from '../../Custom/SubmitButton';

const SubscriptionFlow = () => {
    return Style.it(`
    .subscription__flow--container {
        background-color: rgba(63, 61, 86, 0.055);
        margin-right: 150px;
        margin-left: 150px;
        margin-top: 50px;
        margin-bottom: 50px;
        border-radius: 2px;
        padding: 90px;  
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .reminder__subscription--container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 30px;
        padding-top: 30px;
        padding-bottom: 80px;
    }
    .subscription__heading {
        font-size: 33px;
    }
    .subscription__text {
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: 18px;
    }
    .unsubscribe__span {
        color: #31DE28;
    }
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

