import React from 'react'
import PropTypes from 'prop-types'
import SmallSubscriptionCard from '../Custom/SmallSubscriptionCard';
import {useQuery } from '@apollo/react-hooks';
import { ALL_REMINDERS } from '../../graphql/query';

const SubscriptionPreview =  () => {
    
    const {loading, data } = useQuery(ALL_REMINDERS)

    if(loading) return <p>loading..</p>
    // if(data) console.log(data)

    return (        
                <div>
                    {
                        data.allReminders.length > 0 ? (data.allReminders.map((singleData) => (
                            <SmallSubscriptionCard 
                                // imageUrl='https://avatars0.githubusercontent.com/u/8108337?s=460&v=4'
                                title={singleData.name}
                                id={singleData.id}
                                key={singleData.id}
                            />  
                        )
                        )) : (<h2>No Reminders available at the moment</h2>)
                    }
                </div>
            )
}

SubscriptionPreview.propTypes = {

}

export default SubscriptionPreview

