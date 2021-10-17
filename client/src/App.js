import React from "react";

// We use Route in order to define the different routes of our application
import { Route } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/Navbar";
import Edit from "./components/edit";
import Create from "./components/create";
import RecordList from "./components/recordList";
import Home from "./components/Home";
import Status from "./components/status";

const App = () => {
  return (
    <div>
      
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/status">
        <Status />
      </Route>
      <Route path="/create">
        <Create />
      </Route>
      <Route path="/recordList">
        <RecordList/>
      </Route>
    </div>
  );
};

export default App;