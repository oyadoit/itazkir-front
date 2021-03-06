import React, { useState, useEffect } from "react";

import Header from "./Header";
import Input from "./Input";
import Submit from "./SubmitButton";
import { errorMessage } from "../../utils/helpers";

// import { Upload, message, Button } from "antd";
// import { UploadOutlined } from "@ant-design/icons";

import { useMutation, useQuery } from "@apollo/react-hooks";
import { CREATE_NEW_CONTENT, CREATE_REMINDER } from "../../graphql/mutation";
import { USER_CURRENT_REMINDER, CURRENT_USER_CONTENTS } from "../../graphql/query";
import { set } from "lodash";
// import { values } from "lodash";


const NewContent = () => {
  // let currentUserReminders;
  const [values, setValues] = useState({
    title: '',
    data: '',
    reminderId: 14,
    file: null,
    error: ''
  });



  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };


  const onFileChange = (event) => {
    setValues({
      ...values,
      file: event.target.files[0]
    })
  }

  const handleOnSelect = (event) => {
    const selectedIndex = event.target.options.selectedIndex;
    setValues({
      ...values,
      reminderId: event.target.options[selectedIndex].getAttribute('data-key')
    })
  }


  const { data: currentUserReminders, loading, error: err } = useQuery(CURRENT_USER_CONTENTS, {
    onError({ graphQLErrors, networkError }) {
      if (graphQLErrors)
        graphQLErrors.map((err) => {
          errorMessage("Reminder Name cannot be empty");
        });
      if (networkError)
        errorMessage("An error occured, try again")
    },
  })

  const [createContent, { error, result }] = useMutation(CREATE_NEW_CONTENT, {

    onError({ graphQLErrors, networkError }) {
      if (graphQLErrors)
        graphQLErrors.map((err) => {
          errorMessage("Reminder Name cannot be empty");
        });
      if (networkError) errorMessage("An error occured, try again");
    }
  });

  const validateEntry = () => {
    if (values.data === '' && values.file === null) return values.error = 'Either Reminders body or File has to be filled'
  }

  const submitReminder = (e) => {
    e.preventDefault();
    validateEntry();
    createContent({ variables: values });
  };


  // if (error) console.log(error);
  if (loading) return <h1>loading...</h1>
  const userReminders = currentUserReminders.currentUser.reminderSet
  if (userReminders.length === 1) {
    values.reminderId = userReminders[0].id
  }

  return (

    <div>
      <Header />
      <div className="create__reminder-container ">
        <h1>Your Reminders</h1>
        <div className="reminders__list-container">
          {/* {
            reminder ? reminder.map((eachReminder) => {
            return <h1 key={eachReminder.id}>{eachReminder.name}</h1>
            }) : (
              "You have not created any reminder yet"
            )
          } */}
          <p className="reminder__list-item">ITWF Network</p>
          <p className="reminder__list-item">Islamic Reminder</p>
          <p className="reminder__list-item">Allah is One</p>
          <p className="reminder__list-item">Islamic Network</p>
          <p className="reminder__list-item">Morning Azkar</p>
          <p className="reminder__list-item">Daily Reminder</p>


        </div>
        <form className="create__reminder-form" onSubmit={submitReminder}>
          <Input
            required
            inputType="text"
            name="reminder"
            onChange={handleChange}
            placeholder="Add new reminder"
          />
          <Submit text="Add Reminder" />
        </form>
      </div>


      <form id="newContentForm" onSubmit={submitReminder} encType="multipart/form-data">
        <div className="new__reminder-container">
          <div className="create__content-heading-container">
            <h1 className="create__content-heading">Create Content for:</h1>
            {
              (userReminders && userReminders.length === 1)
                ?
                <h1 className="" value={userReminders[0].name} data-key={userReminders[0].id}>&nbsp; {userReminders[0].name}</h1>
                :
                <select className="reminder__selector" name="reminders" onChange={handleOnSelect} >
                  <option defaultValue>Choose...</option>
                  {userReminders && userReminders.map(userReminder => (
                    <option key={userReminder.id} className="reminder__option" value={userReminder.name} data-key={userReminder.id} id={userReminder.id}>{userReminder.name}</option>
                  ))}
                </select>
            }
          </div>

          <p>{(values.error) ? values.error : ''}</p>
          <Input
            inpuType="text"
            name="title"
            required
            placeholder="Enter Title Here"
            onChange={handleChange}
          />
          <textarea
            className="reminder_textarea"
            placeholder="Enter content here"
            name="data"
            // cols="140"
            onChange={handleChange}
            rows="12"
          ></textarea>
          <input
            className="reminder__image-upload"
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
            onChange={onFileChange}
          />

          <br />

          <Submit text="Create Reminder" />
        </div>
      </form>

    </div>
  );
};

export default NewContent;
