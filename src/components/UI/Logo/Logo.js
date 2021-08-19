import React from "react";
import classes from "./Logo.css";

const Logo = (props) => {
     const { logo } = props;

     return (
          <div className={classes.Logo}>
               <img src={logo} alt="logo" />
          </div>
     );
};

export default Logo;
