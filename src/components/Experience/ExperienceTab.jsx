import React from "react";

import { Box, Typography, Link, Grid } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  tabContainer: {
    padding: 24,
  },
  link: {
    display: "inline-block",
    "&:hover": {
      textDecoration: "none",
      "&:after": {
        width: "100%",
      },
    },
    "&:after": {
      cursor: "pointer",
      content: "close-quote",
      display: "block",
      margin: "0 auto",
      width: 0,
      height: 2,
      background: theme.palette.primary.main,
      transition: "width .4s",
    },
  },
  list: {
    listStyle: "none",

    "& li": {
      position: "relative",
      marginBottom: 15,

      "&::before": {
        content: "'⯈'",
        position: "absolute",
        left: -25,
        color: theme.palette.primary.main,
      },
    },
  },
}));

const ExperienceTab = ({ title, link, linkAt, date, lists }) => {
  const classes = useStyles();

  return (
    <Grid>
      <Grid item xs={12}>
        <Box className={classes.tabContainer}>
          <Typography
            variant="subtitle1"
            gutterBottom
            style={{ fontWeight: "bold" }}
          >
            {title}&nbsp;
            {linkAt && (
              <Link
                target="_blank"
                href={link}
                rel="noopener"
                className={classes.link}
              >
                @ {linkAt}
              </Link>
            )}
          </Typography>
          <Typography variant="caption">{date}</Typography>

          <ul className={classes.list}>
            {lists.map((list) => (
              <li key={list}>
                <Typography variant="body2">{list}</Typography>
              </li>
            ))}
          </ul>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ExperienceTab;
