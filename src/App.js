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
import AboutPage from "./Pages/about/AboutPage";

function App() {
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/" >       <Home/>             </Route>
        <Route path="/contact">       <ContactPage/>      </Route>
        <Route path="/post/:id">      <SinglePostPage />  </Route>
        <Route path="/about">         <AboutPage/>        </Route>
      </Switch>
    </Router>

  );
}

export default App;
