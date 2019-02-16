import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { API } from "../../configs";

function onSigin(username, password) {
  return async function(e) {
    e.preventDefault();
    try {
      const result = await API.fetchAPI(
        `/users?username=${username}&password=${password}`
      );
      console.log(result);
      if (result.length > 0) {
        alert("LogedIn :)");
      } else {
        alert("Username or password incorrect!!!");
      }
    } catch (err) {
      if(err.hasOwnProperty('response')){
        alert(err.response.error.message);
      }
    }
    
  };
}

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form onSubmit={onSigin(username, password)}>
        <Input
          value={username}
          placeholder="Username"
          label="Username"
          onChange={e => setUsername(e.target.value)}
        />
        <Input
          type="password"
          value={password}
          placeholder="Password"
          label="Password"
          onChange={e => setPassword(e.target.value)}
        />
        <Button type="submit">SignIn</Button>
        <Button type="button">SignUp</Button>
      </form>
    </div>
  );
}

export default SignIn;
