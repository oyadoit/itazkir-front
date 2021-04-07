import React from "react";
import PropTypes from "prop-types";
import Style from "style-it";

import GetStartedButton from "../Custom/GetStartedButton";
import { Avatar } from "antd";

import { initialGetters, textContentReducer } from "../../utils/helpers";

const ReminderCard = ({
  bgColor,
  title,
  content,
  reminderID,
  ownerID,
  firstButton,
  secondButton,
  thirdButton,
}) => {
  return Style.it(
    `
        .card__container {
            // background-color: ${bgColor};
            background-color: rgba(75, 209, 68, 0.733);
            width: 300px;
            height: 190px;
            border-radius: 2px;
            display: flex;
            padding: 20px;
            
        }
        .card__content--right {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            color: #fff !important;
        }
        .card__image {
            border-radius: 50%;
            width: 50px;
            height: 50px;
            margin-right: 30px;
            margin-top:11px;
        }
        .card__text {
            color: #fff;
        }
        .card__title {
            font-size: 16px;
            font-weight: bold;
            color: #fff !important;
            
        }
        @media only screen and (max-width: 356px) {
            .card__container {
                width: 270px !important;
                padding: 8px;
            }
            .card__image {
                margin-right: 10px;
            }
            .card__text{
                margin-bottom: 0px;
            }
        }
    `,
    <div className="card__container">
      <div>
        {/* <img className='card__image'  /> */}
        <Avatar
          style={{
            // color: `${bgColor}`,
            color: "#31DE28",
            backgroundColor: "#fff",
            fontWeight: "bold",
            verticalAlign: "middle",
            marginRight: "25px",
            marginTop: "10px",
          }}
          size="large"
        >
          {initialGetters(title)}
        </Avatar>
      </div>
      <div className="card__content--right">
        <h2 className="card__title">{textContentReducer(title, 20)}</h2>
        <p className="card__text">{textContentReducer(content, 50)}</p>
        <div>
          <GetStartedButton
            // className={firstButton? 'first-button' : (secondButton ? 'second-button' : 'third-button')}
            className="first-button"
            to={`/dashboard/reminders/${ownerID}/${reminderID}/${title}`}
            style={{ color: `${bgColor}` }}
          >
            Read more
          </GetStartedButton>          
        </div>
      </div>
    </div>
  );
};

ReminderCard.propTypes = {};

export default ReminderCard;
