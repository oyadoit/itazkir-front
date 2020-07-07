import React from "react";
import PropTypes from "prop-types";
import Style from "style-it";
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/react-hooks";

import DashboardMenu from "../Custom/DashboardMenu";
import Header from "../../Components/Custom/Header"
import { Spin } from "antd";
import SubmitButton from "../../Components/Custom/SubmitButton";

import { SINGLE_REMINDER } from "../../graphql/query";

const SingleReminder = (props) => {
  const reminderId = props.match.params.reminderId;
  const title = props.match.params.title;
  // console.log("reminder===" + reminderId + title);

  const { loading, data } = useQuery(SINGLE_REMINDER, {
    variables: {
      id: reminderId,
      title: title,
    },
  });

  if(!loading && data){
    let reminderOwner = data.content.reminder.owner.id;
    console.log(reminderOwner);
  }
  
  

  console.log(data);

  return Style.it(
    `   .single__reminder-container {
            display: flex;
            flex-direction: column;
        }
        .reminder__container {
            margin: 50px 100px ;
            padding: 50px;
            background-color: rgba(63, 61, 86, 0.055);
            min-height: 85vh;
            min-width: 80%;
            word-spacing: 3px;
            line-height: 35px;
            letter-spacing: 0.9px;
            position: relative;
            
        }
        @media only screen and (max-width: 960px) {
          .reminder__container {
            margin: 50px 50px;
          }
          .created__by, .tag {
            font-size: 12px;
          }
        }
        @media only screen and (max-width: 625px) {
          .reminder__container {
            line-height: 28px;
            margin: 0px 0px;
            padding: 20px;
          }
          .reminder__footer {
            margin-right: 25px !important;
          }
          .single__reminder-heading {
            font-size: 18px;
          }
          .single__reminder-content {
            font-size: 14px;
          }
          .created__by, .tag {
            font-size: 10px;
          }
          .single__reminder--content-container {
            margin-bottom: 30px;
          }
        }
        .reminder__footer {
          position: absolute; 
          bottom: 0px;
          width: -webkit-fill-available;
          margin-right: 100px;
          display: flex;
          justify-content: space-between;
        }
        p {
            font-size: 18px;
        }
        .single__reminder-image-container {
          margin-bottom: 40px;
        }
        .single__reminder-image {
          width: 100%;
        }
        
        

  `,
    <div className="single__reminder-container">
      <Header />
     
      <div className="reminder__container">
        <div style={{display: 'flex', marginBottom: "40px", justifyContent: "space-between"}}>
          <SubmitButton text="Edit Content" /> <SubmitButton bgCol="red" text="Delete Content"/>
        </div>
        {loading ? (
          <div
            style={{
              margin: "Auto",
              width: "100% !important",
              marginTop: "60px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spin size="large" />
          </div>
        ) : (
          <>
          {
            data.content && data.content.contentImage ? ( <div className="single__reminder-image-container">
            <img className="single__reminder-image"  src= {data.content.contentImage}
            alt="Reminder Image"/>
          </div>) : ("")
          }

            <div className="single__reminder--content-container">
              <h1 className="single__reminder-heading">{data.content.title}</h1>
              <p className="single__reminder-content">{data.content.data}</p>
            </div>

            <br />
            <div className="reminder__footer">
              <Link to="/dashboard/reminders">back</Link>
              <p className="created__by">
                 by:{data.content.reminder.owner.firstName}{" "}
                {data.content.reminder.owner.lastName}
              </p>
              <p className="tag">tag:{data.content.reminder.name}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

SingleReminder.propTypes = {};

export default SingleReminder;
