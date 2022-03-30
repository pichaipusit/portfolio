import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import BlackCard from "./components/BlackCard";
import InterestShowcase from "./components/InterestShowcase";
import Navbar from "./components/navbar/Navbar";
import NormalShowcase from "./components/NormalShowcase";
import GlassCard from "./components/GlassCard";
import SocialTab from "./components/SocialTab";
import SkillTab from "./components/SkillTab";
import "./component.css";
import horseSunlight from "./images/horse-sunlight.jpg";
import { chocopoke, sticker, officemate, university } from "./dataForHome";
import TextBlink from "./components/textAnimation/TextBlink";

function Home() {
  return (
    <>
      <Navbar />
      <section className="about-sect lightText">
        <Grid container>
          <Grid item xs={12} md={6}>
            <div className="img-contaier">
              <img src={horseSunlight} alt="horse-sunlight" />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="heading">
              <h2>About me </h2>OHAYO! I'm Pichaipusit Kamsorn A Full stack
              developer (trying to be)
            </div>
            <Typography variant="subtitle1">
              I love to adventure in the Tech business world because there're so
              many amazing things that drive me crazy, wanting to know more and
              earn those skills to become a Breathtaking CEO!
            </Typography>
          </Grid>
        </Grid>
      </section>
      <section className="xp-sect lightText">
        <TextBlink />
        <Grid container spacing={2} marginTop={4}>
          <Grid item xs={12} md={4}>
            <GlassCard title="Mobile Game" image={chocopoke} color="yellow" />
          </Grid>
          <Grid item xs={12} md={4}>
            <NormalShowcase
              img={officemate}
              title="Furniture Salesman"
              info="Deliver the best! to customers"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <GlassCard title="Line Stickers" image={sticker} color="green" />
          </Grid>
        </Grid>
      </section>
      <section className="education-sect lightText">
        {/* <TextBlink /> */}
        <Grid container spacing={3} marginTop={4}>
          <Grid item xs={12} md={4}>
            <NormalShowcase
              img={university[0]}
              title="Rajapark"
              info="B.A. (Art of management)"
              year="2018-2019"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <BlackCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <NormalShowcase
              img={university[1]}
              title="Thammasat"
              info="Faculty of Commerce and Accountancy"
              year="2015-2016"
            />
          </Grid>
        </Grid>
        <Container>
          <SkillTab />
          {/* TextFadein */}
        </Container>
      </section>
      <section className="interests-sect lightText">
        {/* h2 normal */}
        <Grid container spacing={2}>
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
