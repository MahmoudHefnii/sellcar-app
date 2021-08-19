import React from "react";

import classes from "./Service.css";

const Service = (props) => {
     const { icon, title, details } = props;

     return (
          <React.Fragment>
               <div className={classes.ServiceContainer}>
                    <div className={classes.ServiceContent}>
                         <img src={icon} alt="" />
                         <div className={classes.ServiceDetails}>
                              <span className={classes.ServiceDetailsTitle}>{title}</span>
                              <span className={classes.ServiceDetailsSubTitle}>{details}</span>
                         </div>
                    </div>
               </div>
          </React.Fragment>
     );
};
export default Service;
