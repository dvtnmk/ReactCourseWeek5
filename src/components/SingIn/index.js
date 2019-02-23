import React, { useEffect, useState } from "react";
import { Row, Col, Icon } from "antd";
import Button from "components/Button";
import Input from "components/Input";
import { API } from "configs";
import './styles.scss';

function onSigin(email, password) {
  return async function(e) {
    e.preventDefault();
    try {
      const result = await API.fetchAPI(
        `/users?email=${email}&password=${password}`
      );
      console.log(result);
      if (result.length > 0) {
        alert("LogedIn :)");
      } else {
        alert("Email or password incorrect!!!");
      }
    } catch (err) {
      if (err.hasOwnProperty("response")) {
        alert(err.response.error.message);
      }
    }
  };
}

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <div className="signInContainer">
      <h2>Sign in</h2>
      <hr />
      <form onSubmit={onSigin(email, password)}>
        <Row>
          <Col className="col">
            <Input
              fluid
              value={email}
              placeholder="E-mail"
              prefix={<Icon type="mail"/>}
              onChange={e => setEmail(e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col className="col">
            <Input
              fluid
              type="password"
              value={password}
              prefix={<Icon type="lock"/>}
              placeholder="Password"
              label="Password"
              onChange={e => setPassword(e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col span={12} className="col">
            <Button block type="primary">
              Sign in
            </Button>
          </Col>
          <Col span={12} className="col">
            <Button block type="primary">
              Sign up
            </Button>
          </Col>
        </Row>
      </form>
    </div>
  );
}

export default SignIn;
