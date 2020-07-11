import React, { useState, useEffect } from "react";

import { Redirect } from "react-router-dom";
import Header from "./Header";
import Input from "./Input";
import Submit from "./SubmitButton";
import DashboardMenu from "../Custom/DashboardMenu";
import Style from "style-it";
import { useLastLocation } from "react-router-last-location";

import { openNotificationWithIcon } from "../../utils/helpers";

import { useMutation, useQuery } from "@apollo/react-hooks";
import { CREATE_NEW_CONTENT, CREATE_REMINDER } from "../../graphql/mutation";
import {
  USER_CURRENT_REMINDER,
  CURRENT_USER_CONTENTS,
} from "../../graphql/query";
import { set } from "lodash";
// import { values } from "lodash";

const NewContent = () => {
  // let currentUserReminders;
  const [values, setValues] = useState({
    title: "",
    data: "",
    reminderId: 14,
    file: null,
    error: "",
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
      file: event.target.files[0],
    });
  };

  const handleOnSelect = (event) => {
    const selectedIndex = event.target.options.selectedIndex;
    setValues({
      ...values,
      reminderId: event.target.options[selectedIndex].getAttribute("data-key"),
    });
  };

  const { data: currentUserReminders, loading, error: err } = useQuery(
    CURRENT_USER_CONTENTS,
    {
      onError({ graphQLErrors, networkError }) {
        if (graphQLErrors)
          graphQLErrors.map((err) => {
            openNotificationWithIcon(
              "warning",
              "warning message",
              "Reminder Name cannot be empty"
            );
          });
        if (networkError)
          openNotificationWithIcon(
            "error",
            "An error occured, please try again"
          );
      },
    }
  );

  const [createContent, { error, data }] = useMutation(CREATE_NEW_CONTENT, {
    onError({ graphQLErrors, networkError }) {
      if (graphQLErrors)
        graphQLErrors.map((err) => {
          openNotificationWithIcon(
            "warning",
            "Warning message",
            "You need to choose a reminder"
          );
        });
      if (networkError)
        openNotificationWithIcon(
          "error",
          "Error message",
          "An error occured, try again"
        );
    },
  });

  const validateEntry = () => {
    if (values.data === "" && values.file === null)
      openNotificationWithIcon(
        "error",
        "Error occured",
        "Either Reminder content or image File has to be filled"
      );
    return;
  };

  const submitReminder = (e) => {
    e.preventDefault();
    validateEntry();
    createContent({ variables: values });
    
    if(data && currentUserReminders) {    
      openNotificationWithIcon("success",  "Created Successfully",  "Your new content has been created successfully");
      e.target.reset();
    }
    
    
  };

  const userReminders = currentUserReminders.currentUser.reminderSet;
  if (userReminders.length === 1) {
    values.reminderId = userReminders[0].id;
  }

  


  return Style.it(
    `
    .container {
      display: flex;
    }
    .form_container {
      width:  -webkit-fill-available;
    }

  `,

    <div className="container">
      {/* <Header /> */}
      <DashboardMenu />
      <div className="form_container">
        <form
          id="newContentForm"
          onSubmit={submitReminder}
          encType="multipart/form-data"
        >
          <div className="new__reminder-container">
            <div className="create__content-heading-container">
              <h1 className="create__content-heading">Create Content for:</h1>
              {userReminders && userReminders.length === 1 ? (
                <h1
                  className=""
                  value={userReminders[0].name}
                  data-key={userReminders[0].id}
                >
                  &nbsp; {userReminders[0].name}
                </h1>
              ) : (
                <select
                  className="reminder__selector"
                  name="reminders"
                  onChange={handleOnSelect}
                >
                  <option defaultValue>Choose...</option>
                  {userReminders &&
                    userReminders.map((userReminder) => (
                      <option
                        key={userReminder.id}
                        className="reminder__option"
                        value={userReminder.name}
                        data-key={userReminder.id}
                        id={userReminder.id}
                      >
                        {userReminder.name}
                      </option>
                    ))}
                </select>
              )}
            </div>

            <p>{values.error ? values.error : ""}</p>
            <input
              className="reminder_title"
              type="text"
              name="title"
              required
              placeholder="Enter Title Here"
              onChange={handleChange}
            />
            <textarea
              className="reminder_textarea"
              placeholder="Enter content here"
              name="data"
              onChange={handleChange}
              rows="15"
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

            <Submit pad="10" text="Create Reminder" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewContent;
