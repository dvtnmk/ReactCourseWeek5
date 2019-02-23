import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../../components/Button";
import { Button as AntButton } from "antd";

storiesOf("Button", module)
  .add("default", () => <Button>Default</Button>)
  .add("dashed", () => <Button type="dashed">Dashed</Button>)
  .add("primary", () => <Button type="primary">Primary</Button>)
  .add("danger", () => <Button type="danger">Danger</Button>)
