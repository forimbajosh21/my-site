import React from "react";

// components
import Appbar from "./components/Appbar/Appbar";
import Header from "./components/Header/Index";
// import Typing from "./components/Typing/Typing";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const Home = () => {
  return (
    <React.Fragment>
      <Appbar />

      <Header />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
