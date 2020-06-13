import React from "react";
import PropTypes from "prop-types";
import Style from "style-it";
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/react-hooks";

import DashboardMenu from "../Custom/DashboardMenu";
import { Spin } from "antd";

import { SINGLE_REMINDER } from "../../graphql/query";

const SingleReminder = (props) => {
  const reminderId = props.match.params.reminderId;
  const title = props.match.params.title;
  console.log("reminder===" + reminderId + title);

  const { loading, data } = useQuery(SINGLE_REMINDER, {
    variables: {
      id: reminderId,
      title: title,
    },
  });

  console.log(data);

  return Style.it(
    `   .single__reminder-container {
            display: flex;
        }
        .reminder__container {
            margin: 50px 50px 50px 20px;
            padding: 40px;
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
  `,
    <div className="single__reminder-container">
      <DashboardMenu />
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
