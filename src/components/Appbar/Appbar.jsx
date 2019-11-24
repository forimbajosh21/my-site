import React from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  ButtonBase,
  Container
} from "@material-ui/core";

import "./Appbar.css";

const Appbar = props => {
  const { trigger } = props;

  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Container maxWidth="lg">
          <Toolbar className={`toolbar ${trigger && "toolbar-scrolled"}`}>
            <Typography variant="h4" classes={{ root: "title" }}>
              <b>Joshua San Jose</b>
            </Typography>
            <ButtonBase disableRipple color="inherit" className="button">
              <Typography variant="h6">
                <b>About</b>
              </Typography>
            </ButtonBase>
            <ButtonBase disableRipple color="inherit" className="button">
              <Typography variant="h6">
                <b>Experience</b>
              </Typography>
            </ButtonBase>
            <ButtonBase disableRipple color="inherit" className="button">
              <Typography variant="h6">
                <b>Portfolio</b>
              </Typography>
            </ButtonBase>
            <ButtonBase disableRipple color="inherit" className="button">
              <Typography variant="h6">
                <b>Contact</b>
              </Typography>
            </ButtonBase>
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
};

export default Appbar;
