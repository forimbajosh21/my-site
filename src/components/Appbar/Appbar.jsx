import React, { useState } from "react";

import { motion } from "framer-motion";

import {
  withStyles,
  AppBar,
  Toolbar,
  Typography,
  ButtonBase,
  Container,
  useScrollTrigger,
  Slide,
  Button,
  Link as MaterialLink,
  Hidden,
  IconButton,
  Drawer,
  Box
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

import { Link, animateScroll as scroll } from "react-scroll";

const styles = theme => ({
  title: {
    flexGrow: 1
  },
  button: {
    minWidth: 100,
    textTransform: "none",
    transition: "color 0.3s ease",
    paddingLeft: 8,
    paddingRight: 8,

    "&:hover": {
      color: theme.palette.secondary.main
    },
    "@media (max-width: 425px)": {
      marginBottom: 15
    }
  },
  buttonResume: {
    minWidth: 100,
    textTransform: "none",
    transition: "color 0.3s ease",
    paddingLeft: 8,
    paddingRight: 8,
    textDecoration: "underline",
    color: theme.palette.secondary.main,

    "&:hover": {
      color: theme.palette.secondary.main
    }
  },
  toolbar: {
    backgroundColor: theme.palette.primary.main
  },
  drawer: {
    width: 200,
    textAlign: "center"
  }
});

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger} timeout={300}>
      {children}
    </Slide>
  );
}

function ButtonContainer({ delay, children }) {
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

const Appbar = props => {
  const { classes } = props;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar elevation={0}>
          <Container maxWidth="lg">
            <Toolbar>
              <Box className={classes.title}>
                <Hidden mdUp>
                  <ButtonBase onClick={() => scroll.scrollToTop()}>
                    <Typography variant="h6">Joshua</Typography>
                  </ButtonBase>
                </Hidden>
              </Box>

              <Hidden smDown>
                <ButtonContainer delay={0}>
                  <ButtonBase
                    disableRipple
                    color="inherit"
                    className={classes.button}
                  >
                    <Link
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <Typography variant="subtitle1">
                        <b>About</b>
                      </Typography>
                    </Link>
                  </ButtonBase>
                </ButtonContainer>
                <ButtonContainer delay={0.1}>
                  <ButtonBase
                    disableRipple
                    color="inherit"
                    className={classes.button}
                  >
                    <Link
                      to="experience"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <Typography variant="subtitle1">
                        <b>Experience</b>
                      </Typography>
                    </Link>
                  </ButtonBase>
                </ButtonContainer>
                <ButtonContainer delay={0.2}>
                  <ButtonBase
                    disableRipple
                    color="inherit"
                    className={classes.button}
                  >
                    <Link
                      to="portfolio"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <Typography variant="subtitle1">
                        <b>Portfolio</b>
                      </Typography>
                    </Link>
                  </ButtonBase>
                </ButtonContainer>
                <ButtonContainer delay={0.3}>
                  <ButtonBase
                    disableRipple
                    color="inherit"
                    className={classes.button}
                  >
                    <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <Typography variant="subtitle1">
                        <b>Contact</b>
                      </Typography>
                    </Link>
                  </ButtonBase>
                </ButtonContainer>
                <ButtonContainer delay={0.4}>
                  <MaterialLink
                    target="_blank"
                    href="./resume.pdf"
                    rel="noopener"
                  >
                    <Button variant="outlined" color="secondary" size="small">
                      <Typography variant="subtitle1">
                        <b>Resume</b>
                      </Typography>
                    </Button>
                  </MaterialLink>
                </ButtonContainer>
              </Hidden>
              <Hidden mdUp>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={() => setIsOpen(true)}
                >
                  <MenuIcon />
                </IconButton>
              </Hidden>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <Box py={3} className={classes.drawer}>
          <ButtonContainer delay={0}>
            <ButtonBase
              disableRipple
              color="inherit"
              className={classes.button}
            >
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Typography variant="subtitle1">
                  <b>About</b>
                </Typography>
              </Link>
            </ButtonBase>
          </ButtonContainer>
          <ButtonContainer delay={0.1}>
            <ButtonBase
              disableRipple
              color="inherit"
              className={classes.button}
            >
              <Link
                to="experience"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Typography variant="subtitle1">
                  <b>Experience</b>
                </Typography>
              </Link>
            </ButtonBase>
          </ButtonContainer>
          <ButtonContainer delay={0.2}>
            <ButtonBase
              disableRipple
              color="inherit"
              className={classes.button}
            >
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Typography variant="subtitle1">
                  <b>Portfolio</b>
                </Typography>
              </Link>
            </ButtonBase>
          </ButtonContainer>
          <ButtonContainer delay={0.3}>
            <ButtonBase
              disableRipple
              color="inherit"
              className={classes.button}
            >
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Typography variant="subtitle1">
                  <b>Contact</b>
                </Typography>
              </Link>
            </ButtonBase>
          </ButtonContainer>
          <ButtonContainer delay={0.4}>
            <MaterialLink target="_blank" href="./resume.pdf" rel="noopener">
              <Button variant="outlined" color="secondary" size="small">
                <Typography variant="subtitle1">
                  <b>Resume</b>
                </Typography>
              </Button>
            </MaterialLink>
          </ButtonContainer>
        </Box>
      </Drawer>
      <Toolbar className={classes.toolbar} />
    </React.Fragment>
  );
};

export default withStyles(styles)(Appbar);
