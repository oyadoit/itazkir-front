import React from "react";
import PropTypes from "prop-types";
import Style from "style-it";
import { Link } from "react-router-dom";

import Input from "../../Custom/Input";
import SubmitButton from "../../Custom/SubmitButton";
import AlreadyHave from "../../Custom/AlreadyHave";
import DownloadFromStore from "../../Custom/DownloadFromStore";
import { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router";

import { AuthContext } from "../../../context/auth";

import { Spin } from "antd";

import { useMutation, useQuery } from "@apollo/react-hooks";
import { AUTH_TOKEN } from "../../../utils/constants";
import { errorMessage, saveToken } from "../../../utils/helpers"; //ant design error pop up
import { LOGIN } from "../../../graphql/mutation"; // login mutation

// frontend form Validation
import { FormValidation } from "calidation";
import { loginConfig } from "../../../utils/validation";

const LoginForm = (props) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [Login, result] = useMutation(LOGIN, {
    onError({ graphQLErrors, networkError }) {
      if (graphQLErrors)
        graphQLErrors.map((err) => {
          errorMessage(err.message);
        });

      if (networkError) errorMessage("You are not connected to the internet");
    },

    variables: values,
  });

  const handleSubmit = ({ isValid }) => {
    if (isValid) {
      Login();
    }
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  if (result.data) {
    console.log(result.data);
    const token = result.data.tokenAuth.token;
    // saveUserData(token);
    saveToken(token);
    if (AUTH_TOKEN) {
      return <Redirect to="/dashboard" />;
    } else {
      return <Redirect to="/login" />;
    }
  }

  return Style.it(
    `

    .login__forget__password-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .reset__password-link {
        color: #31DE28;
    }
    .login__image {
        width: 99%;
    }
    
    `,
    <div className="signup__container">
      <div className="signup__image-left">
        <img
          src="https://res.cloudinary.com/dg7n6i9e1/image/upload/v1584811416/iTazkir/login_ipiiei.png"
          alt=""
          className="login__image"
        />
      </div>
      <div className="signup__form-right">
        <h1 className="signup__form-heading">
          Welcome back to<span className="signup__green-text"> iTazkir</span>
        </h1>
        <FormValidation
          config={loginConfig}
          className="signup__form"
          onSubmit={handleSubmit}
        >
          {({ fields, errors, submitted }) => (
            <>
              <div>
                <Input
                  htmlFor="Email"
                  name="email"
                  inputType="email"
                  value={values.email && fields.email}
                  placeholder="Enter Email Address"
                  onChange={handleChange}
                />
                {submitted && errors.email && (
                  <div className="input__error">{errors.email}</div>
                )}
              </div>
              <div>
                <Input
                  htmlFor="Password"
                  name="password"
                  inputType="password"
                  value={values.password && fields.password}
                  placeholder="Enter Password"
                  onChange={handleChange}
                />
                {submitted && errors.password && (
                  <div className="input__error">{errors.password}</div>
                )}
              </div>

              <div className="login__forget__password-row">
                <SubmitButton text="Login Here" />

                <div className="loader__container">
                  {result.loading ? <Spin size="large" /> : ""}
                </div>

                <Link className="reset__password-link" to="/reset-password">
                  Forgot Password ?
                </Link>
              </div>

              <AlreadyHave
                text="Dont have an Account?"
                linkText="Sign Up"
                to="/signup"
              />
            </>
          )}
        </FormValidation>

        <div className="download__container" style={{ marginTop: "40px" }}>
          <DownloadFromStore
            imageUrl="https://res.cloudinary.com/dg7n6i9e1/image/upload/v1584607070/iTazkir/get_google_play_lmo8uc.png"
            className="download-from-store"
            alt="Download from android store"
            to="#"
          />

          <DownloadFromStore
            imageUrl="https://res.cloudinary.com/dg7n6i9e1/image/upload/v1584607077/iTazkir/download_app_store_kyq4uh.png"
            className="download-from-store"
            alt="Download from apple store"
            to="#"
          />
        </div>
      </div>
    </div>
  );
};


LoginForm.propTypes = {};

export default LoginForm;
