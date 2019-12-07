import React, { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  Link,
  Grid
} from "@material-ui/core";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

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
  tabsRoot: {
    "@media (min-width: 427px)": {
      flexGrow: 1,
      // backgroundColor: theme.palette.background.paper,
      display: "flex",
      height: 224
    }
  },
  tabs: {
    "@media (min-width: 427px)": {
      borderRight: `1px solid ${theme.palette.divider}`,
      minWidth: 150
    }
  },
  TabIndicator: {
    right: "-10px"
  },
  tabContainer: {
    padding: 24
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
  link: {
    display: "inline-block",
    "&:hover": {
      textDecoration: "none",
      "&:after": {
        width: "100%"
      }
    },
    "&:after": {
      cursor: "pointer",
      content: "close-quote",
      display: "block",
      margin: "0 auto",
      width: 0,
      height: 2,
      background: theme.palette.primary.main,
      transition: "width .4s"
    }
  },
  list: {
    "& li": {
      marginBottom: 15
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

const Experience = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [inViewState, setInViewState] = useState(false);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        id="experience"
        ref={ref}
        className={classes.container}
      >
        {inViewState && (
          <AnimateContainer delay={0.3}>
            <Typography variant="h5" classes={{ root: classes.header }}>
              <b>Experience</b>
            </Typography>

            <Container maxWidth="md">
              <Box className={classes.tabsRoot}>
                <Tabs
                  orientation={matches ? "vertical" : "horizontal"}
                  variant="scrollable"
                  value={value}
                  onChange={handleChange}
                  className={classes.tabs}
                  // TabIndicatorProps={{ className: classes.TabIndicator }}
                >
                  <Tab label="Leandev Inc" />
                  <Tab label="Freelance" />
                </Tabs>
                <AnimatePresence exitBeforeEnter>
                  {value === 0 ? (
                    <motion.div
                      key={0}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 30 }}
                      transition={{ type: "tween", delay: 0.2 }}
                    >
                      <Grid container>
                        <Grid item xs={12}>
                          <Box className={classes.tabContainer}>
                            <Typography
                              variant="subtitle1"
                              gutterBottom
                              style={{ fontWeight: "bold" }}
                            >
                              Jr. Web Developer/Frontend Developer{" "}
                              <Link
                                target="_blank"
                                href="http://www.leandevinc.com/"
                                rel="noopener"
                                className={classes.link}
                              >
                                @Leandev Inc
                              </Link>
                            </Typography>
                            <Typography variant="caption">
                              February 2018 - Present
                            </Typography>

                            <ul className={classes.list}>
                              <li>
                                <Typography variant="body2">
                                  Develop and maintained code for in-house and
                                  client website using HTML, CSS, JavaScript,
                                  and React
                                </Typography>
                              </li>
                              <li>
                                <Typography variant="body2">
                                  Worked closely with designers and management
                                  team to develop, document, and manage the
                                  corporate online travel and related services
                                  website using CSS, Javascript, GraphQL, and
                                  React.
                                </Typography>
                              </li>
                            </ul>
                          </Box>
                        </Grid>
                      </Grid>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={1}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 30 }}
                      transition={{ type: "tween", delay: 0.2 }}
                    >
                      <Grid container>
                        <Grid item xs={12}>
                          <Box className={classes.tabContainer}>
                            <Typography
                              variant="subtitle1"
                              gutterBottom
                              style={{ fontWeight: "bold" }}
                            >
                              Freelance Web Developer
                            </Typography>
                            <Typography variant="caption">
                              January 2017 - 2018
                            </Typography>

                            <ul className={classes.list}>
                              <li>
                                <Typography variant="body2">
                                  Work with a variety of different languages,
                                  platforms, frameworks, and content management
                                  systems such as JavaScript, TypeScript, React,
                                  Vue, Laravel, Wordpress and Ionic
                                </Typography>
                              </li>
                              <li>
                                <Typography variant="body2">
                                  Develop and delivered efficient and effective
                                  web and hybrid applications on time
                                </Typography>
                              </li>
                            </ul>
                          </Box>
                        </Grid>
                      </Grid>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Box>
            </Container>
          </AnimateContainer>
        )}
      </Container>
    </Box>
  );
};

export default Experience;
