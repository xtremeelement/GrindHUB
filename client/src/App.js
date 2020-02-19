import React from "react";
import Schedule from "./components/ScheduleComponent";
import AppHeader from "./components/smallerComponents/AppHeader";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

// import InboxComp from "./components/InboxComponent";
import DashComponent from "./components/DashComponent";
// import Button from "@material-ui/core/Button";

function App() {
  return (
    <div>
      <AppHeader />
      <Router>
        <Switch>
          <Route exact path="/" component={DashComponent} />
          <Route path="/schedule" component={Schedule} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
