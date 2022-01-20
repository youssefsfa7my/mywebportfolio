import React from "react";
import logo from "../Images/logo.svg";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { isMobile } from "react-device-detect";
import { useNavigate } from "react-router-dom";

//import Nav from "react-bootstrap/Nav";
//import Button from "react-bootstrap/Button";
import "../CSS/Header.css";

export default function Header() {
  const navigate = useNavigate();

  return (
    <Navbar
      bg="none"
      expand="lg"
      style={{ marginTop: "2vw", marginBottom: isMobile ? "20vw" : "6vw" }}
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            id="toplogo"
            src={logo}
            alt=""
            style={{
              height: isMobile ? "15vw" : "4vw",
              width: isMobile ? "15vw" : "4vw",
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          style={{
            justifyContent: "end",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: isMobile ? "12vw" : "",
              borderBottomColor: "rgb(0,0,0,0.1)",
              borderBottomStyle: isMobile ? "solid" : "",
              alignItems: "center",
            }}
          >
            <Button
              variant="outline-primary"
              style={{
                width: isMobile ? "40vw" : "9vw",
                height: isMobile ? "10vw" : "3.4vw",

                marginLeft: "1vw",
                fontSize: isMobile ? "5vw" : "1.35vw",
                borderRadius: "10vw",
                color: isMobile ? "white" : "#7510F7",
                backgroundColor: isMobile ? "#7510F7" : "",
                borderColor: "#7510F7",
                borderWidth: "0.2vw",
                fontWeight: "400",
                padding: isMobile ? "1vw" : "0.5vw",
              }}
              onClick={() => {
                var element = document.getElementById("toplogo");
                element.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                  inline: "nearest",
                });
                navigate("/");
              }}
            >
              Go Back
            </Button>
          </div>
          {/* <Nav className="me-auto" style={{ justifyContent: "end" }}>
            <Nav.Link href="#home">projects</Nav.Link>
            <Nav.Link href="#link">Say Hello</Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <div style={{ width: "100%", height: "15vw", display: "flex" }}>

    //   <div style={{ paddingLeft: "5vw", paddingTop: "2.5vw" }}>
    //     {" "}
    //     <img src={logo} alt="" style={{ height: "4vw", width: "4vw" }} />
    //   </div>
    //   <div>
    //     <Button
    //       variant="outline-primary"
    //       style={{
    //         borderRadius: "10vw",
    //         color: "#7510F7",
    //         borderColor: "#7510F7",
    //         borderWidth: "0.2vw",
    //       }}
    //     >
    //       Primary
    //     </Button>{" "}
    //   </div>
    // </div>
  );
}
