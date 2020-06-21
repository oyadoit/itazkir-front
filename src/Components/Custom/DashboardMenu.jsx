import React from "react";
import PropTypes from "prop-types";
import Style from "style-it";
import { NavLink,Redirect, Link, useHistory } from 'react-router-dom';

import { AUTH_TOKEN } from '../../utils/constants'
import {logout } from '../../index'

const DashboardMenu = (props) => {
  
  // const history = useHistory()

  return Style.it(
    `
    .menu {
          grid-column-start: 1;
          color: white;
          display: flex;
          flex-direction: column;
        }  
        .brand {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 32px 32px 0 32px;
          
        }
        .menu-list {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          margin-top: 30px;
        }
        
        .menu-list > ul {
          list-style: none;
          padding: 0;
          width: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .menu-list > ul > li {
          position: relative;
        }
        
        .menu-list > ul > li > a {
          height: 64px;
          padding-left: 32px;
          display: flex;
          padding-right: 30px;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          text-decoration: none;
          color: #818698 !important;
        }
        
        .menu-list > ul > li > a.active::before {
          height: 100%;
          width: 5px;
          content: " ";
          background: #31DE28;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
          position: absolute;
          left: 0;
        }
        
        .menu-icon {
          height: 18px;
          width: 18px;
        }
        
        .menu-list > ul > li > a > span {
          padding-left: 20px;
          cursor: pointer;
        }
        
        .menu-list > ul > li > a:hover {
          color: white !important;
          background-color: #31DE28;
          transition: color 0.2s linear;
        }
        .menu-list > ul > li:last-child {
            // margin-top: 240px;
            margin-top: auto;
        }
    `,

    <div className="menu">
      <div className="brand">
        <p><Link to='/'>iTazkir</Link></p>
      </div>
      <nav className="menu-list">
        <ul>
          <li>
            <NavLink to="/dashboard" >
              <img
                className="menu-icon"
                src="https://res.cloudinary.com/dg7n6i9e1/image/upload/v1586869762/iTazkir/home_doj6mg.svg"
                alt="home"
              />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/dashboard/create-reminder">
              <img
                className="menu-icon"
                src="https://res.cloudinary.com/dg7n6i9e1/image/upload/v1586869822/iTazkir/folder_iax9qu.svg"
                alt="folder"
              />
              <span>New Reminders</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/dashboard/reminders">
              <img
                className="menu-icon"
                src="https://res.cloudinary.com/dg7n6i9e1/image/upload/v1586869822/iTazkir/folder_iax9qu.svg"
                alt="folder"
              />
              <span>All Reminders</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/dashboard/subscriptions">
              <img
                className="menu-icon"
                src="https://res.cloudinary.com/dg7n6i9e1/image/upload/v1586869822/iTazkir/clock_h6lusg.svg"
                alt="clock"
              />
              <span> Subscriptions</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/dashboard/profile">
              <img
                className="menu-icon"
                src="https://res.cloudinary.com/dg7n6i9e1/image/upload/v1586869821/iTazkir/users_yve7dc.svg"
                alt="users"
              />
              <span>Profile</span>
            </NavLink>
          </li>
          <li>
            <Link to="#0" onClick={logout}>
              <img
                className="menu-icon"
                src="https://res.cloudinary.com/dg7n6i9e1/image/upload/v1586869999/iTazkir/alert-circle_wiywpu.svg"
                alt="alert" 
              />
              <span>
                Logout
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

DashboardMenu.propTypes = {};

export default DashboardMenu;
