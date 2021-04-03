import React, {useState} from 'react';
import Header from '../../Components/Custom/Header';
import styled from 'styled-components';

const Reminders = (props) => {
  const [active, setActive] = useState(0);
  const handleClick = (e) => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };
  return (
    <div className="single__reminder-container">
      <Header />
      <div>
        <h1>Tags:</h1>
        <Tabs>
          <Tab onClick={handleClick} active={active === 0} id={0}>
            Content1
          </Tab>

          <Tab onClick={handleClick} active={active === 1} id={1}>
            Content2
          </Tab>
        </Tabs>
        <>
          <Content active={active === 0}>
            <h1>Content 1</h1>
          </Content>
          <Content active={active === 1}>
            <h1>Content 2</h1>
          </Content>
        </>
      </div>
    </div>
  );
};

export default Reminders;

const Tabs = styled.div`
  background: #fff;
  font-family: Open Sans;
`;

const Tab = styled.button`
  border: ${(props) => (props.active ? '1px solid #ccc' : '')};
  border-bottom: ${(props) => (props.active ? 'none' : '')};
  background-color: ${(props) => (props.active ? '#31DE28' : '#fff')};
  color: ${(props) => (props.active ? '#fff' : '#000')};
  transition: background-color 0.5s ease-in-out;
  padding: 15px;
  border-radius: 8px;
  margin: 10px;
  cursor: pointer;
`;

const Content = styled.div`
  ${(props) => (props.active ? '' : 'display:none')}
`;
