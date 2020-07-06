import React from "react";
import PropTypes from "prop-types";
import Style from "style-it";

import { textContentReducer } from "../../utils/helpers";
import { initialGetters } from "../../utils/helpers";

// import GetStartedButton from '../Custom/GetStartedButton'
import { Link } from "react-router-dom";
import { DeleteFilled } from "@ant-design/icons";
import { Avatar } from "antd";

const SmallReminderCard = ({
  bgColor,
  title,
  imageUrl,
  tag,
  id,
  by,
  content,
}) => {
  return Style.it(
    `
        .card__container {
            background-color: ${bgColor};
            width: 230px;
            height: 155px;
            margin-bottom: 10px;
            display: flex;
            padding: 18px 8px 10px 12px;
            border-radius: 20px;
            margin-bottom: 50px;
            
        }
        .card__content--right {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            // color: rgb(63, 61, 86); !important;
        }
        .card__text {
            font-size: 12px;
            width: 100%;
        }
        .card__title {
            font-size: 14px;
            font-weight: bold;
        }
        .reminder__details-container {
            
        }
        .reminder__name {
            margin-bottom: 0px !important;
            font-size: 10px;
            color: #31DE28;
        }
        .reminder__owner {
            margin-bottom: 0px !important;
            font-size: 10px;
            color: #31DE28;
        }
    `,

    <div className="card__container">
      <div>

        <Avatar
          style={{
            // backgroundColor: "#31DE28",
            color: "#fff",
            fontWeight: "bold",
            verticalAlign: "middle",
            marginRight: "10px",
            marginTop: "3px",
          }}
          size="large"
        >
          {initialGetters(by)}
        </Avatar>
      </div>
      <div className="card__content--right">
        <Link to={`/dashboard/reminders/${id}/${title}`}>
          <h2 className="card__title">{textContentReducer(title, 20)}</h2>
        </Link>
        {/* <Link to={`/dashboard/reminders/${id}/${title}`}> */}
          <p className="card__text">{textContentReducer(content, 50)}</p>
        {/* </Link> */}
        <div className="reminder__details-container">
          <p className="reminder__name">Tag: {textContentReducer(tag, 20)}</p>
          <p className="reminder__owner">By: {textContentReducer(by, 20)}</p>
        </div>
        <span><DeleteFilled style={{color: "red", position: "absolute", bottom: "10px", right:5, }}/></span>
      </div>
    </div>
  );
};

SmallReminderCard.propTypes = {};

export default SmallReminderCard;
