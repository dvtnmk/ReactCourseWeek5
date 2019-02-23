import React from "react";
import { storiesOf } from "@storybook/react";
import ProfileImage from "components/ProfileImage";
const src = 'https://specials-images.forbesimg.com/imageserve/5ba415b6a7ea434e4c694719/416x416.jpg?background=000000&cropX1=1503&cropX2=4716&cropY1=21&cropY2=3236'
storiesOf("Profile Image", module).add("with no image", () => <ProfileImage />)
.add('with image', () => <ProfileImage src={src} />)
