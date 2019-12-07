import React from "react";

import { motion } from "framer-motion";

import { Box, Container, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down("lg")]: {
      height: "calc(100vh - 64px)"
    },
    height: "calc(70vh - 64px)",
    backgroundColor: theme.palette.primary.main
  },
  container: {
    height: "inherit",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  header: {
    color: theme.palette.common.white,

    "@media (max-width: 425px)": {
      fontSize: 36
    }
  },
  bolder: {
    fontWeight: "bold"
  },
  text: {
    color: theme.palette.common.white,
    fontWeight: "normal",

    "@media (max-width: 425px)": {
      fontSize: 18
    }
  },
  button: {
    boxShadow: "none",
    "&:hover": {
      boxShadow: "none"
    }
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

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth="lg" className={classes.container}>
        <Box mb={5}>
          <AnimateContainer delay={0.6}>
            <Typography variant="h2" classes={{ root: classes.header }}>
              Hi,
            </Typography>
          </AnimateContainer>
          <AnimateContainer delay={0.7}>
            <Typography variant="h2" classes={{ root: classes.header }}>
              Im <span className={classes.bolder}>Joshua</span>
            </Typography>
          </AnimateContainer>
          <AnimateContainer delay={0.8}>
            <Typography variant="h2" classes={{ root: classes.header }}>
              Frontend Developer & UX Enthusiast
            </Typography>
          </AnimateContainer>
        </Box>
        <Box mb={5}>
          <AnimateContainer delay={0.9}>
            <Typography variant="h6" classes={{ root: classes.text }}>
              I'm a Frontend Developer based on Philippines, who loves to <br />
              create things that live on internet.
            </Typography>
          </AnimateContainer>
        </Box>
        <AnimateContainer delay={1}>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            className={classes.button}
            href="mailto:forimbajosh21@gmail.com"
          >
            Get in Touch
          </Button>
        </AnimateContainer>
      </Container>
    </Box>
  );
};

export default Header;
