import React from "react";

import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./Pages/home/Home";
import Topbar from "./comp/Topbar/Topbar";
import SinglePostPage from "./Pages/SinglePostPage/SinglePostPage";
import ContactPage from "./Pages/contact/ContactPage";

function App() {
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/home" >   <Home/>             </Route>
        <Route path="/contact">       <ContactPage/>      </Route>
        <Route path="/post/:id">      <SinglePostPage />  </Route>

      </Switch>
    </Router>

  );
}

export default App;
