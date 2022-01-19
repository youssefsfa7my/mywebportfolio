import React from "react";

import { isMobile } from "react-device-detect";
import { makeStyles } from "@mui/styles";
import Header from "../Components/Header2";

import stractlogo from "../Images/stractLogo.png";
import stractBackground from "../Images/freelancing.jpeg";
import stract_calendar from "../Images/stract_calendar.gif";
import stract_verify from "../Images/stract_verify.gif";
import stract_choose from "../Images/stract_choose.gif";
import stract_tabs from "../Images/stract_tabs.gif";
import stract_sign from "../Images/stract_sign.gif";
import stract_sign_m from "../Images/stract_sign_m.gif";
import stract_calendar_m from "../Images/stract_calendar.gif";
import stract_verify_m from "../Images/stract_verify_m.gif";
import stract_choose_m from "../Images/stract_choose_m.gif";
import stract_tabs_m from "../Images/stract_tabs_m.gif";
import ProjectCardTop from "../Components/Projects/ProjectCardTop";
import PageContainer from "../Components/Projects/PageContainer";
import PageContainer1 from "../Components/Projects/PageContainer1";

const useStyles = makeStyles({
  mainDiv: { textAlign: "-webkit-center", width: "100%" },
  title: {
    marginTop: isMobile ? "10vw" : "",

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
    width: isMobile ? "85%" : "80%",
    fontSize: isMobile ? "6vw" : "2vw",
    fontFamily: "Eurostile",
    marginBottom: isMobile ? "15vw" : "5vw",
  },
  myCard: {
    height: isMobile ? "45vw" : "8vw",
    width: isMobile ? "45vw" : "8vw",
    marginTop: isMobile ? "9vw" : "-8vw",
  },
  laptop: {
    height: isMobile ? "90vw" : "40vw",
    //width: isMobile ? "90vw" : "50vw",
    marginTop: "-8vw",
    //marginBottom: isMobile ? "-28vw" : "-14.9vw",
  },
  phone: {
    height: isMobile ? "90vw" : "10vw",
    //width: isMobile ? "90vw" : "50vw",
    marginTop: "-8vw",
    //marginBottom: isMobile ? "-28vw" : "-14.9vw",
  },
  div: {},
});

export default function Stract() {
  const classes = useStyles();
  return (
    <div className={classes.mainDiv}>
      <Header />
      <div className={classes.myCard}>
        <ProjectCardTop
          src={stractlogo}
          src1={stractBackground}
          onClick={() => console.log("Card clicked")}
          color={"rgb(128,0,128,0.5)"}
          height={"1.75vw"}
          marginTop={"2.5vw"}
        />
      </div>
      <div
        style={{
          marginTop: isMobile ? "-32vw" : "-4.5vw",
          height: "0.05vw",
          backgroundColor: "rgb(0,0,0,0.2)",
        }}
      />
      <br />
      <br />
      <br />
      <div className={classes.mainDiv}>
        <div className={classes.title}>Stract Website</div>
        <div className={classes.text}>
          Stract is a portal for clients to hire freelancers that are a part of
          a larger organization. Stract aims to ensure company policies using
          their website, and provide a secure, trustworthy experience to both
          their clients and workers.The project was both backend and frontend
          intensive, implemented using NoSQL databases, react and expressJs
          .Moreover it was also implemented as a flutter app linked to the same
          backend.
        </div>
        <PageContainer
          title={"Signin/Signup Page"}
          text={
            " The website has the option to sign up and become a member, which is performed using a 2 step verification, one step by phone and the other using Email."
          }
          laptop={stract_sign}
          phone={stract_sign_m}
        />
        <PageContainer1
          title={"Calendar Page"}
          text={
            "The calendar contains different componentss all connected together using states and state manipulations."
          }
          laptop={stract_calendar}
          phone={stract_calendar_m}
        />
        <PageContainer
          title={"Verification Page"}
          text={
            "Sign in is performed using a 2 step verification, one step by phone and the other using Email."
          }
          laptop={stract_verify}
          phone={stract_verify_m}
        />
        <PageContainer1
          title={"Customer Choice Page"}
          text={
            "The website provides both the client and vendor systems which you just choose at the registering stages."
          }
          laptop={stract_choose}
          phone={stract_choose_m}
        />
        <PageContainer
          title={"Tab Carousel"}
          text={
            "A tab carousel was implented from scratch to ensure the clients vision of the tab navigation"
          }
          laptop={stract_tabs}
          phone={stract_tabs_m}
        />
      </div>
    </div>
  );
}
