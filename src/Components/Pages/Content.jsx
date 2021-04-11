import { useQuery } from '@apollo/react-hooks';
import { Spin } from 'antd';
import React from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { REMINDER_CONTENT } from '../../graphql/query';
import Header from '../Custom/Header';
import SmallReminderCard from '../Custom/SmallReminderCard';

const Content = (props) => {
const id = useParams('reminderName')
  const { loading, data } = useQuery(REMINDER_CONTENT, {
    variables: {
      reminderId: id.reminderName
    }
  });
  console.log(loading, data);

  if (loading) {
    return (
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
     ) 
    }
   

  return (
    <div className="content__page--container">
      <Header />
      <Heading>Daily Reminder</Heading>
      {data.reminderContent && data.reminderContent.map(content => 
      <Container>
        <SmallReminderCard
          title={`${content.data}`}
          content="This is part of the content for the reminder"
          bgColor="#fff"
          tag="Islamic Reminder"
          //   by={`${eachContent.reminder.owner.firstName}  ${eachContent.reminder.owner.lastName}`}
          by="I R"
          key="1"
          id="1"
          ownerId="21"
          to={`/reminders/${id.reminderName}/content/${content.id}`}
        />
      </Container>
      )}
      
    </div>
  );
};

export default Content;

const Container = styled.div`
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;
`;

const Heading = styled.h2`
  margin: 40px;
  margin-bottom: 0px;
  text-align: center;
  font-size: 29px;
  font-weight: bolder;
  color: #31de28 !important;
`;
