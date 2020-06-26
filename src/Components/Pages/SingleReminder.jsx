import React from "react";
import PropTypes from "prop-types";
import Style from "style-it";
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/react-hooks";

import DashboardMenu from "../Custom/DashboardMenu";
import Header from "../../Components/Custom/Header"
import { Spin } from "antd";

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

  // console.log(data);

  return Style.it(
    `   .single__reminder-container {
            display: flex;
            flex-direction: column;
        }
        .reminder__container {
            margin: 50px 120px ;
            padding: 50px;
            background-color: rgba(63, 61, 86, 0.055);
            min-height: 85vh;
            min-width: 80%;
            word-spacing: 3px;
            line-height: 35px;
            letter-spacing: 0.9px;
            position: relative;
            
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
            <div className="single__reminder-image-container">
              <img className="single__reminder-image" 
              // src="https://cdn.pixabay.com/photo/2018/09/28/19/07/islamic-3710002_960_720.jpg" 
              // src="https://i.pinimg.com/originals/b5/b5/fa/b5b5fab7e29309cf4d34bc3713607704.jpg"
              src= {data.content.imageUrl ? (data.content.imageUrl) : ("https://cdn.pixabay.com/photo/2018/09/28/19/07/islamic-3710002_960_720.jpg")}
              alt="Reminder Image"/>
            </div>

            <div>
              <h1>{data.content.title}</h1>
              <p>{data.content.data}</p>
            </div>

            <br />
            <div className="reminder__footer">
              <Link to="/dashboard/reminders">back</Link>
              <p>
                created by: {data.content.reminder.owner.firstName}{" "}
                {data.content.reminder.owner.lastName}
              </p>
              <p>tag: {data.content.reminder.name}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

SingleReminder.propTypes = {};

export default SingleReminder;
