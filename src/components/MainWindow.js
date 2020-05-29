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
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import meBest from "../images/mebest.jpg";
import professorPreview from "../images/betterprofessorpreview.png";
import { setPage } from "../actions/actions";
import { connect } from "react-redux";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import WebIcon from "@material-ui/icons/Web";
import ComputerIcon from "@material-ui/icons/Computer";
import PaletteIcon from "@material-ui/icons/Palette";
import CreateIcon from "@material-ui/icons/Create";
import StorageIcon from "@material-ui/icons/Storage";

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

    "& hr": {
      color: "black",
      width: "25%",
      height: "2px",
      backgroundColor: "white",
      margin: "0",
    },
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
  skills: {
    fontFamily: "Poppins",
    marginBottom: "10%",
    marginLeft: "5%",

    "& hr": {
      color: "black",
      width: "25%",
      height: "2px",
      backgroundColor: "white",
      margin: "0",
    },
  },
  expandable: {
    marginTop: "5%",
    marginBottom: "5%",
  },
  panel: {
    backgroundColor: "#292929",
    color: "white",
    marginBottom: "2%",
  },
});

const MainWindow = ({ page, setPage }) => {
  const [dialogState, setDialogState] = useState({
    professor: false,
    urbanize: false,
  });

  const [expandedState, setExpandedState] = useState("core");

  const handleExpansion = (panel) => (event, isExpanded) => {
    setExpandedState(isExpanded ? panel : false);
  };

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
          <Dialog
            className={classes.dialog}
            onClose={() => setDialogState({ ...dialogState, urbanize: false })}
            open={dialogState.urbanize}
            fullWidth={true}
            maxWidth="sm"
          >
            <DialogTitle
              onClose={() =>
                setDialogState({ ...dialogState, urbanize: false })
              }
            >
              Urbanize Web App
            </DialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom>
                Urbanize was a personal project created using the unofficial
                Urban Dictionary API. I found the API while looking for another
                fun project to build out. This project took a duration of around
                2 days. This project was built using the framework 'React'.
              </Typography>
              <br />
              <Typography gutterBottom>
                It uses localStorage to persist user data and is created to be a
                'no-setup' style app with zero account creation. The user can
                search for definitions as well as save the ones they like most
                to their library. After receiving feedback about how some users
                do not know any 'urban' words, I created a random word generator
                to automatically search 1 word out of a collection sent back
                from the API.
              </Typography>
              <br />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "40%",
                }}
              >
                <Typography gutterBottom>Technologies:</Typography>
                <i class="fab fa-html5"></i>
                <i class="fab fa-css3-alt"></i>
                <i class="fab fa-react"></i>
                <i class="fas fa-database"></i>
                <i class="fab fa-js-square"></i>
              </div>
            </DialogContent>
            <DialogActions>
              <a
                href="https://github.com/NateTheDev1/urbanize"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <Button style={{ color: "white" }}>GitHub</Button>
              </a>
              <Button
                style={{ color: "white" }}
                autoFocus
                onClick={() =>
                  setDialogState({ ...dialogState, urbanize: false })
                }
              >
                Done
              </Button>
            </DialogActions>
          </Dialog>
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
      <Container maxWidth="md" className={classes.skills} id="skills">
        <h2 style={{ color: "#F9A825" }}>My Skills</h2>
        <hr />
        <div className={classes.expandable}>
          <ExpansionPanel
            className={classes.panel}
            expanded={expandedState === "core"}
            onChange={handleExpansion("core")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            >
              <Typography
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "13%",
                  justifyContent: "space-between",
                }}
              >
                Core Skills <WebIcon />
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails
              style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "0 auto",
              }}
            >
              <Typography
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "#DE4B25",
                }}
              >
                HTML5
                <i
                  class="fab fa-html5"
                  style={{ marginTop: "10px", fontSize: "2rem" }}
                ></i>
              </Typography>
              <Typography
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "#2B62EB",
                }}
              >
                CSS
                <i
                  class="fab fa-css3-alt"
                  style={{ marginTop: "10px", fontSize: "2rem" }}
                ></i>
              </Typography>
              <Typography
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "#EED818",
                }}
              >
                JavaScript
                <i
                  class="fab fa-js-square"
                  style={{ marginTop: "10px", fontSize: "2rem" }}
                ></i>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            className={classes.panel}
            expanded={expandedState === "frontend"}
            onChange={handleExpansion("frontend")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            >
              <Typography
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "24%",
                  justifyContent: "space-between",
                }}
              >
                Front End Development <ComputerIcon />
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails
              style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "0 auto",
              }}
            >
              <Typography
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "#48CFF8",
                }}
              >
                React
                <i
                  class="fab fa-react"
                  style={{ marginTop: "10px", fontSize: "2rem" }}
                ></i>
              </Typography>
              <Typography
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "#6B3BB4",
                }}
              >
                Redux
                <i
                  class="fas fa-sync-alt"
                  style={{ marginTop: "10px", fontSize: "2rem" }}
                ></i>
              </Typography>
              <Typography
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "#9CE6F4",
                }}
              >
                Electron
                <i
                  class="fas fa-atom"
                  style={{ marginTop: "10px", fontSize: "2rem" }}
                ></i>
              </Typography>
              <Typography
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "#66BB6A",
                }}
              >
                Context API
                <i
                  class="fas fa-search"
                  style={{ marginTop: "10px", fontSize: "2rem" }}
                ></i>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            className={classes.panel}
            expanded={expandedState === "styling"}
            onChange={handleExpansion("styling")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            >
              <Typography
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "9%",
                  justifyContent: "space-between",
                }}
              >
                Styling <PaletteIcon />
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails
              style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "0 auto",
              }}
            >
              <Typography
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "#244C7D",
                }}
              >
                LESS
                <i
                  class="fab fa-less"
                  style={{ marginTop: "10px", fontSize: "2rem" }}
                ></i>
              </Typography>
              <Typography
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "#543B79",
                }}
              >
                Bootstrap & ReactStrap
                <i
                  class="fab fa-bootstrap"
                  style={{ marginTop: "10px", fontSize: "2rem" }}
                ></i>
              </Typography>
              <Typography
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "#E76C72",
                }}
              >
                Materialize CSS
                <i
                  class="fas fa-scroll"
                  style={{ marginTop: "10px", fontSize: "2rem" }}
                ></i>
              </Typography>
              <Typography
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "#007DC5",

                  width: "12%",
                }}
              >
                Material-UI
                <img
                  src="https://material-ui.com/static/logo.png"
                  style={{ marginTop: "10px", width: "30%" }}
                ></img>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            className={classes.panel}
            expanded={expandedState === "testing"}
            onChange={handleExpansion("testing")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            >
              <Typography
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "9.5%",
                  justifyContent: "space-between",
                }}
              >
                Testing <CreateIcon />
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                margin: "0 auto",
              }}
            >
              <Typography style={{ color: "blue", fontSize: "1.5rem" }}>
                Cypress.io
              </Typography>
              <Typography style={{ color: "#954059", fontSize: "1.5rem" }}>
                Jest
              </Typography>
              <Typography style={{ color: "#F55961", fontSize: "1.5rem" }}>
                Enzyme
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            className={classes.panel}
            expanded={expandedState === "backend"}
            onChange={handleExpansion("backend")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            >
              <Typography
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "24%",
                  justifyContent: "space-between",
                }}
              >
                Back End Development <StorageIcon />
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails
              style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "0 auto",
              }}
            >
              <Typography
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "#F0D91C",
                }}
              >
                Express
                <i
                  class="fab fa-node-js"
                  style={{ marginTop: "10px", fontSize: "2rem" }}
                ></i>
              </Typography>
              <Typography
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "#68A063",
                }}
              >
                Node.js
                <i
                  class="fab fa-node"
                  style={{ marginTop: "10px", fontSize: "2rem" }}
                ></i>
              </Typography>
              <Typography
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "#3D9B2F",
                }}
              >
                MongoDB
                <i
                  class="fas fa-database"
                  style={{ marginTop: "10px", fontSize: "2rem" }}
                ></i>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
        <a href="#contact" onClick={() => setPage("contact")}>
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
