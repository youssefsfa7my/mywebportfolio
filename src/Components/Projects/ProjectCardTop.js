import React from "react";
import Card from "react-animated-3d-card";
import { makeStyles } from "@mui/styles";
import { isMobile } from "react-device-detect";

const useStyles = makeStyles({
  logo: {
    height: isMobile ? "10vw" : "3vw",
    marginTop: isMobile ? "9vw" : "2vw",
  },
  div: {
    //backgroundColor: "rgb(250,158,35,0.3)",
    width: isMobile ? "40vw" : "10vw",
    height: isMobile ? "28vw" : "7vw",
  },
});
export default function ProjectCardTop(props) {
  const classes = useStyles();

  return (
    <div
      style={{
        marginTop: isMobile ? "-16vw" : "",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        href="https://web.i12.lirten.com/home"
        style={{
          backgroundImage: `url(${props.src1})`,
          placeContent: "center",
          // backgroundColor: "#7510F7",
          width: isMobile ? "40vw" : "10vw",
          height: isMobile ? "28vw" : "7vw",
          cursor: "pointer",
          backgroundPosition: "center",
          backgroundSize: "cover",
          borderRadius: isMobile ? "4.5vw" : "1vw",
        }}
        onClick={() => props.onClick}
        shineStrength={0.6}
      >
        <div
          className={classes.div}
          style={{ backgroundColor: `${props.color}` }}
        >
          <img
            src={props.src}
            alt=""
            style={{
              height: `${props.height}`,
              marginTop: `${props.marginTop}`,
            }}
            className={classes.logo}
          />
        </div>
      </Card>
    </div>
  );
}
