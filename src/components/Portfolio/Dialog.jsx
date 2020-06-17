import React from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Link,
  Box,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import coach2grow from "../../assets/images/coach2grow.png";
import business from "../../assets/images/business.flyakeed.PNG";
import hospital from "../../assets/images/hospital.consultation.PNG";
import medicare from "../../assets/images/medicare.PNG";

const data = [
  {
    title: "Coach2Grow",
    description:
      "Let Globe Telecom's Coach2Grow app change the way you document and organize your coaching sessions!",
    sub: "Techonology used mainly are:",
    tech: [" React Native,", " Redux"],
    images: [coach2grow],
    links: [
      {
        type: "Android",
        url:
          "https://play.google.com/store/apps/details?id=globe.coach2grow.android&hl=en",
      },
      {
        type: "iOS",
        url: "https://apps.apple.com/ph/app/coach2grow/id1208522569",
      },
    ],
  },
  {
    title: "Business Fylakeed",
    description:
      "Business related website that caters with online flight and hotel bookings, employee management, cost and budget center, administrative hierarchy and other business related services.",
    sub: "Techonology used mainly are:",
    tech: [" Reactjs,", " Graphql,", " Material UI"],
    images: [business],
    links: [
      { type: "Business FlyAkeed", url: "https://business.flyakeed.com/" },
    ],
  },
  {
    title: "Hospital Consultation",
    description:
      "Website that helps patient in booking their consultations, check their queuing status, check the doctor's current status and other related hospital services.",
    sub: "Techonology used mainly are:",
    tech: [" Vue,", " Laravel API,", " Vuetify"],
    images: [hospital],
    links: null,
  },
  {
    title: "Medicare",
    description:
      "Prototype Android app feature that provided user with the ability to remind them when to take their medicine via notification and sms message.",
    sub: "Techonology used mainly are:",
    tech: [" Flutter,", " Laravel API,"],
    images: [medicare],
    links: null,
  },
];

const useStyles = makeStyles(() => ({
  imagesCoach2Grow: {
    height: 250,
    borderRadius: 4,
    marginBottom: 15,
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 4,
    marginBottom: 15,
  },
  text: {
    marginRight: 15,
  },
}));

const CustomDialog = ({ isOpen, setIsOpen, id }) => {
  const classes = useStyles();

  const displayLinks = (data) => {
    return data.map((link) => (
      <Typography
        key={link.url}
        variant="caption"
        display="inline"
        className={classes.text}
      >
        Link:&nbsp;
        <Link target="_blank" href={link.url} rel="noopener">
          {link.type}
        </Link>
      </Typography>
    ));
  };
  return (
    <Dialog
      open={isOpen}
      disableBackdropClick
      disableEscapeKeyDown
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>{data[id].title}</DialogTitle>
      <DialogContent>
        {data[id].images.map((value, key) => (
          <img
            key={key}
            src={value}
            alt="Logo"
            className={id === 0 ? classes.imagesCoach2Grow : classes.image}
          />
        ))}
        <Typography variant="body1" gutterBottom>
          {data[id].description}
        </Typography>
        <Typography variant="body2" display="inline">
          {data[id].sub}{" "}
          {data[id].tech.map((value, key) => (
            <Typography
              key={key}
              variant="body2"
              display="inline"
              component="span"
            >
              <b>{value}</b>
            </Typography>
          ))}
        </Typography>
        <Box mt={3}>{data[id].links && displayLinks(data[id].links)}</Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setIsOpen(false)} color="secondary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
