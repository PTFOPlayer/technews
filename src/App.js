import React from "react";

import {
  HashRouter as Router,
  Routes,
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
      <Routes>
        <Route exact path="/" element={<Home />}>          </Route>
        <Route path="/contact" element={<ContactPage/>}>           </Route>
        <Route path="/post/:id" element={<SinglePostPage /> }>       </Route>
        <Route path="/about" element={<AboutPage/>}>               </Route>
      </Routes>
    </Router>

  );
}

export default App;
