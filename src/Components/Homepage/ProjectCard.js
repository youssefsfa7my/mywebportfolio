import React from "react";
import Card from "react-animated-3d-card";
import { makeStyles } from "@mui/styles";
import { isMobile } from "react-device-detect";

const useStyles = makeStyles({
  logo: {
    height: isMobile ? "20vw" : "7vw",
    marginTop: isMobile ? "20vw" : "6vw",
  },
  div: {
    //backgroundColor: "rgb(250,158,35,0.3)",
    width: isMobile ? "88w" : "30vw",
    height: isMobile ? "59vw" : "20vw",
  },
});
export default function ProjectCard(props) {
  const classes = useStyles();

  return (
    <div>
      <Card
        href="https://web.i12.lirten.com/home"
        style={{
          backgroundImage: `url(${props.src1})`,

          // backgroundColor: "#7510F7",
          width: isMobile ? "88vw" : "30vw",
          height: isMobile ? "59vw" : "20vw",
          cursor: "pointer",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        onClick={() => props.onClick()}
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
