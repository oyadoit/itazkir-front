import React from 'react';
import SmallSubscriptionCard from '../Custom/SmallSubscriptionCard';
import {useQuery} from '@apollo/react-hooks';
import {ALL_REMINDERS, CURRENT_USER_SUBSCRIPTIONS} from '../../graphql/query';

const SubscriptionPreview = () => {
  const {loading: loaded, data: userSubs} = useQuery(
    CURRENT_USER_SUBSCRIPTIONS
  );
  let userSubscriptions;

  const userSubsArr = [];
  if (!loaded) {
    userSubscriptions = userSubs.userSubscriptions;
    userSubscriptions.map((oneUser) => {
      userSubsArr.push(oneUser.reminder.id);
    });
  }

  const {loading, data} = useQuery(ALL_REMINDERS);

  if (loading) return <p>loading..</p>;

  return (
    <div>
      {data.allReminders.length > 0 ? (
        data.allReminders.map((singleData) => {
          let btnVal = 'SUBSCRIBE';
          if (userSubsArr.includes(singleData.id)) btnVal = 'SUBSCRIBED';
          return (
            <SmallSubscriptionCard
              // imageUrl='https://avatars0.githubusercontent.com/u/8108337?s=460&v=4'
              title={singleData.name}
              id={singleData.id}
              key={singleData.id}
              buttonValue={btnVal}
              datas={userSubscriptions}
            />
          );
        })
      ) : (
        <h2>No Reminders available at the moment</h2>
      )}
    </div>
  );
};

SubscriptionPreview.propTypes = {};

export default SubscriptionPreview;
