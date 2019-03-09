import React from "react";
import AuthRoute from "routes/AuthRoute";
import NonAuthRoute from "routes";
import { Router, Route, Switch } from "react-router-dom";
import history from "routes/history";

function Root() {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <AuthRoute />
          {/* <NonAukthRoute /> */}
          {/* <Route component={() => <h1>paragraph</h1>} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default Root;
