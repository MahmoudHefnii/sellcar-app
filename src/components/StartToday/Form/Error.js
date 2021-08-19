import React from "react";
import classes from "./Error.css";
const Error = ({ error }) => {
     if (error) {
          return <div className={classes.FormError}>{error}</div>;
     }
     return <div />;
};

export default Error;
