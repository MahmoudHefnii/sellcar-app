import React from "react";

import Service from "./Service/Service";

import classes from "./ServicesSection.css";
import Title from "../UI/Title/Title";
import { ServiceData } from "../../DummyData/ServiceData";
const ServicesSection = (props) => {
     return (
          <React.Fragment>
               <div className={classes.ServicesSection}>
                    <Title
                         title="Why use our services?"
                         subTitle="We operates  24 hour/7 day-a-week telephone, email & remote support 
                                    services that is staffed to handle any issue or question "
                    />
                    <div className={classes.ServicesContent}>
                         {ServiceData.map((item) => (
                              <Service key={item.id} icon={item.icon} title={item.title} details={item.details} />
                         ))}
                    </div>
               </div>
          </React.Fragment>
     );
};
export default ServicesSection;
