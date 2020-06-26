import React, { useState } from "react";

import Header from "./Header";
import Input from "./Input";
import Submit from "./SubmitButton";
import { errorMessage } from "../../utils/helpers";

// import { Upload, message, Button } from "antd";
// import { UploadOutlined } from "@ant-design/icons";

import { useMutation, useQuery } from "@apollo/react-hooks";
import { CREATE_CONTENT, CREATE_REMINDER } from "../../graphql/mutation";
import { USER_CURRENT_REMINDER } from "../../graphql/query";
// import { values } from "lodash";

const NewContent = () => {
  const [values, setValues] = useState({});

  //   const [reminder, setReminder] = useState({
  //     name: ''
  // })

  // const [createContent, { result }] = useMutation(CREATE_CONTENT, {
  //     variables: {
  //         values: values.title,
  //         values: values.content,
  //         // reminderId: 3
  //     }
  // });

  // const {data: reminder, loading} = useQuery(USER_CURRENT_REMINDER, {
  //   onError({ graphQLErrors, networkError }) {
  //     if (graphQLErrors)
  //       graphQLErrors.map((err) => {
  //         errorMessage("Reminder Name cannot be empty");
  //       });
  //     if (networkError)
  //       errorMessage("An error occured, try again")
  //   },
  // })

  const [createReminder, { error, data }] = useMutation(CREATE_REMINDER, {
    variables: {
      name: values.reminder,
    },
    onError({ graphQLErrors, networkError }) {
      if (graphQLErrors)
        graphQLErrors.map((err) => {
          errorMessage("Reminder Name cannot be empty");
        });
      if (networkError) errorMessage("An error occured, try again");
    },
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const submitReminder = (e) => {
    e.preventDefault();
    createReminder();
  };


  if (error) console.log(error);
  // if (loading) return <h1>loading...</h1>
  // if(data) console.log(data)

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


      <div className="new__reminder-container">
        <div className="create__content-heading-container">
          <h1 className="create__content-heading">Create Content for</h1>
          <select className="reminder__selector" name="reminders" >
            <option className="reminder__option" value="ITWF NETWORK" id="id">ITWF Network</option>
            <option className="reminder__option" value="Muslim PRO">Muslim PRO</option>
            <option className="reminder__option" value="Islamic Reminder">Islamic Reminder</option>
            <option className="reminder__option" value="Morning Azkar">Morning Azkar</option>
          </select>
        </div>

        <form>
          <Input
            inpuType="text"
            name="title"
            placeholder="Enter Title Here"
            onChange={handleChange}
          />
          <textarea
            className="reminder_textarea"
            placeholder="Enter content here"
            name="content"
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
          />

          <br />

          <Submit text="Create Reminder" />
        </form>
      </div>
    </div>
  );
};

export default NewContent;
