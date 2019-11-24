import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button
} from "@material-ui/core";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import { motion } from "framer-motion";

import "./Portfolio.css";

const Portfolio = () => {
  return (
    <Box className="section-container">
      <Container maxWidth="lg">
        <Typography variant="h5" classes={{ root: "header" }}>
          <b>Portfolio</b>
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={4}>
            <motion.div whileHover={{ y: -15 }}>
              <Card className="card">
                <CardContent>
                  <Box className="card-header">
                    <FolderOpenIcon color="" fontSize="large" />

                    <Box pl={1}>
                      <Typography variant="h5" display="inline">
                        <Box component="b">Business Flyakeed</Box>
                      </Typography>
                    </Box>
                  </Box>

                  <Typography
                    variant="body1"
                    component="p"
                    className="card-description"
                  >
                    Business related website that caters with online flight
                    bookings, hotel bookings and related business services.
                  </Typography>

                  <Box className="card-technology">
                    <Typography variant="caption" component="span">
                      React
                    </Typography>
                    <Typography variant="caption" component="span">
                      Graphql
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <motion.div whileHover={{ y: -15 }}>
              <Card className="card">
                <CardContent>
                  <Box className="card-header">
                    <FolderOpenIcon color="" fontSize="large" />

                    <Box pl={1}>
                      <Typography variant="h5" display="inline">
                        <Box component="b">Hospital Consultation</Box>
                      </Typography>
                    </Box>
                  </Box>

                  <Typography
                    variant="body1"
                    component="p"
                    className="card-description"
                  >
                    Website that helps patient in booking their consultations
                    and any other related hospital services.
                  </Typography>

                  <Box className="card-technology">
                    <Typography variant="caption" component="span">
                      Vue
                    </Typography>
                    <Typography variant="caption" component="span">
                      Laravel
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <motion.div whileHover={{ y: -15 }}>
              <Card className="card">
                <CardContent>
                  <Box className="card-header">
                    <FolderOpenIcon color="" fontSize="large" />

                    <Box pl={1}>
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
                    Android app feature that provided user with the ability to
                    remind them when to take their medicine via notification and
                    sms message.
                  </Typography>

                  <Box className="card-technology">
                    <Typography variant="caption" component="span">
                      Flutter
                    </Typography>
                    <Typography variant="caption" component="span">
                      Laravel
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Portfolio;
