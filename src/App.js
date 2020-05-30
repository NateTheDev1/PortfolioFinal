import React from "react";
import { connect } from "react-redux";
import Sidebar from "./components/Sidebar";
import { makeStyles } from "@material-ui/core";
import MainWindow from "./components/MainWindow";
import MediaQuery from "react-responsive";
import { useMediaQuery } from "react-responsive";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    width: "100%",
  },
});

const App = () => {
  const hideSideBar = useMediaQuery({ query: "(min-width: 1650px" });
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {hideSideBar && <Sidebar />}
      <MainWindow />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    page: state.page,
  };
};

export default connect(mapStateToProps, {})(App);
