import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Fab, Avatar } from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import meBest from "../images/mebest.jpg";
import { setPage } from "../actions/actions";
import { connect } from "react-redux";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#181818",
    width: "100%",
    height: "175%",
    color: "white",
    marginLeft: "17.5%",
    display: "flex",
    flexDirection: "column",

    "& a": {
      textDecoration: "none",
    },
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
  about: {
    marginTop: "18%",
    marginLeft: "5%",
    height: "100%",
    "& hr": {
      color: "black",
      width: "25%",
      height: "2px",
      backgroundColor: "white",
      margin: "0",
    },
  },
  aboutFlex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "5%",
  },
  aboutP: {
    width: "70%",
    lineHeight: 2,
  },
  img: {
    width: "30%",
  },
  meBest: {
    borderRadius: "50%",
    width: "100%",
    objectFit: "contain",
  },
});

const MainWindow = ({ page, setPage }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="md" className={classes.home} id="home">
        <h1 id="intro-text">
          Hello, <br />
          My name is Nathaniel Richards and I am a <br />
          <span>Fullstack Web Developer</span>
        </h1>
        <a href="#about" onClick={() => setPage("about")}>
          <Fab
            aria-label="next"
            variant="extended"
            className={classes.next}
            size="medium"
          >
            Next
            <ArrowRightIcon />
          </Fab>
        </a>
      </Container>
      <Container maxWidth="md" className={classes.about} id="about">
        <h2 style={{ color: "#F9A825" }}>About Me</h2>
        <hr />
        <div className={classes.aboutFlex}>
          <div className={classes.aboutP}>
            <p style={{ fontSize: "1.5rem" }}>
              I am more than a web developer.
            </p>
            <p className={classes.aboutP}>
              I am an engineer that is passionate about designing, developing,
              and shipping production quality technology. I strive to bring
              ideas to life, let me work with you and let's see what we can
              make!
            </p>
            <p className={classes.aboutP}>
              I am based out of Muskegon, Michigan and yes, it's cold. I have
              been programming and designing games, apps, and programs since I
              was 14 and have a strong passion to create high quality
              applications.
            </p>
          </div>
          <div className={classes.img}>
            <img src={meBest} className={classes.meBest} />
          </div>
        </div>
        <a href="#projects" onClick={() => setPage("projects")}>
          <Fab
            aria-label="next"
            variant="extended"
            className={classes.next}
            size="medium"
          >
            Next
            <ArrowRightIcon />
          </Fab>
        </a>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    page: state.page,
  };
};

export default connect(mapStateToProps, { setPage })(MainWindow);
