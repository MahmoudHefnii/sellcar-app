import React from "react";

import classes from "./WorksSteps.css";

const WorksSteps = (props) => {
     const { step, title, details } = props;

     return (
          <React.Fragment>
               <div className={classes.WorksStepsContainer}>
                    <span className={classes.WorksStepsNumber}>{step}</span>
                    <div className={classes.WorksStepsContent}>
                         <span className={classes.WorksStepsTitle}>{title}</span>
                         <span className={classes.WorksStepsSubTitle}>{details}</span>
                    </div>
               </div>
          </React.Fragment>
     );
};
export default WorksSteps;
