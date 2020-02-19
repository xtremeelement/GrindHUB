import React from "react";
import Schedule from "./components/ScheduleComponent";
import AppHeader from "./components/smallerComponents/AppHeader";
import UserProfile from "./components/UserProfileComponent";
import FolderList from "./components/DocsComponent";
import NewsAlerts from "./components/NewsComponent";

// import InboxComp from "./components/InboxComponent";
// import DashComponent from "./components/DashComponent";
// import Button from "@material-ui/core/Button";

function App() {
  return (
    <div>
      <AppHeader />
    
      <NewsAlerts/>


    </div>
  );
}

export default App;
