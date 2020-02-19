import React from "react";

import AppHeader from "./components/smallerComponents/AppHeader";

import InboxComp from "./components/InboxComponent";
import DashComponent from "./components/DashComponent";

// import Button from "@material-ui/core/Button";

function App() {
  return (
    <div>
      <AppHeader />

      <h1>Hello Fam</h1>
      <DashComponent />
    </div>
  );
}

export default App;
