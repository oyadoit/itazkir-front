import React from 'react'
import PropTypes from 'prop-types'
import SmallSubscriptionCard from '../Custom/SmallSubscriptionCard';

const SubscriptionPreview =  () => {
    return (
        // <div>
            <div class="subscription-container">
                <h2 class="subscription-title">Latest Subscriptions </h2>
                <div>
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
        // </div>
    )
}

SubscriptionPreview.propTypes = {

}

export default SubscriptionPreview

