import React from 'react'
import { Route, Redirect, useHistory, Link } from "react-router-dom";
import { AUTH_TOKEN } from '../../utils/constants';

import { useQuery } from "@apollo/react-hooks"
import { IS_CREATOR } from "../../graphql/query"

const CreatorRoute = ({ component: Component, ...rest}) => {

    const { data: response, loading } = useQuery(IS_CREATOR);

    // if(loading) console.log("loading");
    // if (error) console.log("error");
    if (response) {  console.log( response)}

    return (
        <Route
        {...rest}
            render={props => 
            localStorage.getItem(AUTH_TOKEN) && !!response.currentUser.isCreator ? (
                <Component {...props} />
            ) : (
               
                <Redirect to="/dashboard" />
            )
        }
    />
    )
}
// && data.currentUser.isCreator
    
export default CreatorRoute;