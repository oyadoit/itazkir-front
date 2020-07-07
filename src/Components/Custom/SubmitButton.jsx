import React from 'react';
import Style from 'style-it';


function SubmitButton({text, pad, bgCol, onClick}) {
    return Style.it(`
        .submit__button {
            border: none;
            padding: ${pad}
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
