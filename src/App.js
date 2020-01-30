import React, { useState } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import Choose from "./chooseCryptocurrency";
import Informations from "./Informations";

function App() {
  const [theme, setTheme] = useState("light");
  // The function that toggles between themes
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === "light") {
      setTheme("dark");
      // otherwise, it should be light
    } else {
      setTheme("light");
    }
  };

  // Render Choose component if in localStorage dont have information about chosen currency!

  if (localStorage.getItem("formData")) {
    return (
      <div>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <>
            <GlobalStyles />
            <div className="title">
              <h1>Kryptonite</h1>
            </div>
            <button className="themeButton" onClick={toggleTheme}>
              change theme
            </button>
            <div id="main">
              <Informations formData={localStorage.getItem("formData")} />
            </div>
            <footer>
              <div className="footer">
                <p>Copyright © Danilo Lučić 2020</p>
              </div>
            </footer>
          </>
        </ThemeProvider>
      </div>
    );
  } else {
    return (
      <div>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <>
            <GlobalStyles />
            <div className="title">
              <h1>Kryptonite</h1>
            </div>
            <button className="themeButton" onClick={toggleTheme}>
              change theme
            </button>
            <div id="main">
              <Choose />
            </div>
            <footer>
              <div className="footer">
                <p>Copyright © Danilo Lučić 2020</p>
              </div>
            </footer>
          </>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
