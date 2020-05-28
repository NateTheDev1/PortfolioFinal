import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});

const Sidebar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h2>Home</h2>
    </div>
  );
};

export default Sidebar;
