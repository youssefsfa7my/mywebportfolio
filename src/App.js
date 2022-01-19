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
      <div style={{ position: "none" }}>
        <Router>
          <div>
            {/* <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul> */}

            {/* <hr /> */}

            {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
            <Routes>
              <Route exact path="/" element={<Homepage />}></Route>
            </Routes>
            <Routes>
              <Route exact path="/contact" element={<Contact />}></Route>
            </Routes>
            <Routes>
              <Route
                exact
                path="/projects/brilliant"
                element={<Brilliant />}
              ></Route>
            </Routes>
            <Routes>
              <Route exact path="/projects/stract" element={<Stract />}></Route>
            </Routes>
            <Routes>
              <Route
                exact
                path="/projects/thebusinesshub"
                element={<TheBusinessHub />}
              ></Route>
            </Routes>
          </div>
        </Router>
      </div>
    </Scrollbars>
  );
}

export default App;
