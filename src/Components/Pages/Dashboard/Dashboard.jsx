import React, { useState } from "react";
import PropTypes from "prop-types";
import Style from "style-it";
import { Link } from "react-router-dom";

import { useQuery, useApolloClient } from "@apollo/react-hooks";
import { USER_CONTENTS } from "../../../graphql/query";

import { Spin } from "antd";
import DashboardMenu from "../../Custom/DashboardMenu";
import SearchBar from "../../Custom/SearchBar";
import ProfilePreview from "../../Custom/ProfilePreview";
import SubscriptionPreview from "../../Custom/SubscriptionPreview";
import SmallReminderCard from "../../Custom/SmallReminderCard";

// import Header from "../../Custom/Header";


const Dashboard = (props) => {
  
  const { loading, data } = useQuery(USER_CONTENTS);

  return Style.it(
    `
    .dashboard__container {
        display: grid;
        grid-template-columns: 200px 1fr 315px;
        grid-gap: 25px;
        min-height: 100vh;
        
      }

      
      .content {
        grid-column-start: 2;
        background-color: #f5f6fb;
        padding: 32px;
      }
      
      .profile {
        grid-column-start: 3;
        background-color: #f5f6fb;
      }     
      .section-title {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }
      
      .section-actions > svg {
        color: #a7aab9;
      }
      
      .main-content {
        margin-top: 20px;
      }
      
      .section {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr) );
        grid-gap: 5px;
      }
      .same__row {
        display:flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
      }       
    `,
    <div>
      {/* <Header /> */}
      <div className="dashboard__container">
        <DashboardMenu />

        <div className="content">
          <SearchBar />

          <div className="main-content">
            <div className="same__row">
              <h1>Recent Reminders</h1>
              <Link to="/dashboard/reminders">View All</Link>
            </div>

            <>
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
                <div className="reminders__preview-container section">
                  {data.userContents && data.userContents.length > 0 ? (
                    data.userContents
                      .slice(Math.max(data.userContents.length - 6, 0))
                      .sort((a, b) => (a.id > b.id ? -1 : 1))
                      .map((eachContent) => (
                        <SmallReminderCard
                          title={eachContent.title}
                          content={eachContent.data}
                          bgColor="#fff"
                          tag={eachContent.reminder.name}
                          by={`${eachContent.reminder.owner.firstName}  ${eachContent.reminder.owner.lastName}`}
                          imageUrl="https://avatars0.githubusercontent.com/u/39632030?s=60&u=17bfe0a10b32f448983358ead04b14382726beca&v=4"
                          key={eachContent.id}
                          id={eachContent.id}
                        />
                      ))
                  ) : (
                    <h2 className="empty__content-message">
                      No Reminders Available yet, subscribe to start receiving
                      reminders
                    </h2>
                  )}
                </div>
              )}
            </>
          </div>
        </div>

        <div className="profile">
          <ProfilePreview />

          <div className="subscription-container">
            <h2 className="subscription-title">New Subscriptions </h2>
            <SubscriptionPreview />
          </div>
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
