import React from "react";
import WorksSteps from "./WorksSteps/WorksSteps";
import SoldIcon from "../../assets/images/Sold.svg";
import classes from "./WorksSection.css";
import { StepsData } from "../../DummyData/StepsData";
const WorksSection = (props) => {
     return (
          <React.Fragment>
               <div className={classes.WorksSectionContainer}>
                    <div className={classes.Steps}>
                         <div className={classes.StepsHead}>
                              <h3 className={classes.Title}>How it works?</h3>
                              <h4 className={classes.SubTitle}>Sell Your Car in Three Simple Steps</h4>
                         </div>
                         <div className={classes.StepsContent}>
                              {StepsData.map((item) => (
                                   <WorksSteps key={item.id} step={item.id} title={item.title} details={item.details} />
                              ))}
                         </div>
                    </div>
                    <div className={classes.Sold}>
                         <img src={SoldIcon} alt="Sold" />
                         <h3 className={classes.SoldTitle}>Your car will be sold by bidding</h3>
                         <h4 className={classes.SoldSubTitle}>You set the starting price it will be sold for the highest bidder</h4>
                    </div>
               </div>
          </React.Fragment>
     );
};
export default WorksSection;
