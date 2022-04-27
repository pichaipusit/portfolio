import React, { useRef, useState } from "react";
import {
  AppBar,
  Container,
  Tab,
  Tabs,
  Toolbar,
  Tooltip,
  useTheme,
} from "@mui/material";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import SchoolIcon from "@mui/icons-material/School";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import "./Navbar.css";
import { indicatorStyle } from "./NavbarStyle";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Navbar() {
  const navLinksArr = [
    {
      icon: <WorkHistoryIcon sx={{ color: "orange" }} />,
      title: "Experience",
      id: "#experience",
    },
    {
      icon: <SchoolIcon sx={{ color: "orange" }} />,
      title: "Education",
      id: "#education",
    },
    {
      icon: <VolunteerActivismIcon sx={{ color: "orange" }} />,
      title: "skills",
      id: "#skills",
    },
  ];
  const [iActive, setIActive] = useState(0);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (e) => {};
  return (
    <div>
      <AppBar position="static" sx={{ background: "#0d0c26" }}>
        <Container>
          <Toolbar>
            <h3>PORTFOLIO</h3>
            <div className="navlinks">
              <Tabs
                textColor="#e56ff2"
                value={value}
                onChange={handleChange}
                aria-label="icon tabs example"
                TabIndicatorProps={{
                  sx: [indicatorStyle],
                }}
              >
                {navLinksArr.map((navlink, index) => {
                  return (
                    <Tooltip title={navlink.title} key={index}>
                      <Tab
                        onClick={() => setIActive(index)}
                        icon={
                          <AnchorLink href={navlink.id}>
                            <div
                              className={
                                iActive === index ? "navGlow" : "navSleep"
                              }
                            >
                              {navlink.icon}
                            </div>
                          </AnchorLink>
                        }
                        aria-label="phone"
                        sx={{
                          color: "pink",
                        }}
                      />
                    </Tooltip>
                  );
                })}
              </Tabs>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Navbar;
