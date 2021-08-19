import React from "react";

import ArrowIcon from "../../../assets/images/White Arrow.svg";
import classes from "./Button.css";

const Button = (props) => {
  const { title, arrow } = props;

  return (
    <div className={classes.ButtonContainer}>
      <span>{title}</span>
      {arrow ? <img src={ArrowIcon} alt="arrow" /> : null}
    </div>
  );
}

export default Button;
