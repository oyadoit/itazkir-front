import { useQuery } from '@apollo/react-hooks';
import { Spin } from 'antd';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLastLocation } from 'react-router-last-location';
import { SINGLE_REMINDER_CONTENT } from '../../graphql/query';
import Header from "../../Components/Custom/Header";

const ContentPage = (props) => {
  const contentId = useParams('contentId')
  const { loading, data } = useQuery(SINGLE_REMINDER_CONTENT, {
    variables: {
      contentId: contentId.contentId
    }
  });
  const lastLocation = useLastLocation();

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


  return <div className="reminder__container">
    <Header />
    <>
      {data?.content?.contentImage ? (
        <div className="single__reminder-image-container">
          <img
            className="single__reminder-image"
            src={data?.content?.contentImage}
            alt="Reminder "
          />
        </div>
      ) : (
        ""
      )}

      <div className="single__reminder--content-container">
        <h1 className="single__reminder-heading">
          {data?.content?.title}
        </h1>
        <p className="single__reminder-content">{data?.content?.data}</p>
      </div>

      <br />
      <div className="reminder__footer">
        <Link to={lastLocation}>Back</Link>
        <p className="created__by">
          By {"  "}: {""} {data?.content?.reminder?.owner?.firstName}{" "}
          {data?.content?.reminder?.owner?.lastName}
        </p>
        <p className="tag">Tag {" "} :{" "} {data?.content?.reminder?.name}</p>
      </div>
    </>
  </div>
};

export default ContentPage;


