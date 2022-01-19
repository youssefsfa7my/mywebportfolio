import React from "react";
import logoWhite from "../Images/logoWhite.svg";
import logoReact from "../Images/logo512.png";
import PhoneIcon from "@mui/icons-material/Phone";

import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Button from "react-bootstrap/Button";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/styles";
import Pdf from "../docs/Youssef-Fahmy-Curriculum-Vitae.pdf";

import { isMobile } from "react-device-detect";

//import Button from "react-bootstrap/Button";
import "../CSS/Footer.css";
import SimpleSnackbar from "./Contact/SimpleSnackBar";

const MyIconButton = styled(IconButton)({
  background: "none !important",
  border: isMobile ? "0.75vw !important" : "0.2vw !important",
  borderStyle: "solid !important",
  borderColor: "rgb(255,255,255,0.4) !important",
  color: "white !important",
  padding: "1vw 1vw !important",
  "&:hover ": {
    background: "white !important",
    border: "0.2vw !important",
    borderStyle: "solid !important",
    borderColor: "white !important",
    color: "#7510F7 !important",
    padding: "1vw 1vw !important",
  },
});

const useStyles = makeStyles({
  icon: {
    height: isMobile ? "6vw !important" : "2vw",
    width: isMobile ? "6vw !important" : "2vw",
    margin: isMobile ? "3vw !important" : "",
  },
  contactDiv: {
    fontSize: isMobile ? "4.5vw" : "",
    placeContent: "center",
    textAlign: "-webkit-center",
  },
  iconsStack: {
    marginTop: isMobile ? "10vw " : "",
    placeContent: "center",
  },
  startProjectDiv: {
    alignItems: "center",
    position: "relative",
    top: isMobile ? "-25vw" : "-5vw",
    marginRight: isMobile ? "6vw" : "2.5vw",
    marginLeft: isMobile ? "6vw" : "2.5vw",
    borderRadius: isMobile ? "4vw" : "1.5vw",
    width: isMobile ? "88vw" : "95vw",
    height: isMobile ? "100vw" : "15vw",
    display: isMobile ? "" : "flex",
    backgroundColor: "#141c3a",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
  },
  mainDiv: {
    marginTop: isMobile ? "50vw" : "10vw",
    width: "100%",
    height: "30vw",
    letterSpacing: "0.08vw",
    color: "rgb(255,255,255,0.7)",
    fontFamily: "Eurostile",
    fontSize: "1.3vw",
    lineHeight: "2.3vw",
  },
  purpleDiv: {
    width: "100%",
    height: isMobile ? "250vw" : "50vw",
    backgroundColor: "#7510F7",
  },
  slogan: {
    padding: isMobile ? "10vw" : "3vw",
    letterSpacing: "0.05vw",
    color: "rgb(255,255,255,0.7)",
    width: isMobile ? "100vw" : "32vw",
    fontFamily: "Eurostile",
    fontSize: isMobile ? "8vw" : "2.3vw",
    lineHeight: isMobile ? "9vw" : "2.3vw",
  },
  cc: {
    padding: "4vw",
    paddingBottom: isMobile ? "9vw" : "1vw",
    paddingTop: isMobile ? "30vw" : "",
    letterSpacing: isMobile ? "0.3vw" : "0.08vw",
    color: "rgb(255,255,255,0.7)",
    width: isMobile ? "88vw" : "32vw",
    fontFamily: "Eurostile",
    fontSize: isMobile ? "5.5vw" : "1.5vw",
    lineHeight: "2.3vw",
  },
  checkOut: {
    letterSpacing: "0.08vw",
    color: "rgb(255,255,255,0.9)",
    width: isMobile ? "100%" : "32.5vw",
    fontFamily: "Eurostile bold",
    fontSize: isMobile ? "7.5vw" : "3vw",
    lineHeight: isMobile ? "7vw" : "3.5vw",
    paddingTop: isMobile ? "15vw" : "",
  },
  interested: {
    letterSpacing: "0.1vw",
    color: "rgb(255,255,255,0.9)",
    width: isMobile ? "100%" : "30vw",
    fontFamily: "Eurostile",
    fontSize: isMobile ? "5.5vw" : "1.5vw",
    lineHeight: isMobile ? "6vw" : "2.3vw",
    padding: isMobile ? "15vw" : "",
  },
  letsDoIt: {
    letterSpacing: "0.08vw",
    color: "rgb(255,255,255,0.7)",
    width: "32.5vw",
    fontFamily: "Eurostile",
    fontSize: "1.5vw",
    lineHeight: "2.3vw",
  },
  button: {
    marginLeft: isMobile ? "19vw" : "1vw",
    height: isMobile ? "13vw" : "4.5vw",
    width: isMobile ? "50vw" : "15vw",
    fontSize: isMobile ? "6vw" : "2vw",
    borderRadius: "10vw",
    color: "white",
    borderColor: "#7510F7",
    borderWidth: isMobile ? "0.7vw" : "0.2vw",
    fontWeight: "400",
    padding: isMobile ? "2vw" : "0.7vw",
  },
  logoWhite: {
    height: isMobile ? "15vw" : "4vw",
    width: isMobile ? "15vw" : "4vw",
  },
  logoReact: {
    height: isMobile ? "10vw" : "2.5vw",
    width: isMobile ? "10vw" : "2.5vw",
    paddingLeft: "0.2vw",
    paddingBottom: "0.2vw",
  },
});

export default function Footer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <div className={classes.mainDiv}>
      <div className={classes.purpleDiv}>
        <div className={classes.startProjectDiv}>
          <div className={classes.checkOut}>
            Check out {isMobile ? "" : <br />}
            my CV
          </div>{" "}
          <div className={classes.interested}>
            Interested in working together? We should queue up a chat. I’ll buy
            the coffee.
          </div>
          <div className={classes.letsDoIt}>
            <Button
              variant="outline-primary"
              className={classes.button}
              href={Pdf}
              target="_blank"
              //download
            >
              Download CV
            </Button>
          </div>
        </div>
        <div className={classes.contactDiv}>
          <img src={logoWhite} alt="" className={classes.logoWhite} />
          <div className={classes.slogan}>
            Living, learning, & leveling up one day at a time.
          </div>
          <Stack
            direction="row"
            spacing={isMobile ? "1.5vw " : "2vw"}
            className={classes.iconsStack}
          >
            <MyIconButton
              color="primary"
              aria-label="add to shopping cart"
              href={"https://github.com/youssefsfahmy"}
              target="_blank"
            >
              <GitHubIcon className={classes.icon} />
            </MyIconButton>
            <MyIconButton
              color="primary"
              aria-label="add to shopping cart"
              href={"https://www.linkedin.com/in/youssefsfahmy/"}
              target="_blank"
            >
              <LinkedInIcon className={classes.icon} />
            </MyIconButton>{" "}
            <MyIconButton
              color="primary"
              aria-label="add to shopping cart"
              //href={"mailto:youssefsamirfahmy@gmail.com"}
              href={
                "https://mail.google.com/mail/?view=cm&fs=1&to=youssefsamirfahmy@gmail.com"
              }
              target="_blank"
            >
              <MailOutlineIcon className={classes.icon} />
            </MyIconButton>{" "}
            <MyIconButton
              color="primary"
              aria-label="add to shopping cart"
              href="//api.whatsapp.com/send?phone=00201287666534&text=I would like to enquire about"
              target="_blank"
            >
              <WhatsAppIcon className={classes.icon} />
            </MyIconButton>{" "}
            <MyIconButton
              color="primary"
              aria-label="add to shopping cart"
              target="_blank"
              onClick={() => {
                navigator.clipboard.writeText("00201287666534");
                setOpen(true);
              }}
            >
              <PhoneIcon className={classes.icon} />
            </MyIconButton>{" "}
          </Stack>
          <div className={classes.cc}>Handcrafted by me &#9400; 2021 </div>
          Made with
          <img src={logoReact} alt="" className={classes.logoReact} /> React
        </div>
        <SimpleSnackbar open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}
