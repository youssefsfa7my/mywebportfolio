import React from "react";
import laptop from "../../Images/laptopB.png";
import phone from "../../Images/phoneB.png";

import { isMobile } from "react-device-detect";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  laptop: {
    top: isMobile ? "100vw" : "1vw",
    right: isMobile ? "0" : "25vw",
    position: "absolute",
    height: isMobile ? "65vw" : "32.8vw",
    width: isMobile ? "100vw" : "50vw",
    //width: isMobile ? "90vw" : "50vw",
    // marginTop: "-8vw",
    //marginBottom: isMobile ? "-28vw" : "-14.9vw",
  },
  phone: {
    top: isMobile ? "180vw" : "3vw",
    left: isMobile ? "12.5vw" : "5vw",
    position: "absolute",
    height: isMobile ? "135vw" : "29vw",
    width: isMobile ? "75vw" : "",
  },
  laptopScreen: {
    position: "absolute",
    top: isMobile ? "110vw" : "6vw",
    right: isMobile ? "12.5vw" : "31.5vw",
    height: isMobile ? "44vw" : "23vw",
    width: isMobile ? "75vw" : "37vw",
  },
  phoneScreen: {
    position: "absolute",
    top: isMobile ? "193vw" : "5vw",
    left: isMobile ? "18.2vw" : "6.2vw",
    height: isMobile ? "107vw" : "24vw",
    width: isMobile ? "64vw" : "13vw",
    backgroundPositionX: "center",
    backgroundPositionY: isMobile ? "-40vw" : "27vw",
    backgroundSize: isMobile ? "300vw" : "62vw",

    //width: isMobile ? "90vw" : "50vw",
    // marginTop: "-8vw",
    //marginBottom: isMobile ? "-28vw" : "-14.9vw",
  },
  mainDiv: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    flexDirection: isMobile ? "column" : "",

    justifyContent: "flex-end",
  },
});
export default function PageContainer(props) {
  const classes = useStyles();

  return (
    <div
      style={{
        textAlign: "center",
        width: "100%",
        marginTop: "0.05vw",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          width: "100%",
          height: isMobile ? "320vw" : "35vw",
          textAlign: "center",
          color: "white",
          fontFamily: "Eurostile",
          fontSize: isMobile ? "6.2vw" : "1.8vw",
          letterSpacing: "0.08vw",

          //   paddingTop: "10vw",
          //   paddingRight: isMobile ? "5vw" : "22vw",
          //   paddingLeft: isMobile ? "5vw" : "22vw",
          //   marginBottom: "-10vw",
        }}
      >
        <div className={classes.mainDiv}>
          <div
            style={{
              color: "black",
              marginTop: isMobile ? "14vw" : "7vw",
              width: isMobile ? "88vw" : "27vw",
              fontSize: isMobile ? "7.5vw" : "2.5vw",
              fontFamily: "Eurostile bold",
              letterSpacing: "0.05vw",
              marginBottom: "1.5vw",
            }}
          >
            {props.title}{" "}
            <div
              style={{
                color: "black",
                width: isMobile ? "88vw" : "27vw",
                fontSize: isMobile ? "6.5vw" : "1.5vw",
                fontFamily: "Eurostile",
                letterSpacing: "0.05vw",
                marginBottom: "1.5vw",
                paddingLeft: isMobile ? "6vw" : "5vw",
                paddingRight: isMobile ? "6vw" : "5vw",
              }}
            >
              <br />
              {props.text}{" "}
            </div>
          </div>
          <img src={laptop} alt="" className={classes.laptop} />{" "}
          <img src={props.laptop} alt="" className={classes.laptopScreen} />{" "}
          {/* <img src={props.phone} alt="" className={classes.phone} />{" "} */}
          <div
            className={classes.phoneScreen}
            style={{ backgroundImage: `url(${props.phone})` }}
          >
            {" "}
          </div>{" "}
          <img src={phone} alt="" className={classes.phone} />{" "}
        </div>
      </div>{" "}
    </div>
  );
}
