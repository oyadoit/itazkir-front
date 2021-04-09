import React from 'react';
import styled from 'styled-components';
import Header from '../../Components/Custom/Header';
import RemindersCard from '../../Components/Custom/RemindersCard';

const Reminders = (props) => {
  return (
    <div className="single__reminder-container">
      <Header />
      <Heading>All Reminders</Heading>
      <Container>
        <RemindersCard
          title="this is the title"
          contentNo="12"
          bgColor="#fff"
          by="A M"
          to="/amin"
        />
        <RemindersCard
          title="this is the second title"
          contentNo="12"
          bgColor="#fff"
          by="A M"
          id={1}
        />
        <RemindersCard
          title="this is the second title"
          contentNo="12"
          bgColor="#fff"
          by="A M"
          id={1}
        />
        <RemindersCard
          title="this is the second title"
          contentNo="12"
          bgColor="#fff"
          by="A M"
          id={1}
        />
        <RemindersCard
          title="this is the second title"
          contentNo="12"
          bgColor="#fff"
          by="A M"
          id={1}
        />
        <RemindersCard
          title="Islamic Reminders"
          contentNo="12"
          bgColor="#fff"
          by="A M"
          id={1}
        />
        <RemindersCard
          title="Daily reminders"
          contentNo="12"
          bgColor="#fff"
          by="A M"
          id={1}
        />{' '}
        <RemindersCard
          title="this is the second title"
          contentNo="12"
          bgColor="#fff"
          by="A M"
          id={1}
        />{' '}
        <RemindersCard
          title="this is the second title"
          contentNo="12"
          bgColor="#fff"
          by="A M"
          id={1}
        />
      </Container>
    </div>
  );
};

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
