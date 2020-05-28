import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

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

const Sidebar = ({ page }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <a href="#home">
        <h2>Home</h2>
      </a>
      {page === "Home" ? <hr id="nav-hr" /> : null}
      <h2>About</h2>
      {page === "About" ? <hr id="nav-hr" /> : null}
      <h2>Projects</h2>
      {page === "Projects" ? <hr id="nav-hr" /> : null}
      <h2>Skills</h2>
      {page === "Skills" ? <hr id="nav-hr" /> : null}
      <h2>Contact</h2>
      {page === "Contact" ? <hr id="nav-hr" /> : null}
      <h2>Resume</h2>
      {page === "Resume" ? <hr id="nav-hr" /> : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    page: state.page,
  };
};

export default connect(mapStateToProps, {})(Sidebar);
