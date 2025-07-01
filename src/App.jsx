import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./views/Profile";
import Aboutme from "./views/Aboutme";
import Mycapabilities from "./views/Mycapabilities";
import Myexperience from "./views/Myexperience";
import Contact from "./views/contact"; 
import Profile2 from "./views/Profile2";



function App() {
  return (
    <>
      {/* <Profile /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile />} />
          {/* <Route path="/aboutme" element={<Aboutme />} /> */}
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
