import React from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Link
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import business from "../../assets/images/business.flyakeed.PNG";
import hospital from "../../assets/images/hospital.consultation.PNG";
import medicare from "../../assets/images/medicare.PNG";

const data = [
  {
    title: "Business Fylakeed",
    description:
      "Business related website that caters with online flight and hotel bookings, employee management, cost and budget center, administrative hierarchy and other business related services.",
    sub: "Techonology used mainly are:",
    tech: [" Reactjs,", " Graphql,", " Material UI"],
    images: [business],
    link: "https://business.flyakeed.com/"
  },
  {
    title: "Hospital Consultation",
    description:
      "Website that helps patient in booking their consultations, check their queuing status, check the doctor's current status and other related hospital services.",
    sub: "Techonology used mainly are:",
    tech: [" Vue,", " Laravel API,", " Vuetify"],
    images: [hospital],
    link: null
  },
  {
    title: "Medicare",
    description:
      "Prototype Android app feature that provided user with the ability to remind them when to take their medicine via notification and sms message.",
    sub: "Techonology used mainly are:",
    tech: [" Flutter,", " Laravel API,"],
    images: [medicare],
    link: null
  }
];

const useStyles = makeStyles(() => ({
  image: {
    width: "100%",
    height: 250,
    borderRadius: 4,
    marginBottom: 15
  },
  text: {
    marginTop: 15
  }
}));

const CustomDialog = ({ isOpen, setIsOpen, id }) => {
  const classes = useStyles();
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
          <img key={key} src={value} alt="Logo" className={classes.image} />
        ))}
        <Typography variant="body1" gutterBottom>
          {data[id].description}
        </Typography>
        <Typography variant="body2" display="inline">
          {data[id].sub}{" "}
          {data[id].tech.map((value, key) => (
            <Typography key={key} variant="body2" display="inline">
              <b>{value}</b>
            </Typography>
          ))}
        </Typography>
        {data[id].link && (
          <Typography
            variant="caption"
            display="block"
            className={classes.text}
          >
            Link:{" "}
            <Link
              target="_blank"
              href="https://business.flyakeed.com/"
              rel="noopener"
            >
              Business Flyakeed
            </Link>
          </Typography>
        )}
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
