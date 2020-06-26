import React from 'react'
import PropTypes from 'prop-types';
import Style from 'style-it';

import GetStartedButton from '../Custom/GetStartedButton'


const ReminderCard = ({bgColor, title, imageUrl, content, firstButton, secondButton, thirdButton }) => {
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
            color: #fff !important;
            
        }
        @media only screen and (max-width: 356px) {
            .card__container {
                width: 270px !important;
                padding: 8px;
            }
            .card__image {
                margin-right: 10px;
            }
            .card__text{
                margin-bottom: 0px;
            }
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
                    <GetStartedButton 
                        className={firstButton? 'first-button' : (secondButton ? 'second-button' : 'third-button')}
                        to="/signup"
                    >
                        View All
                    </GetStartedButton>
                </div>
            </div>
        </div>
    )
}

ReminderCard.propTypes = {

}

export default ReminderCard;
