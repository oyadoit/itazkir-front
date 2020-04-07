import React from 'react';
import Style from 'style-it';


function SubscribeButton(props) {
    return Style.it(`
        .submit__button {
            border: none;
            padding: 8px 12px 8px 12px;
            border-radius: 50px;
            background-color: #31DE28; 
            color: #fff;
            margin-top: 5px;
        }
        .submit__button:hover {
            cursor: pointer;
        }
    `,
    <div>
        <button className='submit__button' type='submit'>{props.text}</button>
    </div>
    )
}

export default SubscribeButton;
