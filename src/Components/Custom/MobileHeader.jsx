import React, { useState } from "react";
import PropTypes from "prop-types";
import Style from "style-it";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import GetStartedButton from "./GetStartedButton";
// import Circle from "../Custom/Particles/Circle";
// import Triangle from "../Custom/Particles/Triangle";
// import Hexagon from "../Custom/Particles/Hexagon";

// import Button from "../Custom/SubmitButton";
import { AUTH_TOKEN } from "../../utils/constants";
import { logout } from "../../index";

const Header = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  const authToken = localStorage.getItem(AUTH_TOKEN);

  const menu = <div className="mobile__nav-container">
  <ul>
    <>
      {authToken ? (
        <>
          <li>
            <Link to="/dashboard" className="">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/dashboard/reminders"  className="">
              All Reminders
            </Link>
          </li>
          <li>
            <Link to="/dashboard/subscriptions" className="">
              Subscriptions
            </Link>
          </li>
          <li>
            <Link to="/dashboard/profile" className="">
              profile
            </Link>
          </li>

          <li>
            <Link to="#0" onClick={logout} className="button__green">
              Logout
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login" className="nav__container--link">
              Login
            </Link>
          </li>
          <li>
            <GetStartedButton to="/signup" className="button__green">
              Get Started
            </GetStartedButton>
          </li>
        </>
      )}
    </>
  </ul>
</div>

    


  return Style.it(
    `
    .mobile__header--container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 15px 30px 15px 30px;
    }
    .center {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .mobile__nav-container {
        // position: absolute;
        top: 100;
        transition: transform 300ms ease-in-out;
    }
    ul li{
        padding: 10px 50px;
    }
    li {
        // align-self: center;
    }
    .profile__image--container {
        padding-left: 50px;
    }
    li {
        display: block;

        transition-duration: 0.5s;
    }  
    li:hover {
        cursor: pointer;
    }

    
        `,

    <div className="mobile__header">
      <div className="mobile__header--container">
        <Link to="/" className="header__logo--icon">
          ITazkir
        </Link>
        <div className="center">
          <FontAwesomeIcon 
          icon={faBars} 
          onClick={() => setShowMenu(!showMenu)}
          />
        </div>
      </div>
      {
          showMenu ? menu : ""
      }
      
      

      {/* <Circle color="#31DE28" width="20" height="20" top="10" left="105" />
      <Triangle color="pink" width="5" height="5" top="85" left="50" />
      <Hexagon color="orange" width="5" height="5" top="20" left="12" /> */}
    </div>
  );
};

export default Header;
