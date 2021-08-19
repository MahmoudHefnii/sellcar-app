import React from "react";
import { useTranslation } from "react-i18next";
import "../../translations/i18n";

import Logo from "../UI/Logo/Logo";

import classes from "./NavBar.css";
import logo from "../../assets/images/Logo.svg";

const NavBar = (props) => {
    const { changeLanguage } = props;
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <nav className={classes.NavBarContainer}>
                <div className={classes.NavBarContent}>
                    <Logo logo={logo} />

                    <button className={classes.NavBarLanguageButton} value={t("lang")} onClick={changeLanguage}>
                        {t("Language")}
                    </button>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default NavBar;
