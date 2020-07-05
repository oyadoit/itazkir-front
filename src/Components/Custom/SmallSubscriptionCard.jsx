import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Style from "style-it";

import { Avatar } from "antd";


import SubscribeButton from "../Custom/SubscribeButton";
import { initialGetters, textContentReducer } from "../../utils/helpers";

// import { useEffect } from 're'
import { useMutation, useQuery } from "@apollo/react-hooks";
import { SUBSCRIBE } from "../../graphql/mutation";
import { CURRENT_USER_SUBSCRIPTIONS, ALL_REMINDERS } from "../../graphql/query";

// import { CURRENT_USER_SUBSCRIPTIONS } from '../../graphql/query';

const SmallSubscriptionCard = ({ title, id, datas, buttonValue }) => {

  const { loading: remindersLoading, data: { allReminders } } = useQuery(ALL_REMINDERS)


  const userSubscriptions = datas
  console.log(userSubscriptions)

  const [Subscribe, { loading }] = useMutation(SUBSCRIBE, {
    variables: { reminderId: id },
    update(proxy, result) {
      const data = proxy.readQuery({
        query: CURRENT_USER_SUBSCRIPTIONS,
      });

      data.userSubscriptions = [
        result.data.createSubscription,
        ...data.userSubscriptions,
      ];
      proxy.writeQuery({ query: CURRENT_USER_SUBSCRIPTIONS, data });
    },
    onError({ graphQLErrors, networkError }) {
      if (graphQLErrors)
        graphQLErrors.map((err) => {
          console.log("You can only subscribe once");
        });

      if (networkError) console.log("You are not connected to the internet");
    },
  });


  return Style.it(
    `
        .card__image {
            border-radius: 50%;
            width: 50px;
            height: 50px;
            margin-right: 20px;
        }
        .card__text {
            margin-bottom: 0px;
        }
        .card__title {
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 0px;
            
        }
        .small__subscription__card--container {
            display: flex;
            padding: 20px;
            padding-right: 10px;
            justify-content: space-between;
            align-items: center;
            box-shadow: 10px 10px 42px -35px rgba(0, 0, 0, 0.31);
            margin-bottom: 20px;
            border-radius: 3px;
            background-color: #fff;


        }
        .title__content--container {
            margin-right: 5px;
            margin-left: 5px;
        }
    `,
    <div className="small__subscription__card--container">
      <Avatar
        style={{
          fontWeight: "bold",
        }}
        size="large"
      >
        {initialGetters(title)}
      </Avatar>

      <div className="title__content--container">
        <h4 className="card__title">{textContentReducer(title, 16)}</h4>
      </div>
      <SubscribeButton text={buttonValue}  onClick={Subscribe} />
      {/* {userSubscriptions.map(userSub => 
        (allReminders.includes(userSub)? <SubscribeButton text={buttonValue} onClick={Subscribe} /> : <SubscribeButton text={buttonValue2} onClick={Subscribe} /> )
      )} */}
    </div>
  );
};

SmallSubscriptionCard.propTypes = {};

export default SmallSubscriptionCard;
