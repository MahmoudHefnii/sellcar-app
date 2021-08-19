import React from "react";
import classes from "./RequiredSection.css";
import RequiredItem from "./RequiredItem/RequiredItem";
import SmallTitle from "../UI/SmallTitle/SmallTitle";
import { RequiredData } from "../../DummyData/RequiredData";

const RequiredSection = (props) => {
     return (
          <React.Fragment>
               <div className={classes.Required}>
                    <SmallTitle title="Required Documentation" />
                    <div className={classes.RequiredList}>
                         {RequiredData.map((item) => (
                              <RequiredItem key={item.id} title={item.title} subTitle={item.subTitle} />
                         ))}
                    </div>
               </div>
          </React.Fragment>
     );
};

export default RequiredSection;
