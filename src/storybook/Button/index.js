import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../../components/Button";

storiesOf("Button", module).add("withText", () => (
  <Button>This is my button</Button>
));
