import { Grid } from "@mui/material";
import React from "react";
import BlackCard from "./components/BlackCard";
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
// Contact
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import Contact from "./components/Contact";

function Home() {
  const { isMatch } = useGlobalContext();
  const emailUrl =
    "https://www.google.com/search?q=pichaipusit.ks%40gmail.com&rlz=1C5CHFA_enTH976TH976&oq=pichaipusit.ks%40gmail.com&aqs=chrome..69i57j69i58j69i61l2.7946j0j7&sourceid=chrome&ie=UTF-8#bsht=CgRmYnNtEgIIBA";
  const twitterUrl =
    "https://www.google.com/search?q=i+don%27t+have+it&rlz=1C5CHFA_enTH976TH976&oq=i+don%27t+have+it&aqs=chrome..69i57j0i512l2j46i512j0i22i30l6.12282j0j7&sourceid=chrome&ie=UTF-8#bsht=CgRmYnNtEgIIBA";

  return (
    <>
      <Navbar />
      <section className="about-sect lightText">
        <Grid container marginTop={5} justifyContent="center">
          <Grid item xs={12} md={4}>
            <div className="img-container">
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

      {/* Experience */}
      <section id="experience" className="xp-sect lightText">
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

      {/* Education */}
      <section id="education" className="education-sect lightText">
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

        {/* Skills */}
        <SkillTab />
      </section>

      {/* Contact */}
      <section className="contact-sect lightText">
        <p>CONTACT</p>
        <Contact icon={<TwitterIcon />} url={twitterUrl} />
        <Contact icon={<EmailIcon />} url={emailUrl} />
        <Contact icon={<GitHubIcon />} url="https://github.com/pichaipusit" />
      </section>
      <footer>
        <SocialTab />
      </footer>
    </>
  );
}

export default Home;
