import React from "react";
import Style from "style-it";



import { Avatar } from "antd";
import { Link } from "react-router-dom";

const ProfilePreview = () => {
  return (
    <div className="profile-preview">
      <div className="">
        <span className="profile-preview-text">Welcome </span>
      </div>
      <Link to='/dashboard/profile'>
        <div className="profile-preview-info">
          <span className="profile-preview-text">Imran Yaqub</span>
          
          <Avatar
            style={{
              backgroundColor: "#31DE28",
              color: "#fff",
              fontWeight: "bold",
              verticalAlign: "middle",
            }}
            size="large"
          >
            A M
          </Avatar>
        </div>
      </Link>
    </div>
  );
};

export default ProfilePreview;
