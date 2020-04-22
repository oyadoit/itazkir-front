import React from 'react'
import PropTypes from 'prop-types'
import Style from 'style-it'

import DashboardMenu from '../../Custom/DashboardMenu';
import SmallSubscriptionCard from '../../Custom/SmallSubscriptionCard';
import UserCurrentSubscription from '../../Custom/UserCurrentSubscription'

const Subscriptions = props => {
    return Style.it(`
        .subscriptions__container {
            display: grid;
            grid-template-columns: 200px 1fr 380px;
            grid-gap: 20px;
        }
        .user__subscriptions--container {
            background-color: #f5f6fb;
            padding: 40px 30px 30px 30px;
            display: flex;
            flex-direction: column;      
        }
        .new__subscriptions--container {
            background-color: #f5f6fb;
            padding: 40px 30px 30px 40px;
            display: flex;
            flex-direction: column;
        }
        .new__subscriptions--card-container {
            padding: 20px 20px 40px 0px;
        }
        .user__current__subscriptions--card-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr) );
            grid-gap: 30px;
            padding-top: 20px;
        }
    `,
        <div className='subscriptions__container'>
            <DashboardMenu />
            <div className='user__subscriptions--container'>
                <h1>Your Subscriptions</h1>
                <div className='user__current__subscriptions--card-container'>
                    <UserCurrentSubscription 
                        imageUrl='https://avatars0.githubusercontent.com/u/8108337?s=460&v=4'
                        title='Islam The Way Forward'
                    />
                    <UserCurrentSubscription 
                        imageUrl='https://avatars0.githubusercontent.com/u/8108337?s=460&v=4'
                        title='Daily Dawah'
                    />
                    <UserCurrentSubscription 
                        imageUrl='https://avatars0.githubusercontent.com/u/8108337?s=460&v=4'
                        title='iQuran PRO'
                    />
                    <UserCurrentSubscription 
                        imageUrl='https://avatars0.githubusercontent.com/u/8108337?s=460&v=4'
                        title='Islamic Reminder'
                    />
                    <UserCurrentSubscription 
                        imageUrl='https://avatars0.githubusercontent.com/u/8108337?s=460&v=4'
                        title='Daily Islamic Quotes'
                    />
                    <UserCurrentSubscription 
                        imageUrl='https://avatars0.githubusercontent.com/u/8108337?s=460&v=4'
                        title='ITWF Network'
                    />
                    <UserCurrentSubscription 
                        imageUrl='https://avatars0.githubusercontent.com/u/8108337?s=460&v=4'
                        title='ITWF Network'
                    />
                    <UserCurrentSubscription 
                        imageUrl='https://avatars0.githubusercontent.com/u/8108337?s=460&v=4'
                        title='ITWF Network'
                    />
                    <UserCurrentSubscription 
                        imageUrl='https://avatars0.githubusercontent.com/u/8108337?s=460&v=4'
                        title='ITWF Network'
                    />
                    <UserCurrentSubscription 
                        imageUrl='https://avatars0.githubusercontent.com/u/8108337?s=460&v=4'
                        title='ITWF Network'
                    />
                    <UserCurrentSubscription 
                        imageUrl='https://avatars0.githubusercontent.com/u/8108337?s=460&v=4'
                        title='ITWF Network'
                    />
                   

                </div>
            </div>
            <div className='new__subscriptions--container'>
                <h1>New Reminders</h1> 
                <div className='new__subscriptions--card-container'>
                    <SmallSubscriptionCard 
                        imageUrl='https://avatars0.githubusercontent.com/u/8108337?s=460&v=4'
                        title='ITWF Network'
                    />
                    <SmallSubscriptionCard 
                        imageUrl='https://avatars0.githubusercontent.com/u/8108337?s=460&v=4'
                        title='ITWF Network'
                    />
                    <SmallSubscriptionCard 
                        imageUrl='https://avatars0.githubusercontent.com/u/8108337?s=460&v=4'
                        title='ITWF Network'
                    />
                    <SmallSubscriptionCard 
                        imageUrl='https://avatars0.githubusercontent.com/u/8108337?s=460&v=4'
                        title='ITWF Network'
                    />
                    <SmallSubscriptionCard 
                        imageUrl='https://avatars0.githubusercontent.com/u/8108337?s=460&v=4'
                        title='ITWF Network'
                    />
                    <SmallSubscriptionCard 
                        imageUrl='https://avatars0.githubusercontent.com/u/8108337?s=460&v=4'
                        title='ITWF Network'
                    />
                    <SmallSubscriptionCard 
                        imageUrl='https://avatars0.githubusercontent.com/u/8108337?s=460&v=4'
                        title='ITWF Network'
                    />
              
                </div>
            </div>
        </div>
    )
}

Subscriptions.propTypes = {

}

export default Subscriptions
