import React from "react";
import classes from "./PreperationSection.css";
import Title from "../UI/Title/Title";

const PreperationSection = (props) => {
     return (
          <React.Fragment>
               <div className={classes.PreperationSection}>
                    <Title title="Get prepared before our call" subTitle="Required Documents & Procedures " />
                    <div className={classes.PreperationContent}>
                         <ul className={classes.PreperationItems}>
                              <li className={classes.PreperationItem}>
                                   <span className={classes.Circle}></span>
                                   <span>The car must be brought in good working condition</span>
                              </li>

                              <li className={classes.PreperationItem}>
                                   <span className={classes.Circle}></span>
                                   <span>In case the chassis is not OK, we'll do a registration test (AED 170 is the cost).</span>
                              </li>

                              <li className={classes.PreperationItem}>
                                   <span className={classes.Circle}></span>
                                   <span>The commission is 5% for GCC cars and 7% for imported cars (minimum commission 1000 AED).</span>
                              </li>

                              <li className={classes.PreperationItem}>
                                   <span className={classes.Circle}></span>
                                   <span>If the item is sold, the check will be deposit in your bank account after 10 working days from the time of auction’s conclusion</span>
                              </li>
                         </ul>

                         <ul className={classes.PreperationItems}>
                              <li className={classes.PreperationItem}>
                                   <span className={classes.Circle}></span>
                                   <span>If the car is sold for less than AED 5,000, the company commission is only AED 500.</span>
                              </li>

                              <li className={classes.PreperationItem}>
                                   <span className={classes.Circle}></span>
                                   <span>For the classic cars, trucks and heavy equipment, you must bring export test only and the commission is 7% (minimum commission 1000 AED).</span>
                              </li>

                              <li className={classes.PreperationItem}>
                                   <span className={classes.Circle}></span>
                                   <span>For the equipment (generator, scissor lift, electric forklift ..... etc) Tax invoice is required.</span>
                              </li>

                              <li className={classes.PreperationItem}>
                                   <span className={classes.Circle}></span>
                                   <span>We'll do a comprehensive test (AED 300 is the cost).</span>
                              </li>
                         </ul>
                    </div>
               </div>
          </React.Fragment>
     );
};

export default PreperationSection;
