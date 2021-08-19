import React from "react";

import classes from "./RequiredItem.css";

const RequiredItem = (props) => {
     const { title, subTitle } = props;

     return (
          <React.Fragment>
               <div className={classes.RequiredDocumentationItemContainer}>
                    <span className={classes.RequiredDocumentationItemTitle}>{title}</span>
                    {subTitle ? <span className={classes.RequiredDocumentationItemSubTitle}>{subTitle}</span> : null}
               </div>
          </React.Fragment>
     );
};
export default RequiredItem;
