import React from "react";
import {Icon} from 'antd';
import './styles.scss';

function CheckBox({ onChange = () => {}, checked = true, icon, label = "" }) {
  return (
    <div className="checkboxWrapper" onClick={onChange}>
      <input type="checkbox" checked={checked} onChange={onChange} style={{ display: 'none' }} />
      <div className="checkbox" >
        {checked && (
          <div className="checked">
            <Icon type="check" />
          </div>
        )}
      </div>
      {icon && (
        <div className="iconWrapper">
          <div className="iconContent">{icon}</div>
        </div>
      )}
      <div className="label">{label}</div>
    </div>
  );
}

export default CheckBox;
