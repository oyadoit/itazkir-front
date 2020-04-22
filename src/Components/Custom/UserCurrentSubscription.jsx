import React from 'react'
import PropTypes from 'prop-types'
import Style from 'style-it';

import SubscribeButton from './SubscribeButton';

const UserCurrentSubscription = ({imageUrl, title, content, }) => {
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
            box-shadow: 10px 10px 42px -35px rgba(0, 0, 0, 0.31);
            margin-bottom: 10px;
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
                <h4 className='card__title'>{title}</h4>
                
            </div>
            <SubscribeButton text='Unsubscribe'/>
            
        </div>
             
    )
}

UserCurrentSubscription.propTypes = {

}

export default UserCurrentSubscription

