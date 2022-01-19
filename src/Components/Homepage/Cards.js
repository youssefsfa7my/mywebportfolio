import React from "react";
import frontend from "../../Images/frontend.svg";
import backend from "../../Images/backend.png";
import datanalysit from "../../Images/datanalysit.jpg";
import { isMobile } from "react-device-detect";

import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  mainDiv: {
    textAlign: "center",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    letterSpacing: "0.05vw",
  },
  threeDiv: {
    borderRadius: isMobile ? "4vw" : "1.5vw",
    textAlign: "center",
    width: isMobile ? "88%" : "95%",
    height: isMobile ? "" : "65vw",
    display: isMobile ? "" : "flex",
    boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.25)",
  },
  cardDiv1: {
    borderTopLeftRadius: isMobile ? "4vw" : "1.5vw",
    borderTopRightRadius: isMobile ? "4vw" : "",
    borderBottomLeftRadius: isMobile ? "" : "1.5vw",
    textAlign: "center",
    width: isMobile ? "100%" : "33%",
    height: isMobile ? "205vw" : "65vw",
    backgroundColor: "white",
    padding: isMobile ? "5vw" : "5vw",
    paddingTop: isMobile ? "15vw" : "5vw",

    fontFamily: "Eurostile",
    color: "rgba(0, 0, 0, 0.8)",
    fontSize: isMobile ? "6vw" : "1.6vw",
  },
  cardDiv2: {
    padding: "5vw",
    paddingTop: isMobile ? "15vw" : "5vw",

    textAlign: "center",
    width: isMobile ? "100%" : "34%",
    height: isMobile ? "190vw" : "65vw",
    backgroundColor: "white",
    border: "solid",
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: "0.1vw",
    borderTop: isMobile ? "" : "none",
    borderBottom: isMobile ? "" : "none",
    fontFamily: "Eurostile",
    color: "rgba(0, 0, 0, 0.6)",
    fontSize: isMobile ? "6vw" : "1.6vw",
  },
  cardDiv3: {
    padding: "5vw",
    paddingTop: isMobile ? "15vw" : "5vw",

    fontFamily: "Eurostile",
    color: "rgba(0, 0, 0, 0.6)",
    fontSize: isMobile ? "6vw" : "1.6vw",
    borderTopRightRadius: isMobile ? "" : "1.5vw",
    borderBottomRightRadius: isMobile ? "4vw" : "1.5vw",
    borderBottomLeftRadius: isMobile ? "4vw" : "",
    textAlign: "center",
    width: isMobile ? "100%" : "33%",
    height: isMobile ? "230vw" : "65vw",
    backgroundColor: "white",
  },
  icon: {
    height: isMobile ? "15vw" : "5vw",
    width: isMobile ? "15vw" : "5vw",
  },
  iconAnalytics: {
    height: "5vw !important",
    width: "5vw !important",
    color: "#7510F7",
  },
  titleDiv: {
    color: "rgba(0, 0, 0, 1)",
    padding: "1.5vw",
    fontFamily: "Eurostile heavy",
    fontSize: isMobile ? "6.5vw" : "1.9vw",
  },
  purpleText: { color: "#7510F7", fontWeight: "600", letterSpacing: "0.3vw" },
});
export default function Cards() {
  const classes = useStyles();

  return (
    <div className={classes.mainDiv}>
      <div className={classes.threeDiv}>
        <div className={classes.cardDiv1}>
          {" "}
          <img src={backend} alt="" className={classes.icon} />
          <div style={{ height: isMobile ? "50vw" : "17vw" }}>
            <div className={classes.titleDiv}>Back-end Developer</div>
            I'm detail oriented with structured thoughts and focus in problem
            solving.
          </div>
          <div style={{ height: isMobile ? "30vw" : "10vw" }}>
            <div className={classes.purpleText}>Languages I speak:</div>
            Javascript, SQL,
          </div>
          <div className={classes.purpleText}>Dev Tools:</div>
          NodeJS <br />
          MongoDB
          <br />
          Mongoose
          <br />
          Postgres
          <br />
          ExpressJS
          <br />
          Github
          <br />
          Sublime Merge
          <br />
          Terminal
          <br />
        </div>
        <div className={classes.cardDiv2}>
          {" "}
          <img src={frontend} alt="" className={classes.icon} />
          <div style={{ height: isMobile ? "50vw" : "17vw" }}>
            <div className={classes.titleDiv}>Front-end Developer</div>I like to
            code things from scratch, and enjoy bringing ideas to life in the
            browser.
          </div>
          <div style={{ height: isMobile ? "30vw" : "10vw" }}>
            <div className={classes.purpleText}>Languages I speak:</div>
            HTML, Pug, Slim, CSS, Sass, Less
          </div>
          <div className={classes.purpleText}>Dev Tools:</div>
          React <br />
          Material UI
          <br />
          Bootstrap
          <br />
          Github
          <br />
          Sublime Merge
          <br />
          Terminal
          <br />
        </div>
        <div className={classes.cardDiv3}>
          {/* <AddchartIcon className={classes.iconAnalytics} /> */}
          <img src={datanalysit} alt="" className={classes.icon} />
          <div style={{ height: isMobile ? "60vw" : "17vw" }}>
            <div className={classes.titleDiv}>Data Scientist</div>I analyze
            large amounts of data to make valuable insights, using computer
            vision and machine learning algorithms.
          </div>
          <div style={{ height: isMobile ? "30vw" : "10vw" }}>
            <div className={classes.purpleText}>Languages I speak:</div>
            Python, Java, Javascript
          </div>
          <div className={classes.purpleText}>Dev Tools:</div>
          Numpy <br />
          Pandas
          <br />
          Matplotlib
          <br />
          Matlab
          <br />
          Tensorflow
          <br />
          Torch
          <br />
          YOLO
          <br />
          Github
          <br />
          Sublime Merge
          <br />
          Terminal
          <br />
        </div>
      </div>
    </div>
  );
}
