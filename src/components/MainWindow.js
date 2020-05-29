import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Fab,
  Avatar,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import meBest from "../images/mebest.jpg";
import professorPreview from "../images/betterprofessorpreview.png";
import { setPage } from "../actions/actions";
import { connect } from "react-redux";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#181818",
    width: "100%",
    height: "100%",
    color: "white",
    marginLeft: "17.5%",
    display: "flex",
    flexDirection: "column",

    "& a": {
      textDecoration: "none",
    },
  },
  home: {
    marginLeft: "5%",
    fontWeight: "700",
    marginBottom: "10%",
    "& h1": {
      marginTop: "25%",
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
    marginLeft: "5%",
    marginBottom: "10%",
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
  projects: {
    marginBottom: "10%",
    marginLeft: "5%",
  },
  media: {
    height: 140,
  },

  cardDiv: {
    marginTop: "5%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: "5%",
  },
  card: {
    maxWidth: 280,
  },
  dialog: {
    "& .MuiDialog-paper": {
      color: "white",
      backgroundColor: "#181818",
    },
  },
});

const MainWindow = ({ page, setPage }) => {
  const [dialogState, setDialogState] = useState({
    professor: false,
    urbanize: true,
  });
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
      <Container maxWidth="md" className={classes.projects} id="projects">
        <h2 style={{ color: "#F9A825" }}>My Projects</h2>
        <hr />
        <div className={classes.cardDiv}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                className={classes.media}
                image={require("../images/betterprofessorpreview.png")}
                title="Better Professor Marketing Site"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Better Professor
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A marketing site built for a school project. The site was
                  built using HTML, CSS, and LESS.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                className={classes.btn}
                onClick={() =>
                  setDialogState({ ...dialogState, professor: true })
                }
              >
                View Full
              </Button>
              <a href="https://gobetterprofessor.netlify.app" target="_blank">
                <Button size="small" className={classes.btn}>
                  View Project
                </Button>
              </a>
            </CardActions>
          </Card>
          <Dialog
            className={classes.dialog}
            onClose={() => setDialogState({ ...dialogState, professor: false })}
            open={dialogState.professor}
            fullWidth={true}
            maxWidth="sm"
          >
            <DialogTitle
              onClose={() =>
                setDialogState({ ...dialogState, professor: false })
              }
            >
              Better Professor Marketing Site
            </DialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom>
                Better Professor was made during a build week for an app called
                "Better Professor", an app allowing professors and students to
                communicate better.
              </Typography>
              <br />
              <Typography gutterBottom>
                I worked with my team on choosing certain colors, fonts, and
                styles to build the marketing site. I have never been a designer
                but I received experience using Figma to design this site.
              </Typography>
              <br />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "30%",
                }}
              >
                <Typography gutterBottom>Technologies:</Typography>
                <i class="fab fa-html5"></i>
                <i class="fab fa-css3-alt"></i>
                <i class="fab fa-less"></i>
              </div>
            </DialogContent>
            <DialogActions>
              <a
                href="https://github.com/NateTheDev1/better-professor"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <Button style={{ color: "white" }}>GitHub</Button>
              </a>
              <Button
                style={{ color: "white" }}
                autoFocus
                onClick={() =>
                  setDialogState({ ...dialogState, professor: false })
                }
              >
                Done
              </Button>
            </DialogActions>
          </Dialog>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                style={{ objectFit: "scale-down", backgroundColor: "black" }}
                component="img"
                className={classes.media}
                image={require("../images/urbanizepreview.PNG")}
                title="Better Professor Marketing Site"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Urbanize Web App
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A web app created using an unofficial Urban Dictionary API.
                  Allows the user to search for definitions and save them.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                className={classes.btn}
                onClick={() =>
                  setDialogState({ ...dialogState, urbanize: true })
                }
              >
                View Full
              </Button>
              <a href="https://urbanize.netlify.app/" target="_blank">
                <Button size="small" className={classes.btn}>
                  View Project
                </Button>
              </a>
            </CardActions>
          </Card>
        </div>
        <a href="#skills" onClick={() => setPage("skills")}>
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
