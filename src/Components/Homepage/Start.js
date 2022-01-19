import React from "react";
import MySVG from "../../Images/MySVG.svg";
import Hero from "../../Images/hero.svg";
import { isMobile } from "react-device-detect";

import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  mainDiv: { textAlign: "-webkit-center", width: "100%" },
  title: {
    opacity: "100%",
    textAlign: "center",
    width: isMobile ? "80%" : "100%",
    fontSize: isMobile ? "7.5vw" : "3.7vw",
    fontFamily: "Eurostile heavy",
    fontWeight: "600",
  },
  text: {
    letterSpacing: "0.1vw",
    marginTop: isMobile ? "5vw" : "2.3vw",
    opacity: "85%",
    textAlign: "center",
    width: isMobile ? "80%" : "100%",
    fontSize: isMobile ? "6vw" : "2vw",
    fontFamily: "Eurostile",
  },
  mysvg: {
    height: isMobile ? "45vw" : "18vw",
    width: isMobile ? "45vw" : "18vw",
    marginTop: isMobile ? "9vw" : "4.5vw",
  },
  hero: {
    height: isMobile ? "90vw" : "50vw",
    width: isMobile ? "90vw" : "50vw",
    marginTop: "-8vw",
    marginBottom: isMobile ? "-26.8vw" : "-14.9vw",
  },
});

export default function Start() {
  const classes = useStyles();

  return (
    <div className={classes.mainDiv}>
      <div className={classes.title}>
        Designer, Front-end & Back-end Developer
      </div>
      <div className={classes.text}>
        I'm Youssef. I design and code beautifully simple things, and I love
        what I do.
      </div>
      <div>
        {" "}
        <img src={MySVG} alt="" className={classes.mysvg} />
      </div>
      <div>
        {" "}
        <img src={Hero} alt="" className={classes.hero} />
      </div>
    </div>
  );
}
