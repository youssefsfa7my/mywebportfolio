import React from "react";
import Header from "../Components/Header2";
import MySVG from "../Images/MySVG.svg";
import { isMobile } from "react-device-detect";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import PhoneIcon from "@mui/icons-material/Phone";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import logoWhite from "../Images/logoWhite.svg";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "../CSS/Header.css";
import { makeStyles } from "@mui/styles";
import Form from "../Components/Contact/Form";
import SimpleSnackbar from "../Components/Contact/SimpleSnackBar";

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
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const useStyles = makeStyles({
  icon: {
    height: isMobile ? "5vw !important" : "2vw",
    width: isMobile ? "5vw !important" : "2vw",
    margin: isMobile ? "2vw !important" : "",
  },
  contactDiv: {
    placeContent: "center",
    textAlign: "-webkit-center",
  },
  iconsStack: {
    placeContent: "center",
  },
  startProjectDiv: {
    alignItems: "center",

    position: "relative",
    top: "-5vw",
    marginRight: "2.5vw",
    marginLeft: "2.5vw",
    borderRadius: "1.5vw",
    width: "95vw",
    height: "15vw",
    display: "flex",
    backgroundColor: "#141c3a",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
  },
  mainDiv: {
    marginTop: "10vw",
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
    height: "50vw",
    backgroundColor: "#7510F7",
  },
  slogan: {
    padding: "3vw",
    letterSpacing: "0.05vw",
    color: "rgb(255,255,255,0.7)",
    width: isMobile ? "60vw" : "32vw",
    fontFamily: "Eurostile",
    fontSize: isMobile ? "5.5vw" : "2.3vw",
    lineHeight: isMobile ? "6vw" : "2.3vw",
  },
  cc: {
    padding: "4vw",
    paddingBottom: "1vw",
    letterSpacing: "0.08vw",
    color: "rgb(255,255,255,0.7)",
    width: "32vw",
    fontFamily: "Eurostile",
    fontSize: "1.5vw",
    lineHeight: "2.3vw",
  },
  checkOut: {
    letterSpacing: "0.08vw",
    color: "rgb(255,255,255,0.9)",
    width: "32.5vw",
    fontFamily: "Eurostile bold",
    fontSize: "3vw",
    lineHeight: "3.5vw",
  },
  interested: {
    letterSpacing: "0.1vw",
    color: "rgb(255,255,255,0.9)",
    width: "30vw",

    fontFamily: "Eurostile",
    fontSize: "1.5vw",
    lineHeight: "2.3vw",
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
    marginLeft: "1vw",
    height: "4.5vw",
    width: "15vw",
    fontSize: "2vw",
    borderRadius: "10vw",
    color: "white",
    borderColor: "#7510F7",
    borderWidth: "0.2vw",
    fontWeight: "400",
    padding: "0.7vw",
  },
  logoWhite: {
    height: isMobile ? "10vw" : "4vw",
    width: isMobile ? "10vw" : "4vw",
  },
  logoReact: {
    height: "2.5vw",
    width: "2.5vw",
    paddingLeft: "0.2vw",
    paddingBottom: "0.2vw",
  },
  title: {
    opacity: "95%",
    textAlign: "center",
    width: isMobile ? "100%" : "100%",
    padding: isMobile ? "13vw" : "",

    fontSize: isMobile ? "7.5vw" : "4vw",
    fontFamily: "Eurostile",
    letterSpacing: "0.1vw",
    lineHeight: isMobile ? "7.5vw" : "3.5vw",
    marginTop: isMobile ? "7.5vw" : "7vw",
  },
  text: {
    letterSpacing: "0.1vw",
    marginTop: isMobile ? "10vw" : "-9vw",
    opacity: "85%",
    textAlign: "center",
    width: isMobile ? "100%" : "50%",
    marginLeft: isMobile ? "" : "25%",

    fontSize: isMobile ? "6vw" : "1.5vw",
    fontFamily: "Eurostile",
    marginBottom: isMobile ? "-20vw" : "4vw",
  },
  mysvg: {
    height: isMobile ? "25vw" : "8vw",
    width: isMobile ? "25vw" : "8vw",
    marginTop: isMobile ? "-20vw" : "-11.25vw",
    cursor: "pointer",
  },
  "&:hover ": {
    height: isMobile ? "30vw" : "10vw",
    width: isMobile ? "30vw" : "10vw",
  },
  hero: {
    height: isMobile ? "90vw" : "50vw",
    width: isMobile ? "90vw" : "50vw",
    marginTop: "-8vw",
    marginBottom: isMobile ? "-28vw" : "-14.9vw",
  },
});

export default function Contact() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div style={{ textAlign: "center", width: "100%" }}>
      <Header />
      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <img src={MySVG} alt="" className={classes.mysvg} />
      </ExpandMore>
      <div
        style={{
          marginTop: isMobile ? "-13vw" : "-6vw",
          height: "0.05vw",
          backgroundColor: "rgb(0,0,0,0.2)",
        }}
      />{" "}
      <div className={classes.text}>
        {isMobile ? "" : <br />}
        Click for my card!
      </div>
      <Collapse
        style={{ textAlign: "-webkit-center" }}
        in={expanded}
        timeout="auto"
        unmountOnExit
      >
        <Card
          sx={{ maxWidth: isMobile ? "80vw" : "40vw" }}
          style={{
            marginTop: isMobile ? "25vw" : "8vw",
            borderRadius: isMobile ? "4.5vw" : "1vw",

            backgroundColor: "#7510F7",
          }}
        >
          <CardContent>
            <div className={classes.contactDiv}>
              <img src={logoWhite} alt="" className={classes.logoWhite} />
              <div className={classes.slogan}>
                Living, learning, & leveling up one day at a time.
              </div>
              <Stack
                direction="row"
                spacing={"2vw"}
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
            </div>
          </CardContent>{" "}
        </Card>
      </Collapse>
      <br />
      <br />
      <br />
      <div className={classes.title}>
        Thanks for taking the time to reach out.
        <br /> How can I help you today?
      </div>{" "}
      <Form />
      <SimpleSnackbar open={open} setOpen={setOpen} />
    </div>
  );
}
