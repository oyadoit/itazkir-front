import React from 'react'
import { Route, Redirect, useHistory, Link } from "react-router-dom";
import { AUTH_TOKEN } from '../../utils/constants';



const AuthenticatedRoute = ({ component: Component, ...rest}) => (
    <Route
        {...rest}
            render={props => 
            localStorage.getItem(AUTH_TOKEN) ? (
                <Component {...props} />
            ) : (
               
                <Redirect to='/login' />
            )
        }
    />
);
export default AuthenticatedRoute;
