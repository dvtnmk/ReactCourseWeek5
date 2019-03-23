import React from "react";
import SignUp from "components/SignUp";
import { Link } from "react-router-dom";
import { Layout, Row, Col, Icon } from "antd";
import "./styles.scss";
function LoginContainer() {
  return (
    <div className="registerContainer">
      <div className="backButton">
        <Link to="/signin">
          <Icon type="left" />
          Back
        </Link>
      </div>
      <div>
        <SignUp />
      </div>
    </div>
  );
}

export default LoginContainer;
