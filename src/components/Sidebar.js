import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { setPage } from "../actions/actions";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "10%",
    overflow: "hidden",
    position: "fixed",
    height: "100%",

    alignItems: "flex-start",
    justifyContent: "center",
    padding: "0px 4.25%",

    "@media (max-width: 1400px)": {
      display: "none !important",
      width: "0%",
      height: "0%",
    },

    "& h2": {
      fontWeight: "700",
      marginBottom: "0",
    },
    "& hr": {
      color: "black",
      width: "75%",
      height: "2px",
      backgroundColor: "black",
      margin: "0",
    },

    "& a": {
      textDecoration: "none",
      color: "black",
    },
  },
});

const Sidebar = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <a href="#home" onClick={() => props.setPage("home")}>
        <h2>Home</h2>
      </a>
      {props.page === "home" ? <hr id="nav-hr" /> : null}

      <a href="#about" onClick={() => props.setPage("about")}>
        <h2>About</h2>
      </a>
      {props.page === "about" ? <hr id="nav-hr" /> : null}

      <a href="#projects" onClick={() => props.setPage("projects")}>
        <h2>Projects</h2>
      </a>
      {props.page === "projects" ? <hr id="nav-hr" /> : null}

      <a href="#skills" onClick={() => props.setPage("skills")}>
        <h2>Skills</h2>
      </a>
      {props.page === "skills" ? <hr id="nav-hr" /> : null}

      <a href="#contact" onClick={() => props.setPage("contact")}>
        <h2>Contact</h2>
      </a>
      {props.page === "contact" ? <hr id="nav-hr" /> : null}

      <a href="#resume" onClick={() => props.setPage("resume")}>
        <h2>Resume</h2>
      </a>
      {props.page === "resume" ? <hr id="nav-hr" /> : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    page: state.page,
  };
};

export default connect(mapStateToProps, { setPage })(Sidebar);
