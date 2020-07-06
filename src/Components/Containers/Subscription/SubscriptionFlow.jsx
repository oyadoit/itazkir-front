import React from "react";
import PropTypes from "prop-types";
import Style from "style-it";
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/react-hooks";

import {
  ALL_REMINDERS,
  CURRENT_USER_SUBSCRIPTIONS,
} from "../../../graphql/query";

// components
import SubscriptionCard from "../../Custom/SubscriptionCard";
import { Spin } from "antd";

const SubscriptionFlow = () => {
  const { loading: isLoading, data: userSubs } = useQuery(
    CURRENT_USER_SUBSCRIPTIONS
  );
  let userSubscriptions;

  const userSubsArr = [];
  if (!isLoading) {
    userSubscriptions = userSubs.userSubscriptions;
    userSubscriptions.map((oneUser) => {
      userSubsArr.push(oneUser.reminder.id);
    });
  }

  const { data, loading } = useQuery(ALL_REMINDERS);

  return Style.it(
    `
    
    `,
    <div className="subscription__flow--container">
      <h1 className="subscription__heading">
        Stay updated with topics you care about the most
      </h1>
      <h3 className="subscription__text">
        Subscribe to your choice of reminder,{" "}
        <span className="unsubscribe__span">Unsubscribe</span> at any time.{" "}
      </h3>
      <div className="reminder__subscription--container">
        {loading && !data ? (
          <div
            style={{
              margin: "Auto",
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
            {data.allReminders.length > 0 ? (
              data.allReminders.slice(0, 8).map((eachReminder) => {
                let btnVal = "SUBSCRIBE";
                let subColor = "#31DE28"
                if (userSubsArr.includes(eachReminder.id))
                    btnVal = "SUBSCRIBED";
                    subColor = "#33b92c79"
                return (
                  <SubscriptionCard
                    title={eachReminder.name}
                    content={eachReminder.name}
                    bgColor="rgb(109, 224, 103)"
                    key={eachReminder.id}
                    id={eachReminder.id}
                    datas={userSubscriptions}
                    btnVal={btnVal}
                    subColor={subColor}
                  />
                );
              })
            ) : (
              <h2>No Reminders available at the moment</h2>
            )}
          </>
        )}
      </div>

      <Link className="save__continue" to="/dashboard">
        Save and Continue
      </Link>
    </div>
  );
};

SubscriptionFlow.propTypes = {};

export default SubscriptionFlow;
