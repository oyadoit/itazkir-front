import React from "react";
// import Style from "style-it";

import { useQuery } from "@apollo/react-hooks"
import { ME } from "../../graphql/query"
import { Avatar } from "antd";
import { Link } from "react-router-dom";
import { initialGetters, textContentReducer } from "../../utils/helpers"

const ProfilePreview = () => {

  const { loading, data } = useQuery(ME, {

  });
   if(loading) return null;
  

  return (
    <div className="profile-preview">
      <div className="">
        <span className="profile-preview-text">Welcome </span>
      </div>
      <Link to='/dashboard/profile'>
        <div className="profile-preview-info">
          <span className="profile-preview-text">{ data ? textContentReducer(( data.currentUser.firstName + " " + data.currentUser.lastName), 12) : (<p>loading..</p>)}</span>
          
          <Avatar
            style={{
              backgroundColor: "#31DE28",
              color: "#fff",
              fontWeight: "bold",
              verticalAlign: "middle",
            }}
            size="large"
          >
            {
              initialGetters(`${data.currentUser.firstName}  ${data.currentUser.lastName}`)
            }
          </Avatar>
        </div>
      </Link>
    </div>
  );
};

export default ProfilePreview;
