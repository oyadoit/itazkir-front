import React from 'react';
import Style from 'style-it';

import {Avatar} from 'antd';
import {initialGetters, errorMessage} from '../../utils/helpers';
import SubscribeButton from '../Custom/SubscribeButton';
import {SUBSCRIBE} from '../../graphql/mutation';
import {useMutation} from '@apollo/react-hooks';
import {CURRENT_USER_SUBSCRIPTIONS} from '../../graphql/query';

const SubscriptionCard = ({bgColor, title, id, btnVal, subColor}) => {
  // const userSubscriptions = datas;

  // const [subscribed, setSubscribed] = useState(false)
  const [Subscribe, {loading}] = useMutation(SUBSCRIBE, {
    variables: {reminderId: id},

    update(proxy, result) {
      const data = proxy.readQuery({
        query: CURRENT_USER_SUBSCRIPTIONS,
      });

      data.userSubscriptions = [
        result.data.createSubscription,
        ...data.userSubscriptions,
      ];
      proxy.writeQuery({query: CURRENT_USER_SUBSCRIPTIONS, data});
    },

    onError({graphQLErrors, networkError}) {
      if (graphQLErrors)
        graphQLErrors.map((err) => {
          errorMessage('You can only subscribe once');
        });

      if (networkError) errorMessage('You are not connected to the internet');
    },
  });

  return Style.it(
    `
        .card__container {
            background-color: ${bgColor};
            // width: 340px;
            // height: 210px;
            border-radius: 2px;
            display: flex;
            padding: 20px;
            min-width: 260px !important;
            min-height: 150px !important;
            
        }
        .card__content--right {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            color: #fff !important;
        }
        // .card__image {
            // border-radius: 50%;
            // width: 50px;
            // height: 50px;
            // margin-right: 30px;
            // margin-top:11px;
        // }
        .card__text {
            color: #fff !important;
        }
        .card__title {
            font-size: 16px;
            font-weight: bold;
            color: #fff !important;
            
        }
        @media only screen and (max-width: 356px) {
          .card__title {
            margin-bottom: 0px !important;
            font-size: 13px;
          }
          .card__text {
            margin-bottom: 0px !important;
            font-size: 11px;
          }
        }
    `,
    <div className="card__container">
      <div>
        <Avatar
          style={{
            backgroundColor: '#31DE28',
            color: '#fff',
            fontWeight: 'bold',
            verticalAlign: 'middle',
            marginRight: '15px',
            marginTop: '12px',
          }}
          size="large"
        >
          {initialGetters(title)}
        </Avatar>
      </div>
      <div className="card__content--right">
        <h2 className="card__title">{title}</h2>
        <p className="card__text">
          Subscribe now to start receiving reminders from {title}
        </p>
        <div>
          <SubscribeButton
            subColor={subColor}
            text={btnVal}
            onClick={Subscribe}
          />
        </div>
      </div>
    </div>
  );
};

SubscriptionCard.propTypes = {};

export default SubscriptionCard;
