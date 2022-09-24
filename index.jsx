import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ThemeContext from "./themeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ThemeContext.Provider value={"dark"}>
        <App />
    </ThemeContext.Provider>
);