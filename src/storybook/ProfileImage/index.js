import React from "react";
import { storiesOf } from "@storybook/react";
import ProfileImage from "components/ProfileImage";
const src =
  "https://thewallpapers.org/zoom/19164/wide-wallpaper-1440x900-005.jpg";
storiesOf("Profile Image", module)
  .add("with no image", () => <ProfileImage />)
  .add("with image", () => <ProfileImage src={src} />);
