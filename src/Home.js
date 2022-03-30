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
import AboutMe from "./AboutMe";
import TextShine from "./components/textAnimation/TextShine";
import "./App.css";
import { useGlobalContext } from "./Context";

function Home() {
  const { isMatch } = useGlobalContext();

  return (
    <>
      <Navbar />
      <section className="about-sect lightText">
        <Grid container marginTop={5}>
          <Grid item xs={12} md={6}>
            <div className="img-contaier">
              <img
                className="horseImg"
                src={horseSunlight}
                alt="horse-sunlight"
                style={{ maxWidth: `${isMatch ? "300px" : "380px"}` }}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <AboutMe />
          </Grid>
        </Grid>
      </section>
      <section className="xp-sect lightText">
        <TextBlink />
        <Grid container spacing={2} marginTop={3}>
          <Grid item xs={12} md={5}>
            <GlassCard title="Mobile Game" image={chocopoke} color="yellow" />
          </Grid>
          <Grid item xs={12} md={2}>
            <NormalShowcase
              img={officemate}
              title="Furniture Salesman"
              info="Deliver the best! to customers"
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <GlassCard title="Line Stickers" image={sticker} color="green" />
          </Grid>
        </Grid>
      </section>
      <section className="education-sect lightText">
        <TextShine />
        <Grid container spacing={3}>
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
