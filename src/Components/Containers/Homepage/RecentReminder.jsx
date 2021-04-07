import React from "react";
import PropTypes from "prop-types";

import ReminderCard from "../../Custom/ReminderCard";
import GetStartedButton from "../../Custom/GetStartedButton";
import { useQuery } from "@apollo/react-hooks";
import { ALL_CONTENTS } from "../../../graphql/query";

const RecentReminder = (props) => {
  const { data, loading } = useQuery(ALL_CONTENTS);
  
    // const colArr = ["rgb(109, 224, 103)", "rgb(238, 174, 56)", "#2f679c"]
  return (
    <div className="recent__reminder--container">
      <h1 className="recent__reminder--heading"> Recent Reminder</h1>
      <div className="recent__reminder--cards">
        {data &&
          data.allContents
            .slice(0, 3)
            .map((each) => (
              <ReminderCard
                title={each.title}
                content={each.data}
                // bgColor={colArr[each.id - 1]}
                key={each.id}
                reminderID={each.id}
                ownerID={each.reminder.owner.id}

              />
            ))}
      </div>
      <h3 className="recent__reminder--text">
        Create an account to start receiving instant reminders you subscribe to
      </h3>
      <h3 className="recent__reminder--button">
        <GetStartedButton
          to="signup"
          className="button__green recent__reminder--button"
        >
          Create Account now
        </GetStartedButton>
      </h3>
    </div>
  );
};

RecentReminder.propTypes = {};

export default RecentReminder;
