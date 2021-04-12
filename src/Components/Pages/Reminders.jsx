import { useQuery } from '@apollo/react-hooks';
import { Spin } from 'antd';
import React from 'react';
import styled from 'styled-components';
import Header from '../../Components/Custom/Header';
import RemindersCard from '../../Components/Custom/RemindersCard';
import { ALL_REMINDERS } from '../../graphql/query';

const Reminders = (props) => {
  const { loading, data } = useQuery(ALL_REMINDERS);

  console.log(data)
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
    <div className="single__reminder-container">
      <Header />
      <Heading>All Reminders</Heading>
      <Container>
        {data.allReminders && data.allReminders.map(reminder => (
          <RemindersCard
            title={`${reminder.name}`}
            contentNo={`${reminder.count}`}
            bgColor="#fff"
            by={`${reminder?.name}`}
            to={`/reminders/${reminder.id}`}
          />
        ))}

      </Container>
    </div>
  );
}

export default Reminders;

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
