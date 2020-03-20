import React from 'react'
import PropTypes from 'prop-types';

import ReminderCard from '../../Custom/ReminderCard';
import GetStartedButton from '../../Custom/GetStartedButton';

const Reminder = props => {
    return (
    <div className='recent__reminder--container'>
        <h1 className='recent__reminder--heading'> Latest Reminder</h1>
        <div className='recent__reminder--cards'>
            <ReminderCard 
                title='Islamic Reminder' 
                content=' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam quos atque' 
                bgColor='rgb(109, 224, 103)'
                firstButton
                imageUrl='https://avatars0.githubusercontent.com/u/39632030?s=60&u=17bfe0a10b32f448983358ead04b14382726beca&v=4'
            />
            <ReminderCard 
                title='Islamic Reminder' 
                content=' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam quos atque' 
                bgColor='rgb(238, 174, 56)'
                secondButton
                imageUrl='https://avatars0.githubusercontent.com/u/8108337?s=460&v=4'
            />
            <ReminderCard 
                title='Islamic Reminder' 
                content=' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam quos atque' 
                bgColor='#2f679c'
                thirdButton
                imageUrl='https://avatars1.githubusercontent.com/u/1754873?s=460&v=4'
            />
        </div>
        <h3 className='recent__reminder--text'>
            Create an account to start receiving instant reminders you subscribe to
        </h3>
        <GetStartedButton className='button__green recent__reminder--button'>Create Account now</GetStartedButton>
    </div>
    )
}

Reminder.propTypes = {

}

export default Reminder
