import React from "react";
import ThemeContext from "./themeContext.jsx";

class Header extends React.Component {
    static contextType = ThemeContext;
    render() {
        const theme = this.context;
        return (
            <header className={`${theme}-theme`}>
                <h2>{theme === "dark" ? "Dark" : "Light"} Theme</h2>
            </header>
        );
    };
};
export default Header;