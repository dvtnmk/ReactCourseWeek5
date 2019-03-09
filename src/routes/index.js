import React from "react";
import { Route } from "react-router-dom";
import Login from "containers/Login";
function CustomRoute() {
  return (
    <React.Fragment>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
    </React.Fragment>
  );
}

export default CustomRoute;
