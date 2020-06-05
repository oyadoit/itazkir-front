import React from "react";
import Style from "style-it";

import { Avatar } from "antd";
import { Link } from "react-router-dom";

const ProfilePreview = () => {
  return (
    <div class="profile-preview">
      <div class="profile-preview-actions">
        <span class="profile-preview-text">Welcome </span>
      </div>
      <Link to='/dashboard/profile'>
        <div class="profile-preview-info">
          <span class="profile-preview-text">Imran Yaqub</span>
          {/* <img src="https://avatars0.githubusercontent.com/u/8108337?s=460&v=4" class="profile-preview-info-photo" /> */}
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
