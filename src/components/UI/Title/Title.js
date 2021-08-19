import React from "react";

import classes from "./Title.css";

const Title = (props) => {
     const { title, subTitle } = props;
     return (
          <div className={classes.TitleHead}>
               <h3 className={classes.Title}>{title}</h3>
               <p className={classes.Subtitle}>{subTitle}</p>
          </div>
     );
};

export default Title;
