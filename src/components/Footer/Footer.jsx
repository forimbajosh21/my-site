import React from "react";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Toolbar, Container, Grid, Box, Link } from "@material-ui/core";

import MailOutlineIcon from "@material-ui/icons/MailOutline";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function AnimateContainer({ delay, children }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "tween", delay }}
    >
      {children}
    </motion.div>
  );
}

const Footer = () => {
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0
  });

  return (
    <Toolbar>
      <Container maxWidth="lg" ref={ref}>
        {inView && (
          <Grid item xs={12} container justify="flex-end">
            <Box px={1}>
              <AnimateContainer delay={0.3}>
                <Link href="mailto:forimbajosh21@gmail.com">
                  <MailOutlineIcon color="secondary" fontSize="large" />
                </Link>
              </AnimateContainer>
            </Box>
            <Box px={1}>
              <AnimateContainer delay={0.6}>
                <Link
                  target="_blank"
                  rel="noopener"
                  href="https://www.linkedin.com/in/joshua-san-jose-079a58146"
                >
                  <LinkedInIcon color="secondary" fontSize="large" />
                </Link>
              </AnimateContainer>
            </Box>
            <Box px={1}>
              <AnimateContainer delay={0.9}>
                <Link
                  target="_blank"
                  rel="noopener"
                  href="https://github.com/forimbajosh21"
                >
                  <GitHubIcon color="secondary" fontSize="large" />
                </Link>
              </AnimateContainer>
            </Box>
          </Grid>
        )}
      </Container>
    </Toolbar>
  );
};

export default Footer;
