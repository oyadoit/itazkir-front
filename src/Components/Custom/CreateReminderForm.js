import React from 'react'
import { useState } from "react";
import Style from 'style-it';


export default function CreateReminderForm(props) {

  const [values, setValues] = useState({
    title: "",
    reminder: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    console.log(values)

  };

  const handleSubmit = (e) => {
    // if (isValid) {
    // }
    e.preventDefault()
  };

  return Style.it(`
  .input__container {
      margin-bottom: 20px;
      width: 100%;
  }
  .input__container > .title {
      margin-right: 10px;
      margin-top: 10%;
  }
  .form__input {
      border: none;
      width: 100%;
      color: rgb(63, 61, 86);
      // font-weight: bold;
      letter-spacing: .8px;
      text-align: center;
  }
`,
    <form className='form__input'>
      <div className='input__container'>
        <input
          className='title'
          type='text'
          placeholder='Remider Title'
          name='title'
          onChange={handleChange}
        />
      </div>

      <div className='input__container'>
        <textarea
          rows="10"
          cols="100"
          name="reminder"
          onChange={handleChange}
        >
        </textarea>
      </div>

      <div className='input__container'>
        <button
          type='submit'
          cols="100"
          name="reminder"
          onSubmit={handleSubmit}
        >Submit
        </button>
      </div>

    </form>
  )
}
