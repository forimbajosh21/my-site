import React, { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Typography, Tabs, Tab } from "@material-ui/core";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import ExperienceTab from "./ExperienceTab";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("lg")]: {
      minHeight: "80vh",
    },
    minHeight: "70vh",
  },
  container: {
    [theme.breakpoints.down("xs")]: {
      justifyContent: "flex-start",
    },
    minHeight: "inherit",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  tabsRoot: {
    "@media (min-width: 427px)": {
      flexGrow: 1,
      // backgroundColor: theme.palette.background.paper,
      display: "flex",
      minHeight: 224,
    },
  },
  tabs: {
    minWidth: 154,
    "@media (min-width: 427px)": {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
  },
  TabIndicator: {
    // right: "-10px",
    backgroundColor: theme.palette.primary.main,
  },
  tabContainer: {
    padding: 24,
  },
  header: {
    [theme.breakpoints.down("xs")]: {
      marginBottom: "8vh",
    },
    fontWeight: "bold",
    marginBottom: "15vh",

    "&:after": {
      content: "close-quote",
      display: "block",
      width: "7%",
      height: 3,
      background: theme.palette.primary.main,

      "@media (max-width: 425px)": {
        width: "14%",
      },
    },
  },
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
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView && !inViewState) {
      setInViewState(inView);
    }
  }, [inView, inViewState]);

  const displayCurrentTab = (value) => {
    if (value === 0) {
      return (
        <motion.div
          key={value}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 30 }}
          transition={{ type: "tween", delay: 0.2 }}
        >
          <ExperienceTab
            title="Software Engineer"
            link="https://www.bizmates.ph/"
            linkAt="Bizmates PH"
            date="February 2020 - Present"
            lists={[
              "Contributed to each project delivery phase (analysis, development, tests) in different roles",
              "Worked with variety of different languages and frameworks such as FuelPHP, PHP, Javascript",
              "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
            ]}
          />
        </motion.div>
      );
    } else if (value === 1) {
      return (
        <motion.div
          key={value}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 30 }}
          transition={{ type: "tween", delay: 0.2 }}
        >
          <ExperienceTab
            title="Frontend Developer"
            link="http://www.leandevinc.com/"
            linkAt="Leandev Inc"
            date="February 2018 - February 2020"
            lists={[
              "Develop and maintained code for in-house and client website using HTML, CSS, JavaScript, and React",
              "Worked closely with designers and management team to develop, document, and manage the corporate online travel and related services website using CSS, Javascript, GraphQL, and React.",
            ]}
          />
        </motion.div>
      );
    } else if (value === 2) {
      return (
        <motion.div
          key={value}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 30 }}
          transition={{ type: "tween", delay: 0.2 }}
        >
          <ExperienceTab
            title="Freelance Web Developer"
            link=""
            linkAt=""
            date="January 2017 - 2018"
            lists={[
              "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, React, Vue, Laravel, Wordpress and Ionic",
              "Develop and delivered efficient and effective web and hybrid applications on time",
            ]}
          />
        </motion.div>
      );
    }
  };

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
                  TabIndicatorProps={{ className: classes.TabIndicator }}
                >
                  <Tab label="Bizmates PH" />
                  <Tab label="Leandev Inc" />
                  <Tab label="Freelance" />
                </Tabs>
                <AnimatePresence exitBeforeEnter>
                  {displayCurrentTab(value)}
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
