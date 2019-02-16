import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";

function onSigin() {}

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form onSubmit={onSigin}>
        <Input value={username} placeholder="Username" label="Username" />
        <Input
          type="password"
          value={password}
          placeholder="Password"
          label="Password"
        />
        <Button type="submit">SignIn</Button>
        <Button type="button">SignUp</Button>
      </form>
    </div>
  );
}

export default SignIn;
