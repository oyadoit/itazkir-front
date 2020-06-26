import React, { useState } from "react";

import Header from "./Header";
import Input from "./Input";
import Submit from "./SubmitButton";
import { errorMessage } from "../../utils/helpers"

import { Upload, message, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

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

  const [createReminder, { error, data }] = useMutation(
    CREATE_REMINDER,
    {
      variables: {
        name: values.reminder
      },
      onError({ graphQLErrors, networkError }) {
        if (graphQLErrors)
          graphQLErrors.map((err) => {
            errorMessage("Reminder Name cannot be empty");
          });
        if (networkError) 
          errorMessage("An error occured, try again")
      },
    }
  );



  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const submitReminder =(e) => {
    e.preventDefault();
    createReminder()
  }

  const props = {
    name: "file",
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    progress: {
      strokeColor: {
        "0%": "#108ee9",
        "100%": "#87d068",
      },
      strokeWidth: 3,
      format: (percent) => `${parseFloat(percent.toFixed(2))}%`,
    },
  };

  if (error) console.log(error)
  // if (loading) return <h1>loading...</h1>
  // if(data) console.log(data)

  return (
    <div>
      <Header />
      <div className="reminder__container ">
        <h1>Your Reminders</h1>
        {/* <div className="reminders__container">
          {
            reminder ? reminder.map((eachReminder) => {
            return <h1 key={eachReminder.id}>{eachReminder.name}</h1>
            }) : (
              "You have not created any reminder yet"
            )
          }
        </div> */}
        <form className="create__reminder-form" onSubmit={submitReminder}>
          <Input required inputType="text" name="reminder" onChange={handleChange} />
          <Submit text="Add Reminder"/>
        </form>
      </div>

      <div className="new__reminder-container">
        <div>
          <h1>Create Content for</h1>
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
          {/* <Upload {...props}>
            <Button>
              <UploadOutlined /> Click to Upload an image
            </Button>
          </Upload> */}
          <br />

          <Submit text="Create Reminder" />
        </form>
      </div>
    </div>
  );
};

export default NewContent;
