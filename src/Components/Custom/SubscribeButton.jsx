import React from 'react';
import Style from 'style-it';


function SubscribeButton(props) {

    const bgColor = (props.text == "SUBSCRIBE") ? "#31DE28" : (props.text == "SUBSCRIBED" ? "#33b92c79" : "" )
    return Style.it(`
        .submit__button {
            border: none;
            padding: 8px;
            border-radius: 3px;
            background-color: ${bgColor}; 
            color: #fff;
            // margin-top: 5px  #33b92c79;
        }
        .submit__button:hover {
            cursor: pointer;
        }
    `,
        <button  onClick={props.onClick} className='submit__button' type='submit'>{props.text}</button>
    )
}

export default SubscribeButton;
