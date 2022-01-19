import React from "react";

import { isMobile } from "react-device-detect";
import { makeStyles } from "@mui/styles";
import Header from "../Components/Header2";
import tbhlogo from "../Images/TBHLogoHeader.png";
import tbhBackground from "../Images/weekImage.png";
import tbh_sign from "../Images/tbh_sign.gif";
import tbh_book from "../Images/tbh_book.gif";
import tbh_packages from "../Images/tbh_packages.gif";
import tbh_account from "../Images/tbh_account.gif";
import tbh_home from "../Images/tbh_home.gif";
import tbh_home_m from "../Images/tbh_home_m.gif";
import tbh_sign_m from "../Images/tbh_sign_m.gif";
import tbh_book_m from "../Images/tbh_book_m.gif";
import tbh_packages_m from "../Images/tbh_packages_m.gif";
import tbh_account_m from "../Images/tbh_account_m.gif";
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

export default function TheBusinessHub() {
  const classes = useStyles();
  return (
    <div className={classes.mainDiv}>
      <Header />
      <div className={classes.myCard}>
        {" "}
        <ProjectCardTop
          src={tbhlogo}
          src1={tbhBackground}
          onClick={() => console.log("Card clicked")}
          color={"rgb(255,255,255,0.3)"}
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
        <div className={classes.title}>The business hub Website</div>
        <div className={classes.text}>
          The Business Hub, a startup still in its early years, is an office
          space that opened in 2018 with the purpose of being your
          office-turned-home. The website provides full access to the rooms of
          the cooworking space to either book one or purchase packages. The
          project was both backend and frontend intensive, implemented using
          NoSQL databases, react and expressJs.
        </div>
        <PageContainer
          title={"Home Page"}
          text={
            "HThe homepage describes everything about the startup. With the option to login and become a member. You could scroll around the homepage freely without logging in to have an idea about the business."
          }
          laptop={tbh_home}
          phone={tbh_home_m}
        />
        <PageContainer1
          title={"Sign in/Sign up"}
          text={
            "The website has the option to sign up and become a member, which is performed using a 2 step verification, one step by phone and the other using Email."
          }
          laptop={tbh_sign}
          phone={tbh_sign_m}
        />
        <PageContainer
          title={"Booking Page"}
          text={
            "The booking page is the core of the project with everything built around, the ability to select the date, the room, the slot and all other available options, which is then verified both by the front end and backend sides"
          }
          laptop={tbh_book}
          phone={tbh_book_m}
        />
        <PageContainer1
          title={"Packages Page"}
          text={
            "The packages page contain all the different available packages with their pricings and the ability to directly purchase them and get your points."
          }
          laptop={tbh_packages}
          phone={tbh_packages_m}
        />
        <PageContainer
          title={"Account Page"}
          text={
            "Account page contains all the personal details along with all the purchases and bookings in the past or future. All the account settings are editable and you have full controle over the bookings from here."
          }
          laptop={tbh_account}
          phone={tbh_account_m}
        />
      </div>
    </div>
  );
}
