import React from "react";
import "../../translations/i18n";
import Video from "../../assets/images/Video.png";
import VideoIcon from "../../assets/images/Play Video.svg";
import classes from "./StartToday.css";
import Title from "../UI/Title/Title";
import Form from "./Form/Form";

const StartToday = (props) => {
     const { workSectionRef } = props;
     return (
          <React.Fragment>
               <div className={classes.StartToday} ref={workSectionRef}>
                    <Title title="Start today!" subTitle="You are just one click away from selling your car." />
                    <div className={classes.Content}>
                         <div className={classes.Video}>
                              <div className={classes.VideoHead}>
                                   <img className={classes.VideoHeadImg} src={Video} alt="" />
                                   <img className={classes.VideoHeadIcon} src={VideoIcon} alt="" />
                              </div>

                              <div className={classes.VideoContainer}>
                                   <h5 className={classes.VideoTitle}>Why you should sell your car with us?</h5>
                                   <h6 className={classes.VideoSubTitle}>We support you from start to finish</h6>
                                   <span className={classes.VideoDetails}>We have streamlined the process to sell your car online for quick payment to get your free cash offer.</span>
                                   <span className={classes.FooterVideoDetails}>Ready to sell your car?</span>
                              </div>
                         </div>
                         <div className={classes.Form}>
                              <Form />
                         </div>
                    </div>
               </div>
          </React.Fragment>
     );
};

export default StartToday;
