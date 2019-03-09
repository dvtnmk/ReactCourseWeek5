import React from "react";
import { storiesOf } from "@storybook/react";
import TimelineCover from "components/Timeline/Cover";

const src = 'https://www.beartai.com/wp-content/uploads/2016/10/official-facebook-logo-slide.jpg'

storiesOf("Timeline Cover", module)
.add("default", () => <TimelineCover src={src} />);
