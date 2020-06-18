import React, { useContext } from "react";
import PropTypes from "prop-types";
import Style from "style-it";

import DashboardMenu from "../../Custom/DashboardMenu";
import { Spin } from "antd";

import { AuthContext } from "../../../context/auth";

import { ME } from "../../../graphql/query";
import { useQuery } from "@apollo/react-hooks";
// import { USER_TOTAL_REMINDER } from "../../../graphql/query"

const Profile = (props) => {
  const context = useContext(AuthContext);

  

  const { loading, data } = useQuery(ME, {
    update() {
      context.login(data.currentUser);
    },
  });

  // if(loading) return <p>loading..</p>
  // if (data) console.log(data);
  return Style.it(
    `
        .profile__container {
            display: grid;
            grid-template-columns: 200px 1fr;
            min-height: 100vh;
        }
        .profile__content--container {
            background-color: #f5f6fb;
            padding: 80px 100px 80px 100px;
            margin-left: 20px;
        }
        .profile__image--container {
            width: 200px;
            height: 200px;
            position: relative;
        }
        .profile__image {
            width: 100%;
        }
        .image__name--row {
            display: grid;
            align-items: center;
            grid-template-columns: repeat(auto-fit, minmax(10px, 1fr) );
            text-aligh: center;
            
        }
        .user__details {
            padding: 50px 50px 50px 0px;
        }
        .card__summary--container {
            margin-top: 50px;
            display: grid;
            // justify-content: space-between;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr) );
            grid-gap: 50px;
        }
        .card__summary {
            background-color: #fff;
            padding: 20px;
            display: flex;
            flex-direction: column;
            
        }
    `,

    <div className="profile__container">
      <DashboardMenu />
      <div className="profile__content--container">
        {loading ? (
          <div
            style={{
              margin: "Auto",
              marginTop: "60px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <Spin size="large" />
          </div>
        ) : (
          <>
            <div className="image__name--row">
              <div className="profile__image--container">
                <img
                  className="profile__image"
                  src="https://storage.googleapis.com/indie-hackers.appspot.com/avatars/XuNd60zUjvMskzW820ab9ecsr633"
                  alt="User Profile Image"
                />
              </div>
              <div className="user__details">
                <h1>{data.currentUser.email}</h1>
                <h2>
                  {data.currentUser.firstName} {data.currentUser.lastName}
                </h2>
              </div>
            </div>
            <div className="card__summary--container">
              <div className="card__summary">
                <h2>Your Current Subscriptions</h2>
                <h1>{data.currentUser.subscriptionSet.length}</h1>
              </div>
              
              <div className="card__summary">
                <h2>Your Total Reminders</h2>
                {/* <h1>{
                  isLoading ? (<p>loading...</p>):(
                   <p>finished</p>
                  )
                  }</h1> */}
                  <h1>
                  
                  </h1>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

Profile.propTypes = {};

export default Profile;
