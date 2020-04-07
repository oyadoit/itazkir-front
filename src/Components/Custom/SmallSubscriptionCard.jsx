import React from 'react'
import PropTypes from 'prop-types'
import Style from 'style-it';

import SubscribeButton from '../Custom/SubscribeButton';

const SmallSubscriptionCard = ({imageUrl, title, content, }) => {
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
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 0px;
            
        }
        .small__subscription__card--container {
            display: flex;
            padding: 20px;
            justify-content: space-evenly;
            align-items: center;
            box-shadow: rgba(3, 27, 78, 0.06) 0px 2px 4px;
            margin-bottom: 20px;
            border-radius: 3px;
            border-width: 1px;
            border-style: solid;
            // border-radius: 50px 50px 50px 50px;
            border-color: rgba(0, 0, 0, 0.05);
        }
        .title__content--container {
            margin-right: 15px;
        }
    `,
        <div className='small__subscription__card--container'>
            <img className='card__image' src={imageUrl} alt="Reminder Owner"/>
            <div className='title__content--container'>
                <h2 className='card__title'>{title}</h2>
                <p className='card__text'>{content}</p>
            </div>
            <SubscribeButton text='Subscribe'/>
        </div>
             
    )
}

SmallSubscriptionCard.propTypes = {

}

export default SmallSubscriptionCard

