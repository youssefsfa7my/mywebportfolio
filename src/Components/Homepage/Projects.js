import React from "react";
import { makeStyles } from "@mui/styles";

import ProjectCard from "./ProjectCard";
import brilliantLogoY from "../../Images/BrilliantLogoWhite.png";
import brilliantW from "../../Images/home1.png";
import { useNavigate } from "react-router-dom";

import tbhlogo from "../../Images/TBHLogoHeader.png";
import tbhBackground from "../../Images/weekImage.png";

import stractlogo from "../../Images/stractLogo.png";
import stractBackground from "../../Images/freelancing.jpeg";
import { isMobile } from "react-device-detect";

const useStyles = makeStyles({
  cardsDiv: {
    display: isMobile ? "" : "flex",
    marginTop: isMobile ? "7vw" : "",
  },
  cardDiv: {
    padding: isMobile ? "0" : "2.5vw",
  },
  card: {
    backgroundColor: "red !important",
    width: "30vw !important",
    height: "20vw !important",
    cursor: "pointer !important",
  },
  cardDiv2: {
    paddingTop: isMobile ? "7vw" : "2.5vw",
    paddingBottom: isMobile ? "7vw" : "2.5vw",
  },
  title: {
    color: "rgb(0,0,0)",
    fontFamily: "Eurostile heavy",
    fontSize: isMobile ? "6.5vw" : "2.3vw",
    lineHeight: "2.3vw",
    letterSpacing: "0.08vw",
    marginBottom: isMobile ? "7vw" : "",
  },
  text: {
    width: isMobile ? "80%" : "",
    color: "rgb(0,0,0,0.7)",
    fontFamily: "Eurostile",
    fontSize: isMobile ? "4.5vw" : "1.7vw",
    lineHeight: "2.3vw",
    letterSpacing: "0.08vw",
  },
  mainDiv: {
    width: isMobile ? "88vw" : "",
    marginLeft: isMobile ? "6vw" : "",
    marginTop: isMobile ? "20vw" : "10vw",
  },

  emailme: {
    color: "#7510F7",
    cursor: "pointer",
    textDecoration: "none !important",
  },
  a: {
    textDecoration: "none",
  },
});

export default function Projects() {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.mainDiv} id={"projects"}>
      <span className={classes.title}>My Recent Work </span>
      <br /> <br />
      <span className={classes.text}>
        Here are a few projects I've worked on recently. Want to see more?{" "}
        <a className={classes.a} href={"mailto:youssefsamirfahmy@gmail.com"}>
          <span
            className={classes.emailme}
            href={"mailto:youssefsamirfahmy@gmail.com"}
          >
            Email me.
          </span>
        </a>
      </span>
      <div className={classes.cardsDiv}>
        <div className={classes.cardDiv}>
          <ProjectCard
            src={brilliantLogoY}
            src1={brilliantW}
            onClick={() => {
              var element = document.getElementById("toplogo");
              element.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest",
              });
              navigate("/projects/brilliant");
            }}
            color={"rgb(250,158,35,0.3)"}
          />
        </div>
        <div className={classes.cardDiv2}>
          <ProjectCard
            src={tbhlogo}
            src1={tbhBackground}
            color={"rgb(255,255,255,0.3)"}
            onClick={() => {
              var element = document.getElementById("toplogo");
              element.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest",
              });
              navigate("/projects/thebusinesshub");
            }}
          />
        </div>{" "}
        <div className={classes.cardDiv}>
          <ProjectCard
            src={stractlogo}
            src1={stractBackground}
            color={"rgb(128,0,128,0.5)"}
            height={"4vw"}
            marginTop={"7.5vw"}
            onClick={() => {
              var element = document.getElementById("toplogo");
              element.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest",
              });
              navigate("/projects/stract");
            }}
          />
        </div>
      </div>
    </div>
  );
}
