import React from "react";
import { Box, Container, Typography, Grid } from "@material-ui/core";

import { motion } from "framer-motion";

import "./About.css";
import Joshua from "../../assets/images/me.png";

const About = () => {
  return (
    <Box className="section-container about">
      <Container maxWidth="lg">
        <Typography variant="h5" classes={{ root: "header" }}>
          <b>About Me</b>
        </Typography>
        <Grid container spacing={4} justify="space-between" alignItems="center">
          <Grid item xs={12} sm={12} md={7}>
            <p>
              Hi! I'm Joshua, a Frontend Developer based on Philippines, who
              loves to create things that live on internet.
            </p>
            <p>
              I'm also into doing some gym activities, travelling, enjoying
              beaches, falls and nature. And meeting new people and going to
              adventure really excite me.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <ul>
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
                whileTap={{ y: -50 }}
                style={{ position: "relative", cursor: "pointer", zIndex: 1 }}
              >
                <img src={Joshua} width="100%" height="100%" alt="Joshua" />
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
      </Container>
    </Box>
  );
};

export default About;
