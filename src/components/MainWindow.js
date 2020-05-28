import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Fab } from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#181818",

    width: "100%",
    height: "175%",
    color: "white",
    marginLeft: "17.5%",
    display: "flex",
    flexDirection: "column",
  },
  home: {
    marginTop: "5%",
    marginLeft: "5%",
    height: "100%",
    fontWeight: "700",

    "& h1": {
      marginTop: "15%",
      fontSize: "2.5rem",
      lineHeight: "3",

      "& span": {
        color: "#F9A825",
      },
    },
  },
  next: {
    backgroundColor: "white",
  },
});

const MainWindow = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="md" className={classes.home} id="home">
        <h1>
          Hello, <br />
          My name is Nathaniel Richards and I am a <br />
          <span>Fullstack Web Developer</span>
        </h1>
        <Fab
          aria-label="next"
          variant="extended"
          className={classes.next}
          size="medium"
        >
          Next
          <ArrowRightIcon />
        </Fab>
      </Container>
    </div>
  );
};

export default MainWindow;
