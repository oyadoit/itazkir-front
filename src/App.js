import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";

// import { Button } from "antd";
import Header from "./Components/Custom/Header";
import HomePage from "./Components/Pages/Homepage";
import Login from "./Components/Pages/Login";
import Signup from "./Components/Pages/Signup";
import Footer from './Components/Custom/Footer';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />    
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
