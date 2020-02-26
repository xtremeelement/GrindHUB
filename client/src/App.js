import React from "react";

import ScheduleComponent from "./components/ScheduleComponent";

import TimeOff from "./components/TimeOffComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserProfile from "./components/UserProfileComponent";
import NewsAlerts from "./components/NewsComponent";
import Documents from "./components/DocsComponent";
import AdminDash from "./components/AdminDash";
import AllEmployees from "./components/AdminEmployees";
import InboxComp from "./components/InboxComponent";
import DashComponent from "./components/DashComponent";
import SignInSide from "./components/SignIn";
import adminSchedule from "./components/adminSchedule";
import AdminTimeOff from "./components/ApproveTimeOff";
import CreateEmployee from "./components/CreateEmployee";
import CreateNews from "./components/CreateNews";

//routes and rendering of all major pages
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={SignInSide} />
          <Route path="/dashboard/:id" component={DashComponent} />
          <Route path="/schedule/:id" component={ScheduleComponent} />
          <Route path="/timeoff/:id" component={TimeOff} />
          <Route path="/signin/:id" component={SignInSide} />
          <Route path="/documents/:id" component={Documents} />
          <Route path="/announcements/:id" component={NewsAlerts} />
          <Route path="/inbox/:id" component={InboxComp} />
          <Route path="/contact/:id" component={UserProfile} />
          <Route exact path="/admin" component={AdminDash} />
          <Route path="/admin/schedule" component={AllEmployees} />
          <Route path="/admin/announcements" component={CreateNews} />
          <Route path="/admin/newemployee" component={CreateEmployee} />
          <Route path="/admin/timeoff" component={AdminTimeOff} />
          <Route path="/admin/createSchedule/:id" component={adminSchedule} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
