import React from "react";
import Logo from "../UI/Logo/Logo";
import logo from "../../assets/images/Logo.svg";
import classes from "./Footer.css";
import { SocialData } from "../../DummyData/SocialData";

const Footer = (props) => {
     return (
          <footer className={classes.Footer}>
               <div className={classes.Logo}>
                    <Logo logo={logo} />
                    <p className={classes.Details}>Buy new and used cars in UAE, shipping and delivery service are available, Sell your car at the highest price online with no worries visiting cars show rooms.</p>
               </div>
               <div className={classes.Social}>
                    <p className={classes.SocialText}>Follow the first and the largest online auction in UAE and Middle East </p>
                    <div className={classes.SocialIcons}>
                         <ul className={classes.SocialIconsList}>
                              {SocialData.map((item) => (
                                   <li key={item.id} className={classes.SocialIconsItem}>
                                        <a href="/" target="_blank">
                                             <img src={item.icon} alt={item.title} />
                                        </a>
                                   </li>
                              ))}
                         </ul>
                    </div>
               </div>
          </footer>
     );
};

export default Footer;
