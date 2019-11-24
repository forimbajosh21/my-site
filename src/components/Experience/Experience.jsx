import React, { useState } from "react";

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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      <Grid container>
        <Grid item xs={12} sm={12} md={8}>
          <Box p={3}>{children}</Box>
        </Grid>
      </Grid>
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 224
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const Experience = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="section-container">
      <Container maxWidth="lg">
        <Typography variant="h5" classes={{ root: "header" }}>
          <b>Experience</b>
        </Typography>

        <div className={classes.root}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            <Tab label="Leandev Inc" />
            <Tab label="Freelance" />
          </Tabs>
          <TabPanel value={value} index={0}>
            <div>
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ fontWeight: "bold" }}
              >
                Jr. Web Developer/Frontend Developer <Link>@Leandev Inc</Link>
              </Typography>
              <Typography variant="caption">February 2018 - Present</Typography>

              <ul>
                <li>
                  <Typography variant="body2">
                    Develop and maintained code for in-house and client website
                    using HTML, CSS, JavaScript, and React
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    Worked closely with designers and management team to
                    develop, document, and manage the corporate online travel
                    and related services website using CSS, Javascript, GraphQL,
                    and React.
                  </Typography>
                </li>
              </ul>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div>
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ fontWeight: "bold" }}
              >
                Freelance Web Developer
              </Typography>
              <Typography variant="caption">January 2017 - 2018</Typography>

              <ul>
                <li>
                  <Typography variant="body2">
                    Work with a variety of different languages, platforms,
                    frameworks, and content management systems such as
                    JavaScript, TypeScript, React, Vue, Laravel, Wordpress and
                    Ionic
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    Develop and delivered efficient and effective web and hybrid
                    applications on time
                  </Typography>
                </li>
              </ul>
            </div>
          </TabPanel>
        </div>
      </Container>
    </Box>
  );
};

export default Experience;
