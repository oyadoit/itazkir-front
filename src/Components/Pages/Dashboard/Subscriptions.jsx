import React from 'react'
import PropTypes from 'prop-types'
import Style from 'style-it'

import DashboardMenu from '../../Custom/DashboardMenu';
import SmallSubscriptionCard from '../../Custom/SmallSubscriptionCard';
import UserCurrentSubscription from '../../Custom/UserCurrentSubscription'

import { useQuery } from '@apollo/react-hooks'
import { CURRENT_USER_SUBSCRIPTIONS } from '../../../graphql/query';
// import { ALL_REMINDERS } from '../../../graphql/query';
import SubscriptionPreview from '../../Custom/SubscriptionPreview';

const Subscriptions = props => {

    const {loading, data } = useQuery(CURRENT_USER_SUBSCRIPTIONS)
    

    if(loading) return <p>loading..</p>
    if(data) console.log(data)

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
            min-height: 100vh !important;    
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
        .empty_message {
            // text-align: center;
            margin: auto;

        }
    `,
        <div className='subscriptions__container'>
            <DashboardMenu />
            <div className='user__subscriptions--container'>
                <h1>Your Subscriptions</h1>
                <div className='user__current__subscriptions--card-container' >
                    {
                    
                        data.userSubscriptions && data.userSubscriptions.length > 0 ? (data.userSubscriptions.map((eachSubscription) => (
                            
                                <UserCurrentSubscription 
                                    imageUrl='https://avatars0.githubusercontent.com/u/8108337?s=460&v=4'
                                    title={eachSubscription.reminder.name}
                                    key={eachSubscription.reminder.id}
                                />
                          
                    
                        ))) : (<h1 className='empty_message'>You have no subscriptions yet</h1>)
                    }
                </div>  
            </div>
            <div className='new__subscriptions--container'>
                <h1>New Reminders</h1> 
                <div className='new__subscriptions--card-container'>
                   <SubscriptionPreview />
                </div>
            </div>
        </div>
    )
}

Subscriptions.propTypes = {

}

export default Subscriptions
