import React from 'react'
import Style from 'style-it'

const ProfilePreview = () => {
  return (
       <div class="profile-preview">
          <div class="profile-preview-actions">
            <span class="profile-preview-text">Welcome  </span>
          </div>
          <div class="profile-preview-info">
            <span class="profile-preview-text">Imran Yaqub</span>
            {/* <img
              src="./assets/chevron-down.svg"
              width="16"
              height="16"
            /> */}
            <img src="https://avatars0.githubusercontent.com/u/8108337?s=460&v=4" class="profile-preview-info-photo" />
          </div>
        </div>
  )
}

export default ProfilePreview
