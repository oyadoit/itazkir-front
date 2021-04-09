import React from 'react';
import styled from 'styled-components';
import Header from '../Custom/Header';
import SmallReminderCard from '../Custom/SmallReminderCard';

const ContentPage = (props) => {
  return (
    <div className="content__page--container">
      <Header />
      <Heading>Daily Reminder</Heading>
      <Container>
        <SmallReminderCard
          title="New title"
          content="This is part of the content for the reminder"
          bgColor="#fff"
          tag="Islamic Reminder"
          //   by={`${eachContent.reminder.owner.firstName}  ${eachContent.reminder.owner.lastName}`}
          by="I R"
          key="1"
          id="1"
          ownerId="21"
        />
        <SmallReminderCard
          title="New title"
          content="This is part of the content for the reminder"
          bgColor="#fff"
          tag="Islamic Reminder"
          //   by={`${eachContent.reminder.owner.firstName}  ${eachContent.reminder.owner.lastName}`}
          by="I R"
          key="1"
          id="1"
          ownerId="21"
        />
        <SmallReminderCard
          title="New title"
          content="This is part of the content for the reminder"
          bgColor="#fff"
          tag="Islamic Reminder"
          //   by={`${eachContent.reminder.owner.firstName}  ${eachContent.reminder.owner.lastName}`}
          by="I R"
          key="1"
          id="1"
          ownerId="21"
        />
        <SmallReminderCard
          title="New title"
          content="This is part of the content for the reminder"
          bgColor="#fff"
          tag="Islamic Reminder"
          //   by={`${eachContent.reminder.owner.firstName}  ${eachContent.reminder.owner.lastName}`}
          by="I R"
          key="1"
          id="1"
          ownerId="21"
        />
        <SmallReminderCard
          title="New title"
          content="This is part of the content for the reminder"
          bgColor="#fff"
          tag="Islamic Reminder"
          //   by={`${eachContent.reminder.owner.firstName}  ${eachContent.reminder.owner.lastName}`}
          by="I R"
          key="1"
          id="1"
          ownerId="21"
        />
        <SmallReminderCard
          title="New title"
          content="This is part of the content for the reminder"
          bgColor="#fff"
          tag="Islamic Reminder"
          //   by={`${eachContent.reminder.owner.firstName}  ${eachContent.reminder.owner.lastName}`}
          by="I R"
          key="1"
          id="1"
          ownerId="21"
        />
        <SmallReminderCard
          title="New title"
          content="This is part of the content for the reminder"
          bgColor="#fff"
          tag="Islamic Reminder"
          //   by={`${eachContent.reminder.owner.firstName}  ${eachContent.reminder.owner.lastName}`}
          by="I R"
          key="1"
          id="1"
          ownerId="21"
        />
      </Container>
    </div>
  );
};

export default ContentPage;

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
