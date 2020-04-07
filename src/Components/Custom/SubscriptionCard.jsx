import React from 'react';
import PropTypes from 'prop-types';
import Style from 'style-it';

import SubscribeButton from '../Custom/SubmitButton';


const SubscriptionCard = ({bgColor, title, imageUrl, content, firstButton, secondButton, thirdButton }) => {
    return Style.it(`
        .card__container {
            background-color: ${bgColor};
            width: 340px;
            height: 210px;
            border-radius: 2px;
            display: flex;
            padding: 20px;
            
        }
        .card__content--right {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            color: #fff !important;
        }
        .card__image {
            border-radius: 50%;
            width: 50px;
            height: 50px;
            margin-right: 30px;
            margin-top:11px;
        }
        .card__text {
            color: #fff;
        }
        .card__title {
            font-size: 16px;
            font-weight: bold;
            color: #fff;
            
        }
    `,
        <div className='card__container'>
            <div>
                <img className='card__image' src={imageUrl} alt="Reminder Owner"/>
            </div>
            <div className='card__content--right'>
                <h2 className='card__title'>{title}</h2>
                <p className='card__text'>{content}</p>
                <div>
                    <SubscribeButton text='Subscribe'/>
                </div>
            </div>
        </div>
    )
}

SubscriptionCard.propTypes = {

}

export default SubscriptionCard;
