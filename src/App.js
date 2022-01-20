import React from "react";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Contact from "./Pages/Contact";

import { Scrollbars } from "react-custom-scrollbars";
import Brilliant from "./Pages/Brilliant";
import TheBusinessHub from "./Pages/TheBusinessHub";
import Stract from "./Pages/Stract";
import Thankyou from "./Pages/Thankyou";

function App() {
  return (
    <Scrollbars
      id={"scrollbars"}
      style={{ width: "100%", height: "100vh" }}
      // renderTrackHorizontal={(props) => (
      //   <div {...props} className="track-horizontal" />
      // )}
      renderTrackVertical={(props) => (
        <div {...props} className="track-vertical" />
      )}
      // renderThumbHorizontal={(props) => (
      //   <div {...props} className="thumb-horizontal" />
      // )}
      renderThumbVertical={(props) => (
        <div {...props} className="thumb-vertical" />
      )}
    >
      <div>
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/thankyou" element={<Thankyou />}></Route>

          <Route
            exact
            path="/projects/brilliant"
            element={<Brilliant />}
          ></Route>
          <Route exact path="/projects/stract" element={<Stract />}></Route>
          <Route
            exact
            path="/projects/thebusinesshub"
            element={<TheBusinessHub />}
          ></Route>
        </Routes>
      </div>
    </Scrollbars>
  );
}

export default App;
