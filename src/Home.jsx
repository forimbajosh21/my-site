import React from "react";

import { Box, useScrollTrigger } from "@material-ui/core";

// components
import Appbar from "./components/Appbar/Appbar";
import Typing from "./components/Typing/Typing";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

const Home = () => {
  const trigger = useScrollTrigger();
  return (
    <React.Fragment>
      <Appbar trigger={trigger} />

      <Box style={{ paddingTop: 108, backgroundColor: "#26a69a" }}>
        <Typing />
      </Box>
      <About />
      <Experience />
      <Portfolio />
      <Contact />
    </React.Fragment>
  );
};

export default Home;
