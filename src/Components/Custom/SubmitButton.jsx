import React from 'react';
import Style from 'style-it';


function SubmitButton({text,rightLeft, pad, bgCol, onClick}) {
    return Style.it(`
        .submit__button {
            border: none;
            padding-right: ${rightLeft || '0px'};
            padding-left: ${rightLeft || '0px'};
            padding: ${pad || 0}px;
            border-radius: 2px;
            background-color: ${bgCol ||"#31DE28"};
            color: #fff;
            margin-top: 5px;
            
        }
        .submit__button:hover {
            cursor: pointer;
        }
    `,
    <div>
        <button onClick={onClick} className='submit__button' type='submit'>{text}</button>
    </div>
    )
}

export default SubmitButton;
