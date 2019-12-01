import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import FolderOpenIcon from "@material-ui/icons/FolderOpen";

import CustomDialog from "./Dialog";

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    paddingTop: 100,
    paddingBottom: 100
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
  card: {
    border: `1px solid ${theme.palette.secondary.main}`,
    cursor: "pointer",
    minHeight: 350,
    position: "relative",
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    marginBottom: 15
  },
  cardDescription: {
    marginBottom: 15,
    fontSize: 17
  },
  cardTechnology: {
    position: "absolute",
    bottom: 15,

    "& span": {
      marginRight: 15
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
    threshold: 0
  });

  useEffect(() => {
    if (inView && !inViewState) {
      setInViewState(inView);
    }
  }, [inView, inViewState]);

  const openDialog = value => {
    setId(value);
    setIsOpen(true);
  };

  return (
    <React.Fragment>
      <CustomDialog isOpen={isOpen} setIsOpen={setIsOpen} id={id} />
      <Box className={classes.root}>
        <Container maxWidth="lg" id="portfolio" ref={ref}>
          {inViewState && (
            <AnimateContainer delay={0.2}>
              <Typography variant="h5" classes={{ root: classes.header }}>
                Portfolio
              </Typography>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={4}>
                  <AnimateContainer delay={0.5}>
                    <CardContainer>
                      <Card
                        elevation={0}
                        className={classes.card}
                        onClick={() => openDialog(0)}
                      >
                        <CardContent>
                          <Box className={classes.cardHeader}>
                            <FolderOpenIcon fontSize="large" />

                            <Box display="inline" pl={1}>
                              <Typography variant="h5" display="inline">
                                <Box component="b">Business Flyakeed</Box>
                              </Typography>
                            </Box>
                          </Box>

                          <Typography
                            variant="body1"
                            component="p"
                            className={classes.cardDescription}
                          >
                            Business related website that caters with online
                            flight and hotel bookings and related business
                            services.
                          </Typography>

                          <Box className={classes.cardTechnology}>
                            <Typography variant="caption" component="span">
                              React
                            </Typography>
                            <Typography variant="caption" component="span">
                              Graphql
                            </Typography>
                          </Box>
                        </CardContent>
                      </Card>
                    </CardContainer>
                  </AnimateContainer>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                  <AnimateContainer delay={0.6}>
                    <CardContainer>
                      <Card
                        elevation={0}
                        className={classes.card}
                        onClick={() => openDialog(1)}
                      >
                        <CardContent>
                          <Box className={classes.cardHeader}>
                            <FolderOpenIcon fontSize="large" />

                            <Box display="inline" pl={1}>
                              <Typography variant="h5" display="inline">
                                <Box component="b">Hospital Consultation</Box>
                              </Typography>
                            </Box>
                          </Box>

                          <Typography
                            variant="body1"
                            component="p"
                            className={classes.cardDescription}
                          >
                            Website that helps patient in booking their
                            consultations and any other related hospital
                            services.
                          </Typography>

                          <Box className={classes.cardTechnology}>
                            <Typography variant="caption" component="span">
                              Vue
                            </Typography>
                            <Typography variant="caption" component="span">
                              Laravel
                            </Typography>
                          </Box>
                        </CardContent>
                      </Card>
                    </CardContainer>
                  </AnimateContainer>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                  <AnimateContainer delay={0.7}>
                    <CardContainer>
                      <Card
                        elevation={0}
                        className={classes.card}
                        onClick={() => openDialog(2)}
                      >
                        <CardContent>
                          <Box className={classes.cardHeader}>
                            <FolderOpenIcon fontSize="large" />

                            <Box display="inline" pl={1}>
                              <Typography variant="h5" display="inline">
                                <Box component="b">Medicare</Box>
                              </Typography>
                            </Box>
                          </Box>

                          <Typography
                            variant="body1"
                            component="p"
                            className="class-description"
                          >
                            Prototype Android app feature that provided user
                            with the ability to remind them when to take their
                            medicine via notification and sms message.
                          </Typography>

                          <Box className={classes.cardTechnology}>
                            <Typography variant="caption" component="span">
                              Flutter
                            </Typography>
                            <Typography variant="caption" component="span">
                              Laravel
                            </Typography>
                          </Box>
                        </CardContent>
                      </Card>
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
