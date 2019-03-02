import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import CheckBox from "components/CheckBox";
import { Icon } from "antd";
import ProfileImage from "components/ProfileImage";

function CheckBoxPlayGround() {
  const [checked, setCheck] = useState(false);
  const onChange = function() {
    setCheck(!checked);
  };
  return (
    <CheckBox
      name="something"
      checked={checked}
      onChange={onChange}
      icon={<Icon type="user" />}
      label="Hello Icon"
    />
  );
}

storiesOf("Checkbox", module)
  .add("with label", () => <CheckBox label="hello" />)
  .add("with prefix icon", () => (
    <CheckBox icon={<Icon type="user" />} label="Hello Icon" />
  ))
  .add("with prefix profile image", () => (
    <CheckBox
      icon={<ProfileImage size="x2" icon={<Icon type="plus" />} />}
      label="Worapol Buraphan"
    />
  ))
  .add("play ground", () => (
      <CheckBoxPlayGround />
  ));
