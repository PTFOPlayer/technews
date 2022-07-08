import React from "react";

import {
  BrowserRouter as Router,
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
        <Route exact path="/technews/" element={<Home />} />
        <Route path="/technews/contact" element={<ContactPage/>} />
        <Route path="/technews/post/:id" element={<SinglePostPage />} />
        <Route path="/technews/about" element={<AboutPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
