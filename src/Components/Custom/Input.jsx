import React from 'react';
import Style from 'style-it';

function Input({placeholder, onChange, name, value,  inputType}) {


    return Style.it(`
        .input__container {
            margin-bottom: 20px;
            width: 100%;
        }
        .input__container:first-child {
            margin-right: 10px;
        }
        .form__input {
            border: none;
            border-bottom: 1px solid rgba(49, 222, 40, 0.664);
            padding: 8px;
            padding-left: 2px;
            width: 100%;
            color: rgb(63, 61, 86);
            // font-weight: bold;
            letter-spacing: .8px;
        }
    `,
    <div className='input__container'>
        <input 
            className='form__input' 
            type={inputType} 
            value={value} 
            placeholder={placeholder} 
            name={name}
            onChange={onChange}
            />
            
    </div>
    )
}

export default Input;
