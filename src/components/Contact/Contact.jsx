import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Box, Container, Typography, Grid, Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "100vh",
    paddingTop: 100,
    paddingBottom: 100
  },
  container: {
    height: "100%",
    display: "flex",
    alignItems: "center"
  },
  header: {
    "@media (max-width: 425px)": {
      fontSize: 36
    }
  },
  text: {
    marginBottom: 80
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

const Contact = () => {
  const classes = useStyles();
  const [inViewState, setInViewState] = useState(false);

  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0
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
        id="contact"
        className={classes.container}
        ref={ref}
      >
        {inViewState && (
          <AnimateContainer delay={0}>
            <Typography
              variant="h3"
              align="center"
              gutterBottom
              className={classes.header}
            >
              <b>Get in Touch</b>
            </Typography>

            <Grid container direction="column" alignItems="center">
              <Grid item xs={12} sm={12} md={5}>
                <AnimateContainer delay={0.5}>
                  <Typography
                    component="p"
                    align="center"
                    className={classes.text}
                  >
                    Need something built or simply want to have a chat? My inbox
                    is always open. Whether for a potential project or just to
                    say hi, I'll try my best to answer your email!
                  </Typography>
                </AnimateContainer>
              </Grid>
              <Grid item xs={12}>
                <AnimateContainer delay={0.6}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    href="mailto:forimbajosh21@gmail.com"
                  >
                    Let's Talk
                  </Button>
                </AnimateContainer>
              </Grid>
            </Grid>
          </AnimateContainer>
        )}
      </Container>
    </Box>
  );
};

export default Contact;
