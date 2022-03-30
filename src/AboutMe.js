import { Typography } from "@mui/material";
import React from "react";
import "./App.css";

import metal from "./images/metal.png";

function AboutMe() {
  return (
    <>
      <div className="heading">
        <h2>About me </h2>
        <h2>
          OHAYO!
          <span style={{ marginLeft: "1rem" }}>I'M </span>
          <span className="name">PICHAIPUSIT </span> KAMSORN
        </h2>
        <p className="role">
          A FULL STACK DEVELOPER
          <span style={{ opacity: 0.5 }}>(trying to be)</span>
        </p>
      </div>
      <Typography variant="subtitle1" sx={{ margin: "20px" }}>
        I love to adventure in the Tech business world <br /> because there're
        so many amazing things that drive me crazy, <br /> wanting to know more
        and earn those skills to become a
        <span className="ceo">Breathtaking CEO!</span>
      </Typography>
      <img className="metal-img" src={metal} alt="metal" />
    </>
  );
}

export default AboutMe;
