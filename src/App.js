import React, { useState, useRef } from "react";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import WorksSection from "./components/WorksSection/WorksSection";
import StartToday from "./components/StartToday/StartToday";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import PreperationSection from "./components/PreperationSection/PreperationSection";
import Footer from "./components/Footer/Footer";
import RequiredSection from "./components/RequiredSection/RequiredSection";
import classes from "./App.css";
import i18n from "./translations/i18n";

function App() {
     const themes = {
          english: {
               language: "en",
          },
          arabic: {
               language: "ar",
          },
     };

     const [language, setLanguage] = useState("en");
     const ThemeContext = React.createContext(themes.english);
     const workSection = useRef();

     const handleOnclick = (e) => {
          e.preventDefault();
          setLanguage(e.target.value);
          i18n.changeLanguage(e.target.value);
     };
     const smoothScroll = (target) => {
          const { top } = target.getBoundingClientRect();
          window.scrollTo({
               top: top + window.pageYOffset,
               behavior: "smooth",
          });
     };
     return (
          <ThemeContext.Provider value={themes.english}>
               <div className={classes.AppContainer} lang={language} dir={language === "en" ? "ltr" : "rtl"}>
                    <NavBar changeLanguage={handleOnclick} />
                    <Header smoothScroll={smoothScroll} workSectionRef={workSection} />
                    <WorksSection />
                    <StartToday workSectionRef={workSection} />
                    <ServicesSection />
                    <PreperationSection />
                    <RequiredSection />
                    <Footer />
               </div>
          </ThemeContext.Provider>
     );
}

export default App;
