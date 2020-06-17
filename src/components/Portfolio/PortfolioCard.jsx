import React from "react";

import { Card, CardContent, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";

const useStyles = makeStyles((theme) => ({
  card: {
    [theme.breakpoints.down("xs")]: {
      minHeight: 250,
    },
    border: `1px solid ${theme.palette.secondary.main}`,
    cursor: "pointer",
    minHeight: 350,
    position: "relative",
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    marginBottom: 15,
  },
  cardDescription: {
    marginBottom: 15,
    fontSize: 17,
  },
  cardTechnology: {
    position: "absolute",
    bottom: 15,

    "& span": {
      marginRight: 15,
    },
  },
}));

const PortfolioCard = ({ open, title, description, technologies }) => {
  const classes = useStyles();

  return (
    <Card elevation={0} className={classes.card} onClick={() => open()}>
      <CardContent>
        <Box className={classes.cardHeader}>
          <FolderOpenIcon fontSize="large" />

          <Box display="inline" pl={1}>
            <Typography variant="h5" display="inline">
              <Box component="b">{title}</Box>
            </Typography>
          </Box>
        </Box>

        <Typography
          variant="body1"
          component="p"
          className={classes.cardDescription}
        >
          {description}
        </Typography>

        <Box className={classes.cardTechnology}>
          {technologies.map((technology) => (
            <Typography key={technology} variant="caption" component="span">
              {technology}
            </Typography>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default PortfolioCard;
