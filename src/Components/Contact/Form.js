import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "react-bootstrap/Button";
import { makeStyles } from "@mui/styles";
import { isMobile } from "react-device-detect";
import { send } from "emailjs-com";
import { useNavigate } from "react-router-dom";

import "../../CSS/Header.css";
const useStyles = makeStyles({
  textfield1: {
    marginTop: isMobile ? "0vw !important" : "0vw !important",

    fontFamily: "Eurostile !important",

    marginRight: isMobile ? "0vw" : "1vw !important",

    marginBottom: isMobile ? "7.5vw" : "2vw !important",
    width: isMobile ? "88vw" : "29vw",
  },
  textfield2: {
    marginTop: isMobile ? "7.5vw !important" : "0vw !important",

    fontFamily: "Eurostile !important",

    marginLeft: isMobile ? "0vw" : "1vw !important",
    marginBottom: isMobile ? "7.5vw " : "2vw !important",
    width: isMobile ? "88vw" : "29vw",
  },
  textfield3: { fontFamily: "Eurostile !important" },

  textfieldDiv: {
    marginLeft: isMobile ? "6vw" : "20vw",
    width: isMobile ? "88vw" : "60vw",
    marginTop: isMobile ? "7.5vw" : "4vw !important",
  },
});

export default function ComposedTextField() {
  const navigate = useNavigate();

  const classes = useStyles();
  const [value, setValue] = React.useState("");
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Youssef",
    message: "",
    reply_to: "",
  });
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    console.log("TOTO");
    e.preventDefault();
    send(
      "service_brl75kk",
      "template_y7rbr6j",
      toSend,
      "user_EsywzfdvKH8cGzk3Gm4RT"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });

    var element = document.getElementById("toplogo");
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
    navigate("/thankyou");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className={classes.textfieldDiv}>
          <TextField
            required
            name="from_name"
            id="outlined-basic"
            label="Name"
            value={toSend.from_name}
            variant="outlined"
            className={classes.textfield1}
            color="secondary"
            onChange={handleChange}
          />
          <TextField
            type={"email"}
            required
            id="outlined-basic"
            label="Email"
            name="reply_to"
            variant="outlined"
            value={toSend.reply_to}
            className={classes.textfield2}
            color="secondary"
            onChange={handleChange}
          />
        </div>
        <div className={classes.textfieldDiv}>
          <TextField
            required
            rows={4}
            id="outlined-multiline-flexible"
            name="message"
            label="Message"
            multiline
            value={toSend.message}
            fullWidth
            className={classes.textfield3}
            color="secondary"
            onChange={handleChange}
          />
        </div>

        <Button
          type="submit"
          variant="outline-primary"
          style={{
            height: isMobile ? "10vw" : "4vw",
            width: isMobile ? "40vw" : "15vw",
            fontSize: isMobile ? "5vw" : "1.35vw",
            borderRadius: "10vw",
            color: "#7510F7",
            borderColor: "#7510F7",
            borderWidth: "0.2vw",
            fontWeight: "400",
            margin: isMobile ? "15vw" : "7vw",
            fontFamily: "Eurostile !important",
            padding: isMobile ? "1vw" : "0.5vw",
          }}
          onSubmit={onSubmit}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
