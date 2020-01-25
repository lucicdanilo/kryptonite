import React from "react";
import "./App.css";
import Switch from "@material-ui/core/Switch";

function App() {
  const [state, setState] = React.useState({
    checked: true
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <div>
      <div className="title">
        <h1>Kryptonite</h1>
      </div>
      <div>
        <div className="theme">
          <div className="themeText">dark mode</div>
          <div className="themeSwitch">
            <Switch
              checked={state.checked}
              onChange={handleChange("checked")}
              value="dark-theme"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          </div>
        </div>
      </div>
      <div className=""></div>
      <div className="footer">
        <p>Copyright © Danilo Lučić 2020</p>
      </div>
    </div>
  );
}

export default App;
