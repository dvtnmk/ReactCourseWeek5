import React, { useEffect } from "react";
import AuthRoute from "routes/AuthRoute";
import NonAuthRoute from "routes";
import { Provider } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import history from "routes/history";
import stores from "stores";
import { PrivacyRequest } from "helpers/request";
import { actionTypes } from "stores/actions";

function Root(props) {
  useEffect(() => {
    PrivacyRequest().then(result => {
      const dispatch = stores.dispatch;
      dispatch({ type: actionTypes.SET_PRIVACIES, payload: result });
    });
  }, []);
  return (
    // <Provider store={stores}>
    <Router history={history}>
      <Switch>
        <AuthRoute />
        {/* <NonAukthRoute /> */}
        {/* <Route component={() => <h1>paragraph</h1>} /> */}
      </Switch>
    </Router>
    // </Provider>
  );
}

const withProvider = (Component) => (props) => {
  return (
    <Provider store={stores}>
      <Component {...props} />
    </Provider>
  );
}

export default withProvider(Root);
