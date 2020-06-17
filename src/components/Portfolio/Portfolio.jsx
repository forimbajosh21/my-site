import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Box, Container, Typography, Grid } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import PortfolioCard from "./PortfolioCard";
import CustomDialog from "./Dialog";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("lg")]: {
      minHeight: "80vh",
    },
    minHeight: "70vh",
  },
  container: {
    minHeight: "inherit",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
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

const CardContainer = ({ children }) => (
  <motion.div whileHover={{ y: -15 }} transition={{ type: "tween" }}>
    {children}
  </motion.div>
);

const Portfolio = () => {
  const classes = useStyles();
  const [inViewState, setInViewState] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(0);

  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView && !inViewState) {
      setInViewState(inView);
    }
  }, [inView, inViewState]);

  const openDialog = (value) => {
    setId(value);
    setIsOpen(true);
  };

  return (
    <React.Fragment>
      <CustomDialog isOpen={isOpen} setIsOpen={setIsOpen} id={id} />
      <Box className={classes.root}>
        <Container
          maxWidth="lg"
          id="portfolio"
          ref={ref}
          className={classes.container}
        >
          {inViewState && (
            <AnimateContainer delay={0.3}>
              <Typography variant="h5" classes={{ root: classes.header }}>
                Portfolio
              </Typography>
              <Grid container spacing={4} justify="center">
                <Grid item xs={12} sm={10} md={4}>
                  <AnimateContainer delay={0.5}>
                    <CardContainer>
                      <PortfolioCard
                        open={() => openDialog(0)}
                        title="Coach2Grow"
                        description="Let Globe Telecom's Coach2Grow app change the way you document and organize your coaching sessions!"
                        technologies={["React Native", "Redux"]}
                      />
                    </CardContainer>
                  </AnimateContainer>
                </Grid>
                <Grid item xs={12} sm={10} md={4}>
                  <AnimateContainer delay={0.5}>
                    <CardContainer>
                      <PortfolioCard
                        open={() => openDialog(1)}
                        title="Business Flyakeed"
                        description="Business related website that caters with online
                            flight and hotel bookings and related business
                            services."
                        technologies={["React", "Graphql"]}
                      />
                    </CardContainer>
                  </AnimateContainer>
                </Grid>
                <Grid item xs={12} sm={10} md={4}>
                  <AnimateContainer delay={0.6}>
                    <CardContainer>
                      <PortfolioCard
                        open={() => openDialog(2)}
                        title="Hospital Consultation"
                        description="Website that helps patient in booking their
                            consultations and any other related hospital
                            services."
                        technologies={["Vue", "Laravel"]}
                      />
                    </CardContainer>
                  </AnimateContainer>
                </Grid>
                <Grid item xs={12} sm={10} md={4}>
                  <AnimateContainer delay={0.7}>
                    <CardContainer>
                      <PortfolioCard
                        open={() => openDialog(3)}
                        title="Medicare"
                        description="Prototype Android app feature that provided user
                            with the ability to remind them when to take their
                            medicine via notification and sms message."
                        technologies={["Flutter", "Laravel"]}
                      />
                    </CardContainer>
                  </AnimateContainer>
                </Grid>
              </Grid>
            </AnimateContainer>
          )}
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Portfolio;
