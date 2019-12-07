import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";

import "./About.css";
import Joshua from "../../assets/images/me.png";

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down("lg")]: {
      height: "100vh"
    },
    height: "70vh"
  },
  container: {
    height: "inherit",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  header: {
    fontWeight: "bold",
    marginBottom: "15vh",

    "&:after": {
      content: "close-quote",
      display: "block",
      width: "7%",
      height: 3,
      background: theme.palette.primary.main,

      "@media (max-width: 425px)": {
        width: "14%"
      }
    }
  },
  list: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(140px, 200px))",
    marginTop: 20,
    overflow: "hidden",
    listStyleType: "square",

    "& li": {
      // fontSize: 14
    }
  },
  image: {
    borderRadius: 4
  }
}));

function AnimateContainer({ delay, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "tween", delay }}
    >
      {children}
    </motion.div>
  );
}

const About = () => {
  const classes = useStyles();

  const [inViewState, setInViewState] = useState(false);

  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0.5
  });

  useEffect(() => {
    if (inView && !inViewState) {
      setInViewState(inView);
    }
  }, [inView, inViewState]);

  return (
    <Box className={classes.root}>
      <Container
        maxWidth="lg"
        id="about"
        className={classes.container}
        ref={ref}
      >
        {inViewState && (
          <AnimateContainer delay={0.3}>
            <Typography variant="h5" className={classes.header}>
              About Me
            </Typography>
            <Grid
              container
              spacing={4}
              justify="space-between"
              alignItems="center"
            >
              <Grid item xs={12} sm={12} md={7}>
                <Typography
                  gutterBottom
                  component="p"
                  variant="subtitle1"
                  color="secondary"
                >
                  Hi! I'm Joshua, a Frontend Developer based on Philippines, who
                  loves to create things that live on internet.
                </Typography>
                <Typography
                  gutterBottom
                  component="p"
                  variant="subtitle1"
                  color="secondary"
                >
                  I'm also into doing some gym activities, travelling, enjoying
                  beaches, falls and nature. And meeting new people and going to
                  adventure really excite me.
                </Typography>
                <Typography component="p" variant="subtitle1" color="secondary">
                  Here are a few technologies I've been working with recently:
                </Typography>
                <ul className={classes.list}>
                  <li>Javascript</li>
                  <li>Vue</li>
                  <li>React</li>
                  <li>PHP</li>
                  <li>GraphQL</li>
                  <li>Laravel</li>
                  <li>Typescript</li>
                  <li>HTML & (S)CSS</li>
                </ul>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <div style={{ position: "relative" }}>
                  <motion.div
                    drag="y"
                    dragConstraints={{ top: -10, bottom: 0 }}
                    dragElastic={0.2}
                    style={{
                      position: "relative",
                      cursor: "pointer",
                      zIndex: 1
                    }}
                  >
                    <img
                      src={Joshua}
                      width="100%"
                      height="100%"
                      alt="Joshua"
                      className={classes.image}
                    />
                  </motion.div>
                  <p
                    style={{
                      position: "absolute",
                      left: 5,
                      bottom: 0,
                      zIndex: 0,
                      fontSize: 14,
                      textDecoration: "underline"
                    }}
                  >
                    Baguio, Sagada water falls
                  </p>
                </div>
              </Grid>
            </Grid>
          </AnimateContainer>
        )}
      </Container>
    </Box>
  );
};

export default About;
