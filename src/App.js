import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { LastLocationProvider } from "react-router-last-location";
import { AuthProvider } from "./context/auth";

// import { Button } from "antd";
// import Header from "./Components/Custom/Header";
import HomePage from "./Components/Pages/Homepage";
import Login from "./Components/Pages/Login";
import Signup from "./Components/Pages/Signup";
// import Footer from "./Components/Custom/Footer";
import Subscription from "./Components/Pages/Subscription";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import Profile from "./Components/Pages/Dashboard/Profile";
import AllReminders from "./Components/Pages/Dashboard/AllReminders";
import AllSubscriptions from "./Components/Pages/Dashboard/Subscriptions";
import AuthenticatedRoute from "./Components/Custom/AuthenticatedRoute";
import SingleReminder from "./Components/Pages/SingleReminder";
import CreatorRoute from "./Components/Custom/CreatorRoute";
import NewContent from "./Components/Custom/NewContent";
import NotFound from "./Components/NotFound";
import Reminders from "./Components/Pages/Reminders";
import Content from "./Components/Pages/Content";
import ContentPage from "./Components/Pages/ContentPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <LastLocationProvider>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route
              exact
              path="/dashboard/reminders/:ownerId/:reminderId/:title"
              component={SingleReminder}
            />
              <Route
              exact
              path="/reminders"
              component={Reminders}
            />
            <Route
              exact
              path="/reminders/:reminderName"
              component={Content}
            />
            <Route
              exact
              path="/reminders/:reminderName/content/:id"
              component={ContentPage}
            />
            <AuthenticatedRoute
              exact
              path="/get-started"
              component={Subscription}
            />
            <AuthenticatedRoute exact path="/dashboard" component={Dashboard} />
            <AuthenticatedRoute
              exact
              path="/dashboard/profile"
              component={Profile}
            />
            <AuthenticatedRoute
              exact
              path="/dashboard/reminders"
              component={AllReminders}
            />
            <AuthenticatedRoute
              exact
              path="/dashboard/subscriptions"
              component={AllSubscriptions}
            />
            <CreatorRoute
              exact
              path="/dashboard/create-reminder"
              component={NewContent}
            />
            {/* </AuthProvider> */}

            <Route component={NotFound} />
          </Switch>
          {/* <Footer /> */}
        </LastLocationProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
