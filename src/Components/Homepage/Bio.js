import React from "react";
import { isMobile } from "react-device-detect";

export default function Bio() {
  return (
    <div style={{ textAlign: "center", width: "100%" }}>
      <div
        style={{
          backgroundColor: "#7510F7",
          width: "100%",
          height: isMobile ? "180vw" : "47vw",
          textAlign: "center",
          color: "white",
          fontFamily: "Eurostile",
          fontSize: isMobile ? "6.2vw" : "1.8vw",
          letterSpacing: "0.08vw",
          paddingTop: isMobile ? "20vw" : "10vw",
          paddingRight: isMobile ? "5vw" : "22vw",
          paddingLeft: isMobile ? "5vw" : "22vw",
          marginBottom: isMobile ? "-42vw" : "-10vw",
        }}
      >
        <div
          style={{
            fontSize: isMobile ? "6vw" : "2.5vw",
            fontFamily: "Eurostile heavy",
            letterSpacing: "0.05vw",
            marginBottom: isMobile ? "7vw" : "1.5vw",
          }}
        >
          Hi, I’m Youssef. Nice to meet you.
        </div>
        Since beginning my accademic journey as a Computer Engineer 5 years ago,
        I've done remote work for agencies, mastered my academic projects, and
        focused on improving both my coding and design skills. I'm quietly
        confident, naturally curious, and perpetually working on improving my
        chops one design problem at a time.
      </div>
    </div>
  );
}
