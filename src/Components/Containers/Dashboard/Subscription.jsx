import React from 'react'
import PropTypes from 'prop-types';
import Style from 'style-it';

import SmallSubscriptionCard from '../../Custom/SmallSubscriptionCard';
import SubscribeButton from '../../Custom/SubscribeButton';

const Subscription = props => {
    return Style.it(`
        .subscription__container {
            margin-top: 40px;
            margin-right: 60px;
        }
        .subscription__heading {
            font-size: 33px;
            margin-bottom: 40px;
            // text-align: end;
        }
        .subscription__card--container {            
        }
        .button__container {
            // text-align: end;
            // justify-conter: center;
            // align-items: center;
            margin: auto;
            margin-top: 20px;
        }

    `,
        <div className='subscription__container'>
            <h1 className='subscription__heading'>Subscriptions</h1>
            <div className="subscription__card--container">
                <SmallSubscriptionCard 
                    title='iQuran Pro'
                    content='lorem ispum ispum donor '
                    imageUrl='https://avatars0.githubusercontent.com/u/39632030?s=60&u=17bfe0a10b32f448983358ead04b14382726beca&v=4'
                />
                <SmallSubscriptionCard 
                    title='iQuran Pro'
                    content='lorem ispum ispum donor '
                    imageUrl='https://avatars0.githubusercontent.com/u/39632030?s=60&u=17bfe0a10b32f448983358ead04b14382726beca&v=4'
                />
                <SmallSubscriptionCard 
                    title='iQuran Pro'
                    content='lorem ispum ispum donor '
                    imageUrl='https://avatars0.githubusercontent.com/u/39632030?s=60&u=17bfe0a10b32f448983358ead04b14382726beca&v=4'
                />
                <SmallSubscriptionCard 
                    title='iQuran Pro'
                    content='lorem ispum ispum donor '
                    imageUrl='https://avatars0.githubusercontent.com/u/39632030?s=60&u=17bfe0a10b32f448983358ead04b14382726beca&v=4'
                />

            </div>
            <div className="button__container">
                <SubscribeButton text='View All Subscriptions' />
            </div>
           

        </div>
    )
}

Subscription.propTypes = {

}

export default Subscription
