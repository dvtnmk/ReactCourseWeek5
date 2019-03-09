import React from "react";
import SignIn from "components/SignIn";
import { Layout } from "antd";

function LoginContainer() {
  return (
    <div className="container">
      <Layout>
        <SignIn />
      </Layout>
    </div>
  );
}

export default LoginContainer;
