import React from 'react'
import PropTypes from 'prop-types'
import Style from 'style-it'

import ReminderCard from '../../Custom/ReminderCard';
import Button from '../../Custom/GetStartedButton';

const Reminders = props => {
    return Style.it(`
        .user__reminder--container {
            margin-left: 60px;
            margin-right: 60px;
            margin-bottom: 100px;
            margin-top: 40px;
        }
        .reminder__card--container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 30px;
        }
        .user__reminder--heading {
            font-size: 33px;
            margin-bottom: 40px;
        }
    `,
    <div className='user__reminder--container'>
        <h1 className='user__reminder--heading'>Recent Reminders</h1>
        <div className='reminder__card--container'>
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
                bgColor='rgb(109, 224, 103)'
                secondButton
                imageUrl='https://avatars0.githubusercontent.com/u/8108337?s=460&v=4'
            />
            <ReminderCard 
                title='Islamic Reminder' 
                content=' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam quos atque' 
                bgColor='rgb(109, 224, 103)'
                thirdButton
                imageUrl='https://avatars1.githubusercontent.com/u/1754873?s=460&v=4'
            />
            <ReminderCard 
                title='Islamic Reminder' 
                content=' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam quos atque' 
                bgColor='rgb(109, 224, 103)'
                firstButton
                imageUrl='https://avatars0.githubusercontent.com/u/39632030?s=60&u=17bfe0a10b32f448983358ead04b14382726beca&v=4'
            />
           
        </div>

        <Button />

    </div>
    )
}

Reminders.propTypes = {

}

export default Reminders
