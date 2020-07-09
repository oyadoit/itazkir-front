import React from "react";
import PropTypes from "prop-types";
import Style from "style-it";
import { Link, Redirect } from "react-router-dom";
import { useLastLocation } from 'react-router-last-location';

import { useQuery, useMutation } from "@apollo/react-hooks";

// import DashboardMenu from "../Custom/DashboardMenu";
import Header from "../../Components/Custom/Header"
import { Spin } from "antd";
import SubmitButton from "../../Components/Custom/SubmitButton";
import { openNotificationWithIcon } from "../../utils/helpers"

import { SINGLE_REMINDER, IS_CREATOR } from "../../graphql/query";
import { DELETE_CONTENT } from "../../graphql/mutation";




const SingleReminder = (props) => {
  const reminderId = props.match.params.reminderId;
  const title = props.match.params.title;
  const ownerId = props.match.params.ownerId;
  // const ownerId;
  // console.log("reminder===" + reminderId + title);

  const lastLocation = useLastLocation();

  const {data: result} = useQuery(IS_CREATOR);

  const [deleteContent, {data: message }] = useMutation(DELETE_CONTENT, {
    variables: {
      id: reminderId,
    },

  })
  

  const { loading, data } = useQuery(SINGLE_REMINDER, {
    variables: {
      id: reminderId,
      title: title,
      ownerId: ownerId,
    },
  });
  
  if(message) {
    openNotificationWithIcon('success', "Delete Successful", `You deleted content: ${title}`)
    return <Redirect to={lastLocation}/>
  }
  if (data) var reminderOwnerId = data.content.reminder.owner.id;
  if(result) var currentUserId = result.currentUser.id;

  const editDeleteButton =  (
      <div style={{display: 'flex', marginBottom: "40px", justifyContent: "space-between"}}>
        <SubmitButton rightLeft="5" pad="5" text="Edit Content" /> <SubmitButton onClick={deleteContent} bgCol="red" text="Delete Content"/>
      </div>)




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
        {
          (data && result && (reminderOwnerId === currentUserId) ? (editDeleteButton) : "")
          
        }
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
              <Link to={lastLocation}>back</Link>
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
