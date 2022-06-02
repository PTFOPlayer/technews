import React from "react";
import Home from "./Pages/home/Home";
import Topbar from "./comp/Topbar/Topbar";
import SinglePostPage from "./Pages/SinglePostPage/SinglePostPage";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/" >   <Home/>    </Route>
        <Route path="/post/:id">  <SinglePostPage />  </Route>
      </Switch>
    </Router>

  );
}

export default App;
