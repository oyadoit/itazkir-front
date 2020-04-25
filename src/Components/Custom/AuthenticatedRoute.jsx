import React from 'react'
import { Route, Redirect } from "react-router-dom";
import { AUTH_TOKEN } from '../../utils/constants';

const AuthenticatedRoute = ({ component: Component, ...rest}) => (
    <Route
        {...rest}
            render={props => 
            localStorage.getItem(AUTH_TOKEN) ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: props.location}
                    }}
                />
            )
        }
    />
);
export default AuthenticatedRoute
