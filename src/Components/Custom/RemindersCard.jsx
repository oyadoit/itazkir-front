import React from 'react';
import {textContentReducer} from '../../utils/helpers';
import {initialGetters} from '../../utils/helpers';
import {Link} from 'react-router-dom';
import {Avatar} from 'antd';
import styled from 'styled-components';
import { AUTH_TOKEN } from '../../utils/constants';

const RemindersCard = ({title, id, by, to, contentNo, ownerId}) => {
  return (
    <Container>
      <a href={to}>
        <div className="flex">
          <Avatar
            style={{
              color: '#fff',
              fontWeight: 'bold',
              verticalAlign: 'middle',
              marginRight: '10px',
              marginTop: '3px',
            }}
            size="large"
          >
            {initialGetters(by)}
          </Avatar>
        </div>
        {
          localStorage.getItem(AUTH_TOKEN) ? (
            <Link to={`/dashboard/reminders/${ownerId}/${id}/${title}`}>
            <div className="card__content--right">
              <h2 className="card__title">{textContentReducer(title, 23)}</h2>
              <p>contents: {contentNo}</p>
            </div>
          </Link>
        ) : <Link to={to}>
          <div className="card__content--right">
              <h2 className="card__title">{textContentReducer(title, 23)}</h2>
              <p>contents: {contentNo}</p>
            </div>
          </Link>

        }
        
      </a>
    </Container>
  );
};

export default RemindersCard;

const Container = styled.div`
  border: 1.3px solid #31de28;
  padding: 18px 15px;
  width: 250px;
  border-radius: 16px;
  margin-bottom: 25px;

  a {
    display: flex;
  }

  .card__title {
    font-weight: bold;
    font-size: 14px;
  }
`;
