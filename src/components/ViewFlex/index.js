import React from "react";
import classnames from "classnames";
import "./styles.scss";

function ViewFlex({ children, fluid = false, className, column }) {
  return <div className={classnames("view", { fluid, column }, className)}>{children}</div>;
}

export default ViewFlex;
