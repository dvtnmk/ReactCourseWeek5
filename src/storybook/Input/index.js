import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "../../components/Input";

storiesOf("Input", module)
  .add("default", () => <Input />)
  .add("withError", () => <Input error />)
  .add("withSuccess", () => <Input success />)
  .add("withLabel", () => <Input label="Username" />)
  .add("withOutInline", () => (
    <div>
      <Input label="Username" />
      <Input label="Username" />
    </div>
  ))
  .add("withInline", () => (
    <div>
      <Input inline label="Username" />
      <Input inline label="Username" />
    </div>
  ));
