import { Grid } from "@mui/material";
import React from "react";
import "./GlassCard.css";
import Tilt from "react-parallax-tilt";

function TranspCard({ title, image, color }) {
  return (
    <>
      <Grid item>
        <article className="container">
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.2}
            glareColor="#ffffff"
            glarePosition="right"
            className="tilt"
          >
            <div className="card">
              <div className="content">
                <h3 className={color}>{title}</h3>
                <div>
                  <img className="glassCard-img" src={image[0]} alt={title} />
                  <img className="glassCard-img" src={image[1]} alt={title} />
                </div>
              </div>
            </div>
          </Tilt>
        </article>
      </Grid>
    </>
  );
}

export default TranspCard;
