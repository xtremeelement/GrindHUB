import React from "react";
import Schedule from "./components/ScheduleComponent";
import AppHeader from "./components/smallerComponents/AppHeader";
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
import Sidebar from "./components/smallerComponents/Sidebar";
import CreateEmployee from "./components/CreateEmployee";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={SignInSide} />
          <Route path="/dashboard" component={DashComponent} />
          <Route path="/schedule/:id" component={Schedule} />
          <Route path="/timeoff/:id" component={TimeOff} />
          <Route path="/signin" component={SignInSide} />
          <Route path="/documents" component={Documents} />
          <Route path="/announcements" component={NewsAlerts} />
          <Route path="/inbox" component={InboxComp} />
          <Route path="/contact/:empID" component={UserProfile} />
          <Route exact path="/admin" component={AdminDash} />
          <Route path="/admin/schedule" component={AllEmployees} />
          <Route path="/admin/annoucements" component={AdminDash} />
          <Route path="/admin/newemployee" component={CreateEmployee} />
          <Route path="/admin/timeoff" component={AdminTimeOff} />
          <Route path="/admin/createSchedule/:id" component={adminSchedule} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
