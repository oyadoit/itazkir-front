import { useQuery } from '@apollo/react-hooks';
import { Spin } from 'antd';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLastLocation } from 'react-router-last-location';
import styled from 'styled-components';
import {  SINGLE_REMINDER_CONTENT } from '../../graphql/query';

const ContentPage = (props) => {
const id = useParams('id')
console.log(id);
  const { loading, data } = useQuery(SINGLE_REMINDER_CONTENT, {
    variables: {
      id: id.id
    }
  });
  const lastLocation = useLastLocation();

  console.log(loading, data);

  if (loading) {
    console.log(data);
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
    <div className="reminder__container">
            <>
              {data.content && data.content.contentImage ? (
                <div className="single__reminder-image-container">
                  <img
                    className="single__reminder-image"
                    src={data.content.contentImage}
                    alt="Reminder Image"
                  />
                </div>
              ) : (
                ""
              )}

              <div className="single__reminder--content-container">
                <h1 className="single__reminder-heading">
                  {data.content.title}
                </h1>
                <p className="single__reminder-content">{data.content.data}</p>
              </div>

              <br />
              <div className="reminder__footer">
                <Link to={lastLocation}>back</Link>
                <p className="created__by">
                  by:{data.content.reminder.owner.firstName}{" "}
                  {data.content.reminder.owner.lastName}
                </p>
                <p className="tag">tag:{data.content.reminder.name}</p>
              </div>
            </>
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
