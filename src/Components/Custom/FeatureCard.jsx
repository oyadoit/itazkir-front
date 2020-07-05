import React from 'react';
import PropTypes from 'prop-types';
import Style from 'style-it';

import GetStartedButton from './GetStartedButton';

const FeatureCard = props => {
    return Style.it(`
        .card__container {
            background-color: #fff;
            max-width: 270px;
            height: 320px;
            padding:20px;
            display: flex;
            box-shadow:
            0  5px 10px rgba(154,160,185,0.05),
            0 15px 40px rgba(166,173,201,0.2);
            flex-direction:column;
            align-items: center;
            justify-content: space-evenly;
            align-content: center;
            text-align: center;
            transition: all .2s ease-in-out;
        }
        .card__container:hover {
            transform: scale(1.08);
            
        }
        .fa {
            font-size: 30px;
            color: rgb(63, 61, 86);
        }
        .card__icon--container {
            background-color: ${props.color};
            padding: 10px 13px 10px 13px;
            border-radius: 100px;


        }
        .card__text--header {
            font-weight: bold;
            font-size: 17px;
        }
        .card__text--content {
            font-weight: 400;
            font-size: 15px;
        }
    `,
    <div className='card__container'>
        <div className='card__icon--container'>
            {props.children}
        </div>
        <div className='card__text--container'>
            <p className='card__text--header'>{props.header}</p>
            <p className='card__text--content'>{props.content}</p>
        </div>
        <div>
            {
                props.withButton ? (
                    <GetStartedButton to='/signup' className='button__green'>Get Started</GetStartedButton>
                ) : ('')
            }
            
        </div>
        

    </div>
    
    ) 
}

FeatureCard.propTypes = {

}

export default FeatureCard
