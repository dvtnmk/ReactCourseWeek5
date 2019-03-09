import React from "react";
import AuthRoute from "routes/AuthRoute";
import NonAuthRoute from "routes";
import { Router, Switch } from "react-router-dom";
import history from "routes/history";

function Root() {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <NonAuthRoute />
          <AuthRoute />
        </Switch>
      </Router>
    </div>
  );
}

export default Root;
