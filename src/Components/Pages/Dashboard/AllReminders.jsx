import React from "react";
import PropTypes from "prop-types";
import Style from "style-it";

import { Spin } from "antd";
import DashboardMenu from "../../Custom/DashboardMenu";
import SmallReminderCard from "../../Custom/SmallReminderCard";
import SearchBar from "../../Custom/SearchBar";
import { USER_CONTENTS } from "../../../graphql/query";

import { saveState} from "../../../utils/localStorage"

import { useQuery } from "@apollo/react-hooks";

const AllReminders = (props) => {

  const { loading, data } = useQuery(USER_CONTENTS);

  
  //   if (loading) return <p>loading..</p>;
  // if (data) console.log(data);
  // let savedState = saveState(data)

  return Style.it(
    `
        .all__reminders--page {
            display: grid;
            grid-template-columns: 200px 1fr;
            grid-gap: 20px;
            min-height: 100vh !important;
        }
        .all__reminders--container {
            background-color: #f5f6fb;
            padding: 30px;
        }
        .all__reminders--card-container {
            display: grid;
            grid-gap: 30px;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr) );
        }
        .empty__content-message {
            margin: auto !important;
            margin-top: 100px !important;
        }
    `,
    <div className="all__reminders--page">
      <DashboardMenu />
      <div className="all__reminders--container">
        <h1>All Reminders</h1>
        <SearchBar />

        {loading ? (
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
          <div className="all__reminders--card-container">
            {data.userContents && data.userContents.length > 0 ? (
              data.userContents
              .sort((a,b)=> (a.id > b.id) ? -1: 1)
              .map((eachContent) => (
                <SmallReminderCard
                  title={eachContent.title}
                  content={eachContent.data}
                  bgColor="#fff"
                  tag={eachContent.reminder.name}
                  by={`${eachContent.reminder.owner.firstName}  ${eachContent.reminder.owner.lastName}`}
                  // imageUrl="https://avatars0.githubusercontent.com/u/39632030?s=60&u=17bfe0a10b32f448983358ead04b14382726beca&v=4"
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
      </div>
    </div>
  );
};

AllReminders.propTypes = {};

export default AllReminders;
