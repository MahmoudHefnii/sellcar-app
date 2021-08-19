import React from "react";

import classes from "./SmallTitle.css";

const SmallTitle = (props) => {
     const { title } = props;
     return (
          <div className={classes.SmallTitle}>
               <h5 className={classes.Title}>{title}</h5>
          </div>
     );
};

export default SmallTitle;
