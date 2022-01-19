import React from "react";

import { isMobile } from "react-device-detect";
import { makeStyles } from "@mui/styles";
import Header from "../Components/Header2";
import brilliantLogoY from "../Images/BrilliantLogoWhite.png";
import brilliantW from "../Images/home1.png";
import brilliant_products from "../Images/briliant_products.gif";
import brilliant_services from "../Images/briliant_services.gif";
import brilliant_about from "../Images/brilliant_about.gif";
import brilliant_contact from "../Images/brilliant_contact.gif";
import brilliant_home from "../Images/brilliant_home.gif";
import brilliant_home_m from "../Images/brilliant_home_m.gif";
import brilliant_products_m from "../Images/briliant_products_m.gif";
import brilliant_services_m from "../Images/briliant_services_m.gif";
import brilliant_about_m from "../Images/brilliant_about_m.gif";
import brilliant_contact_m from "../Images/brilliant_contact_m.gif";
import ProjectCardTop from "../Components/Projects/ProjectCardTop";
import PageContainer from "../Components/Projects/PageContainer";
import PageContainer1 from "../Components/Projects/PageContainer1";

const useStyles = makeStyles({
  mainDiv: {
    textAlign: "-webkit-center",
    width: "100%",
  },
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
    marginTop: isMobile ? "15vw" : "-8vw",
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

export default function Brilliant() {
  const classes = useStyles();
  return (
    <div className={classes.mainDiv}>
      <Header />
      <div className={classes.myCard}>
        {" "}
        <ProjectCardTop
          src={brilliantLogoY}
          src1={brilliantW}
          onClick={() => console.log("Card clicked")}
          color={"rgb(250,158,35,0.3)"}
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
        <div className={classes.title}>Brilliant Website</div>
        <div className={classes.text}>
          Brilliant is an Australian lift installation and maintenance company.
          The websit's main objective waas providing the identity and services
          of Brilliant and the ability to view some of their work and contact
          them. The project was front-end intensive, implemented using react and
          expressJs.
        </div>
        <PageContainer
          title={"Home Page"}
          text={
            " The homepage is the identity of the company. Starts with a display photo which acts as the tab navigator. A vertical carousel was implemented from scratch along with other components."
          }
          laptop={brilliant_home}
          phone={brilliant_home_m}
        />
        <PageContainer1
          title={"Products Page"}
          text={
            " Product page displays the different products available in the form of a vertical slide-show which was implemented from scratch along with the history portfolio."
          }
          laptop={brilliant_products}
          phone={brilliant_products_m}
        />
        <PageContainer
          title={"Services Page"}
          text={
            " Services page is a basic view only page with link to enquiries page."
          }
          laptop={brilliant_services}
          phone={brilliant_services_m}
        />
        <PageContainer1
          title={"About Us Page"}
          text={
            "About is page contains 3 cards each displaying some information about the company in a distinced way"
          }
          laptop={brilliant_about}
          phone={brilliant_about_m}
        />
        <PageContainer
          title={"Contact Us Page"}
          text={
            "Contact us page contains the contact information of the comany along with a submittible form for any inquiries, also some animation just for the sake of fun."
          }
          laptop={brilliant_contact}
          phone={brilliant_contact_m}
        />
      </div>
    </div>
  );
}
