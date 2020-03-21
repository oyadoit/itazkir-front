import React from 'react';
import Style from 'style-it';

function Input({htmlFor, width, placeholder, inputName, inputType}) {
    return Style.it(`
        .input__container {
            margin-bottom: 30px;
            width: 100%;
        }
        .form__input {
            border: none;
            border-bottom: 1px solid rgba(49, 222, 40, 0.664);
            padding: 8px;
            padding-left: 0px;
            width: 100%;
            color: rgb(63, 61, 86);
            // font-weight: bold;
            letter-spacing: .8px;
        }
        .form__input:focus {
            // background-color: green;
        }
    `,
    <div className='input__container'>
        <input className='form__input' type={inputType} placeholder={placeholder} name={inputName}/>
    </div>
    )
}

export default Input;
