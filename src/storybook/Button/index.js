import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../../components/Button";
import { Button as AntButton } from "antd";

storiesOf("Button", module)
  .add("default", () => <Button>Default</Button>)
  .add("primary", () => <Button color="primary">Primary</Button>)
  .add("danger", () => <Button color="danger">Danger</Button>)
  .add("ant button", () => <AntButton>Hello Ant</AntButton>);
