import { Grid } from "@mui/material";
import React from "react";
import htmlLogo from "../images/logo/html5-css3-js.png";
import mongoDB from "../images/logo/MongoDB_Logo.png";
import react from "../images/logo/React-icon.png";
import codeSample from "../images/logo/code-sample.png";
import { useGlobalContext } from "../Context";
import "../component.css";

function SkillTab() {
  const { isMatch } = useGlobalContext();

  return (
    <div>
      <h2 style={{ marginTop: "160px", color: "#6da5d6" }}>My Skills</h2>
      <Grid container marginTop={4} justifyContent="center">
        <Grid item xs={12} md={4}>
          <div className="trio-skill">
            {/* <span className="longband"></span> */}

            <img
              style={{ zIndex: 10 }}
              width="200px"
              src={htmlLogo}
              alt="html-css-js"
            />
            <div className="react-mongo">
              <img width="80px" src={react} alt="react" />
              <img width="180px" src={mongoDB} alt="mongoDB" />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={4} marginTop={isMatch && 4}>
          <div className="code-sample-container">
            <h4 className="code-sample-title">
              Code sample of my Exercise tracker project
            </h4>
            <img width="300px" src={codeSample} alt="code-sample" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default SkillTab;
