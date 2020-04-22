import React from 'react'
import PropTypes from 'prop-types'
import Style from 'style-it';

import DashboardMenu from '../../Custom/DashboardMenu'
import SmallReminderCard from '../../Custom/SmallReminderCard';
import SearchBar from '../../Custom/SearchBar';

const AllReminders = props => {
    return Style.it(`
        .all__reminders--page {
            display: grid;
            grid-template-columns: 200px 1fr;
            grid-gap: 20px;
        }
        .all__reminders--container {
            background-color: #f5f6fb;
            padding: 30px;
        }
        .all__reminders--card-container {
            display: grid;
            grid-gap: 30px;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr) );
        }
    `,
        <div className='all__reminders--page'>
            <DashboardMenu />
            <div className='all__reminders--container'>
                <h1>All Reminders</h1>
                <SearchBar />
                <div className='all__reminders--card-container'>
                    <SmallReminderCard 
                        title='Islamic Reminder' 
                        content=' Lorem ipsum dolor sit amet,  elit. Totam quos atque' 
                        bgColor='#fff'
                        secondButton
                        imageUrl='https://avatars0.githubusercontent.com/u/39632030?s=60&u=17bfe0a10b32f448983358ead04b14382726beca&v=4'
                    />
                    <SmallReminderCard 
                        title='Islamic Reminders' 
                        content=' Lorem ipsum dolor sit amet,  elit. Totam quos atque' 
                        bgColor='#fff'
                        secondButton
                        imageUrl='https://avatars0.githubusercontent.com/u/39632030?s=60&u=17bfe0a10b32f448983358ead04b14382726beca&v=4'
                    />
                    <SmallReminderCard 
                        title='Islam The Way Forward' 
                        content=' Lorem ipsum dolor sit amet,  elit. Totam quos atque' 
                        bgColor='#fff'
                        secondButton
                        imageUrl='https://avatars0.githubusercontent.com/u/39632030?s=60&u=17bfe0a10b32f448983358ead04b14382726beca&v=4'
                    />
                    <SmallReminderCard 
                        title='Islamic Ways' 
                        content=' Lorem ipsum dolor sit amet,  elit. Totam quos atque' 
                        bgColor='#fff'
                        secondButton
                        imageUrl='https://avatars0.githubusercontent.com/u/39632030?s=60&u=17bfe0a10b32f448983358ead04b14382726beca&v=4'
                    />
                    <SmallReminderCard 
                        title='Islamic Reminder' 
                        content=' Lorem ipsum dolor sit amet,  elit. Totam quos atque' 
                        bgColor='#fff'
                        secondButton
                        imageUrl='https://avatars0.githubusercontent.com/u/39632030?s=60&u=17bfe0a10b32f448983358ead04b14382726beca&v=4'
                    />
                    <SmallReminderCard 
                        title='Quran PRO' 
                        content=' Lorem ipsum dolor sit amet,  elit. Totam quos atque' 
                        bgColor='#fff'
                        secondButton
                        imageUrl='https://avatars0.githubusercontent.com/u/39632030?s=60&u=17bfe0a10b32f448983358ead04b14382726beca&v=4'
                    />
                    <SmallReminderCard 
                        title='Daily Reminder' 
                        content=' Lorem ipsum dolor sit amet,  elit. Totam quos atque' 
                        bgColor='#fff'
                        secondButton
                        imageUrl='https://avatars0.githubusercontent.com/u/39632030?s=60&u=17bfe0a10b32f448983358ead04b14382726beca&v=4'
                    />
                    <SmallReminderCard 
                        title='Daily Islamic Quotes' 
                        content=' Lorem ipsum dolor sit amet,  elit. Totam quos atque' 
                        bgColor='#fff'
                        secondButton
                        imageUrl='https://avatars0.githubusercontent.com/u/39632030?s=60&u=17bfe0a10b32f448983358ead04b14382726beca&v=4'
                    />
                    <SmallReminderCard 
                        title='Islamic Daily Dawah' 
                        content=' Lorem ipsum dolor sit amet,  elit. Totam quos atque' 
                        bgColor='#fff'
                        secondButton
                        imageUrl='https://avatars0.githubusercontent.com/u/39632030?s=60&u=17bfe0a10b32f448983358ead04b14382726beca&v=4'
                    />
                                        <SmallReminderCard 
                        title='Islam Way Of Life' 
                        content=' Lorem ipsum dolor sit amet,  elit. Totam quos atque' 
                        bgColor='#fff'
                        secondButton
                        imageUrl='https://avatars0.githubusercontent.com/u/39632030?s=60&u=17bfe0a10b32f448983358ead04b14382726beca&v=4'
                    />
                    <SmallReminderCard 
                        title='Islamic Daily Episodes' 
                        content=' Lorem ipsum dolor sit amet,  elit. Totam quos atque' 
                        bgColor='#fff'
                        secondButton
                        imageUrl='https://avatars0.githubusercontent.com/u/39632030?s=60&u=17bfe0a10b32f448983358ead04b14382726beca&v=4'
                    />
                    <SmallReminderCard 
                        title='Islamic Reminder' 
                        content=' Lorem ipsum dolor sit amet,  elit. Totam quos atque' 
                        bgColor='#fff'
                        secondButton
                        imageUrl='https://avatars0.githubusercontent.com/u/39632030?s=60&u=17bfe0a10b32f448983358ead04b14382726beca&v=4'
                    />
                    <SmallReminderCard 
                        title='Islamic Reminder' 
                        content=' Lorem ipsum dolor sit amet,  elit. Totam quos atque' 
                        bgColor='#fff'
                        secondButton
                        imageUrl='https://avatars0.githubusercontent.com/u/39632030?s=60&u=17bfe0a10b32f448983358ead04b14382726beca&v=4'
                    />
                    <SmallReminderCard 
                        title='Islamic Reminder' 
                        content=' Lorem ipsum dolor sit amet,  elit. Totam quos atque' 
                        bgColor='#fff'
                        secondButton
                        imageUrl='https://avatars0.githubusercontent.com/u/39632030?s=60&u=17bfe0a10b32f448983358ead04b14382726beca&v=4'
                    />
                    <SmallReminderCard 
                        title='Islamic Reminder' 
                        content=' Lorem ipsum dolor sit amet,  elit. Totam quos atque' 
                        bgColor='#fff'
                        secondButton
                        imageUrl='https://avatars0.githubusercontent.com/u/39632030?s=60&u=17bfe0a10b32f448983358ead04b14382726beca&v=4'
                    />
                    <SmallReminderCard 
                        title='Islamic Reminder' 
                        content=' Lorem ipsum dolor sit amet,  elit. Totam quos atque' 
                        bgColor='#fff'
                        secondButton
                        imageUrl='https://avatars0.githubusercontent.com/u/39632030?s=60&u=17bfe0a10b32f448983358ead04b14382726beca&v=4'
                    />
                    <SmallReminderCard 
                        title='Islamic Reminder' 
                        content=' Lorem ipsum dolor sit amet,  elit. Totam quos atque' 
                        bgColor='#fff'
                        secondButton
                        imageUrl='https://avatars0.githubusercontent.com/u/39632030?s=60&u=17bfe0a10b32f448983358ead04b14382726beca&v=4'
                    />
                    <SmallReminderCard 
                        title='Islamic Reminder' 
                        content=' Lorem ipsum dolor sit amet,  elit. Totam quos atque' 
                        bgColor='#fff'
                        secondButton
                        imageUrl='https://avatars0.githubusercontent.com/u/39632030?s=60&u=17bfe0a10b32f448983358ead04b14382726beca&v=4'
                    />
                </div>
            </div>
        </div>
    )
}

AllReminders.propTypes = {

}

export default AllReminders
