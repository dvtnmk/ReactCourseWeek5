import React from "react";
import classnames from "classnames";
import "./styles.scss";

function ViewFlex({ children, fluid = false }) {
  return <div className={classnames("view", { fluid })}>{children}</div>;
}

export default ViewFlex;
