import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Bio from "../Components/Homepage/Bio";
import Cards from "../Components/Homepage/Cards";
import Projects from "../Components/Homepage/Projects";
import Start from "../Components/Homepage/Start";
export default function Homepage() {
  return (
    <div style={{ textAlign: "center", width: "100%" }}>
      <Header />
      <Start />
      <Bio />
      <Cards />
      <Projects />
      <Footer />
    </div>
  );
}
