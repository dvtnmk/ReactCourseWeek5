import React from "react";
import { Route, Switch } from "react-router-dom";
import Timeline from "containers/Timeline";
import Layout from "components/Layout";
import Login from "containers/Login";
import Register from "containers/Register";

function AuthRoute() {
  return (
    <Switch>
      <Route exact path="/" component={() => <Redirect to="/signin" />} />
      <Route exact path="/signin" component={Login} />
      <Route exact path="/signup" component={Register} />
      <Layout>
        <Route exact path="/timeline/:id?" component={Timeline} />

        <Route component={() => <h1>Not found</h1>} />
      </Layout>
    </Switch>
  );
}

export default AuthRoute;
