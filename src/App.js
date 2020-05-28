import React from "react";
import { connect } from "react-redux";
import Sidebar from "./components/Sidebar";
import { makeStyles } from "@material-ui/core";
import MainWindow from "./components/MainWindow";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    width: "100%",
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Sidebar />
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
