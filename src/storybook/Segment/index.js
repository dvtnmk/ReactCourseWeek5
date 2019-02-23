import React from "react";
import { storiesOf } from "@storybook/react";
import Segment from "components/Segment";

storiesOf("Segment", module)
  .add("with title", () => <Segment title="My Segment" />)
  .add("with content", () => (
    <Segment title="Post" content={<div>test</div>} />
  ));
