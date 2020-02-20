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
import SignInSide from "./components/LoginComponent";

function App() {
  return (
    <div>
      <Router>
        <AppHeader />
        <Switch>
          <Route exact path="/" component={DashComponent} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/timeoff" component={TimeOff} />
          <Route path="/signin" component={SignInSide} />
          <Route path="/documents" component={Documents} />
          <Route path="/announcements" component={NewsAlerts} />
          <Route path="/inbox" component={InboxComp} />
          <Route path="/contact" component={UserProfile} />
          <Route exact path="/admin" component={AdminDash} />
          <Route path="/admin/schedule" component={AllEmployees} />
          <Route path="/admin/annoucements" component={AdminDash} />
          <Route path="/admin/newemployee" component={AdminDash} />
          <Route path="/admin/timeoff" component={AdminDash} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
