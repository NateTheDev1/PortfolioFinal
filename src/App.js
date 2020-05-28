import React from "react";
import { connect } from "react-redux";
import Sidebar from "./components/Sidebar";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {},
});

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <Sidebar />
    </div>
  );
};

const mapStateToProps = (state) => {};

export default connect(mapStateToProps, {})(App);
