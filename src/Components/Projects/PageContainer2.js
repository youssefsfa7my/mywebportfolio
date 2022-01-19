import React from "react";
import laptop from "../../Images/laptop.png";
import phone from "../../Images/phone.png";

import { isMobile } from "react-device-detect";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  laptop: {
    top: "1vw",
    right: "25vw",
    position: "absolute",
    height: isMobile ? "90vw" : "32.8vw",
    width: isMobile ? "90vw" : "50vw",
    //width: isMobile ? "90vw" : "50vw",
    // marginTop: "-8vw",
    //marginBottom: isMobile ? "-28vw" : "-14.9vw",
  },
  phone: {
    top: "3vw",
    left: "5vw",
    position: "absolute",

    height: isMobile ? "90vw" : "29vw",
    //width: isMobile ? "90vw" : "50vw",
    // marginTop: "-8vw",
    //marginBottom: isMobile ? "-28vw" : "-14.9vw",
  },
  laptopScreen: {
    position: "absolute",
    top: "6vw",
    right: "31.5vw",
    height: isMobile ? "90vw" : "23vw",
    width: isMobile ? "90vw" : "37vw",

    //width: isMobile ? "90vw" : "50vw",
    // marginTop: "-8vw",
    //marginBottom: isMobile ? "-28vw" : "-14.9vw",
  },
  phoneScreen: {
    position: "absolute",
    top: "5vw",
    left: "6.2vw",
    height: isMobile ? "90vw" : "24vw",
    width: isMobile ? "90vw" : "12.8vw",
    backgroundPositionX: "center",
    backgroundPositionY: "27vw",
    backgroundSize: "62vw",

    //width: isMobile ? "90vw" : "50vw",
    // marginTop: "-8vw",
    //marginBottom: isMobile ? "-28vw" : "-14.9vw",
  },
  mainDiv: {
    position: "relative",
    display: "flex",
    alignItems: "center",
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
          backgroundColor: "#7510F7",
          width: "100%",
          height: isMobile ? "170vw" : "40vw",
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
              color: "white",
              marginTop: "7vw",
              width: "27vw",
              fontSize: isMobile ? "7.5vw" : "2.5vw",
              fontFamily: "Eurostile bold",
              letterSpacing: "0.05vw",
              marginBottom: "1.5vw",
            }}
          >
            {props.title}{" "}
            <div
              style={{
                color: "white",
                width: "27vw",
                fontSize: isMobile ? "7.5vw" : "1.5vw",
                fontFamily: "Eurostile",
                letterSpacing: "0.05vw",
                marginBottom: "1.5vw",
                paddingLeft: "5vw",
                paddingRight: "5vw",
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
