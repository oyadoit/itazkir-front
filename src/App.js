import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import {AuthProvider} from './context/auth';


// import { Button } from "antd";
// import Header from "./Components/Custom/Header";
import HomePage from "./Components/Pages/Homepage";
import Login from "./Components/Pages/Login";
import Signup from "./Components/Pages/Signup";
import Footer from './Components/Custom/Footer';
import Subscription from './Components/Pages/Subscription';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import Profile from './Components/Pages/Dashboard/Profile';
import AllReminders from './Components/Pages/Dashboard/AllReminders';
import AllSubscriptions from './Components/Pages/Dashboard/Subscriptions';
import AuthenticatedRoute from './Components/Custom/AuthenticatedRoute';


function App() {  
  
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} /> 

          {/* <AuthProvider> */}
            <AuthenticatedRoute exact path="/get-started" component={Subscription} />   
            <AuthenticatedRoute exact path="/dashboard" component={Dashboard} />
            <AuthenticatedRoute exact path="/dashboard/profile" component={Profile} />
            <AuthenticatedRoute exact path="/dashboard/reminders" component={AllReminders} />
            <AuthenticatedRoute exact path="/dashboard/subscriptions" component={AllSubscriptions} />
          {/* </AuthProvider> */}
        
        </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
