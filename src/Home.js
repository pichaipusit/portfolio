import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import BlackCard from "./components/BlackCard";
import InterestShowcase from "./components/InterestShowcase";
import Navbar from "./components/navbar/Navbar";
import NormalShowcase from "./components/NormalShowcase";
import TranspCard from "./components/TranspCard";
import SocialTab from "./components/SocialTab";
import SkillTab from "./components/SkillTab";
import "./component.css";
import horseSunlight from "./images/horse-sunlight.jpg";

function Home() {
  return (
    <>
      <Navbar />
      <section className="about-sect lightText">
        <Grid container>
          <Grid item>
            <div className="img-contaier">
              <img src={horseSunlight} alt="horse-sunlight" />
            </div>
          </Grid>
          <Grid item>
            <div className="heading">
              <h2>About me </h2>OHAYO! I’m Pichaipusit Kamsorn A Full stack
              developer (trying to be)
            </div>{" "}
            <Typography variant="subtitle1">
              I love to adventure in the Tech business world because there're so
              many amazing things that drive me crazy, wanting to know more and
              earn those skills to become a Breathtaking CEO!
            </Typography>
          </Grid>
        </Grid>
      </section>
      <section className="xp-sect lightText">
        {/* TextShine */}
        <Grid container>
          <TranspCard />
          <NormalShowcase />
          <TranspCard />
        </Grid>
      </section>
      <section className="education-sect lightText">
        {/* h2 normal */}
        <Grid container>
          <NormalShowcase />
          <BlackCard />
          <NormalShowcase />
        </Grid>
        <Container>
          <SkillTab />
        </Container>
      </section>
      <section className="interests-sect lightText">
        {/* h2 normal */}
        <Grid container>
          <InterestShowcase />
          <InterestShowcase />
          <InterestShowcase />
        </Grid>
      </section>
      <footer>
        <SocialTab />
      </footer>
    </>
  );
}

export default Home;
