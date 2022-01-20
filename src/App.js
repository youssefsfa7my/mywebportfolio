import React from "react";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Contact from "./Pages/Contact";

import { Scrollbars } from "react-custom-scrollbars";
import Brilliant from "./Pages/Brilliant";
import TheBusinessHub from "./Pages/TheBusinessHub";
import Stract from "./Pages/Stract";

function App() {
  return (
    <div>
      {/* <Homepage /> */}
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/projects/brilliant" element={<Brilliant />}></Route>
        <Route exact path="/projects/stract" element={<Stract />}></Route>
        <Route
          exact
          path="/projects/thebusinesshub"
          element={<TheBusinessHub />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
