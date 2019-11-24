import React from "react";

import { Box, Container, Typography, Grid, Button } from "@material-ui/core";

const Contact = () => {
  return (
    <Box className="section-container">
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" style={{ marginBottom: 30 }}>
          <b>Get in Touch</b>
        </Typography>

        <Grid container direction="column" alignItems="center">
          <Grid item xs={12} sm={12} md={5} style={{ marginBottom: 80 }}>
            <Typography component="p" align="center">
              Need something built or simply want to have a chat? My inbox is
              always open. Whether for a potential project or just to say hi,
              I'll try my best to answer your email!
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              disableRipple
              style={{ textTransform: "none" }}
            >
              Let's talk
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
