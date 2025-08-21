import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "./views/Profile";
import Aboutme from "./views/Aboutme";
import Mycapabilities from "./views/Mycapabilities";
import Myexperience from "./views/Myexperience";
import Contact from "./views/contact"; 
import Profile2 from "./views/Profile2";



import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/mycapabilities" element={<Mycapabilities />} />
        <Route path="/myexperience" element={<Myexperience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile2" element={<Profile2 />} />
      </Routes>
    </HashRouter>
  );
}


export default App;