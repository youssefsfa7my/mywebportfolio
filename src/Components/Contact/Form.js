import * as React from "react";

import TextField from "@mui/material/TextField";
import Button from "react-bootstrap/Button";
import { makeStyles } from "@mui/styles";
import { isMobile } from "react-device-detect";

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
  const classes = useStyles();
  const [value, setValue] = React.useState("");

  const handleChange1 = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {};
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={classes.textfieldDiv}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            className={classes.textfield1}
            color="secondary"
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            className={classes.textfield2}
            color="secondary"
          />
        </div>
        <div className={classes.textfieldDiv}>
          <TextField
            rows={4}
            id="outlined-multiline-flexible"
            label="Message"
            multiline
            value={value}
            onChange={handleChange1}
            fullWidth
            className={classes.textfield3}
            color="secondary"
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
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
