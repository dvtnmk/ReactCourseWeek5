import React from "react";
import { Icon } from "antd";
import "./styles.scss";

function CheckBox({ onChange = () => {}, checked = false, icon, label = "" }) {
  return (
    <label className="checkboxWrapper">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <div className="checkbox" />
      {icon && (
        <div className="iconWrapper">
          <div className="iconContent">{icon}</div>
        </div>
      )}
      <div className="label">{label}</div>
    </label>
  );
}

export default CheckBox;
