import React from "react";
import { connect } from "react-redux";

const App = () => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

const mapStateToProps = (state) => {};

export default connect(mapStateToProps, {})(App);
