import React from 'react'
import PropTypes from 'prop-types'
import Style from 'style-it';

import {textContentReducer} from '../../utils/helpers'

import SubscribeButton from '../Custom/SubscribeButton';
import { errorMessage } from '../../utils/helpers'

import { useMutation } from '@apollo/react-hooks'
import { SUBSCRIBE } from '../../graphql/mutation'
import { CURRENT_USER_SUBSCRIPTIONS } from '../../graphql/query'

const SmallSubscriptionCard = ({imageUrl, title, id }) => {
    const [Subscribe, {loading }] = useMutation(SUBSCRIBE, {
        variables: { reminderId: id },
        update(proxy, result) {
            const data = proxy.readQuery({
                query: CURRENT_USER_SUBSCRIPTIONS
            });
                 
            data.userSubscriptions = [result.data.createSubscription, ...data.userSubscriptions ];
            proxy.writeQuery({ query: CURRENT_USER_SUBSCRIPTIONS, data});
        },
        onError({graphQLErrors, networkError}){
            if (graphQLErrors) graphQLErrors.map(err => {errorMessage('You can only subscribe once')})  

            if (networkError) errorMessage("You are not connected to the internet");
            
        },

    })
    // console.log(id)

    // if(loading) return <p>loading..</p>
    // if(data) console.log(data)

    return Style.it(`
        .card__image {
            border-radius: 50%;
            width: 50px;
            height: 50px;
            margin-right: 20px;
        }
        .card__text {
            margin-bottom: 0px;
        }
        .card__title {
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 0px;
            
        }
        .small__subscription__card--container {
            display: flex;
            padding: 20px;
            justify-content: space-evenly;
            align-items: center;
            // box-shadow: rgba(3, 27, 78, 0.06) 0px 2px 4px;
            box-shadow: 10px 10px 42px -35px rgba(0, 0, 0, 0.31);
            margin-bottom: 20px;
            border-radius: 3px;
            background-color: #fff;

        }
        .title__content--container {
            margin-right: 15px;
        }
    `,
        <div className='small__subscription__card--container'>
            <img className='card__image' src={imageUrl} alt="Reminder Owner"/>
            <div className='title__content--container'>
                <h4 className='card__title'>{textContentReducer(title,18)}</h4>
                {/* <p className='card__text'>{content}</p> */}
            </div>
            <SubscribeButton 
                text='Subscribe'
                onClick={Subscribe}
            />
            
        </div>
             
    )
}

SmallSubscriptionCard.propTypes = {

}

export default SmallSubscriptionCard

