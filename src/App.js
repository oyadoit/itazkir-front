import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";

// import { Button } from "antd";
// import Header from "./Components/Custom/Header";
import HomePage from "./Components/Pages/Homepage";
import Login from "./Components/Pages/Login";
import Signup from "./Components/Pages/Signup";
import Footer from './Components/Custom/Footer';
import Subscription from './Components/Pages/Subscription';
import Dashboard from './Components/Pages/Dashboard';



function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
         <Route exact path="/signup" component={Signup} /> 
         <Route exact path="/get-started" component={Subscription} />   
         <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
