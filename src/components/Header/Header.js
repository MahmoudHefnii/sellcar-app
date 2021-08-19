import React from "react";
import { useTranslation } from "react-i18next";
import "../../translations/i18n";

import Button from "../UI/Button/Button";

import classes from "./Header.css";

const Header = (props) => {
     const { t } = useTranslation();
     const { workSectionRef, smoothScroll } = props;

     return (
          <React.Fragment>
               <div className={classes.HeaderContainer}>
                    <div className={classes.HeaderContent}>
                         <h3 className={classes.HeaderTitle}>{t("headerTitle")}</h3>
                         <h4 className={classes.HeaderSubTitle}>{t("headerSubTitle")}</h4>
                    </div>
                    <div className={classes.HeaderButton} onClick={() => smoothScroll(workSectionRef.current)}>
                         <Button title={t("headerButton")} arrow={true} />
                    </div>
               </div>
          </React.Fragment>
     );
};

export default Header;
