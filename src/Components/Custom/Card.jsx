import React from 'react';
import PropTypes from 'prop-types';
import Style from 'style-it';

import GetStartedButton from './GetStartedButton';

const Card = props => {
    return Style.it(`
        .card__container {
            // background-color: #3e3;
            background-color: #fff;
            width: 290px;
            height: 320px;
            margin: 30px;
            padding:20px;
            box-shadow: 0 19px 28px rgba(122, 120, 120, 0.062), 0 10px 10px rgba(122, 120, 120, 0.062);
            display: flex;
            flex-direction:column;
            align-items: center;
            justify-content: space-evenly;
            align-content: center;
            text-align: center;
        }
        .card__container:hover {
            box-shadow: 0 19px 28px rgba(196, 188, 188, 0.068), 0 10px 10px rgba(0,0,0,0.22);
            transition: .3s;
        }
        .fa {
            font-size: 30px;
            // color: gray;
        }
        .card__icon--container {
            background-color: ${props.color};
            // width: auto;
            padding: 10px 13px 10px 13px;
            border-radius: 100px;


        }
        // .card__text--container {
        
        // }
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
                    <GetStartedButton className='header__signup--button'>Get Started</GetStartedButton>
                ) : ('')
            }
            
        </div>
        

    </div>
    
    ) 
}

Card.propTypes = {

}

export default Card
