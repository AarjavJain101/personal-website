import React from "react";
import Logo from "../images/Logo.png";
import "../styles/Header.css";

const Header = (props) => {
    const { showPageOptions, handlePageOptions, handleShowProjectsHome } = props;

    const handleChange = () => {
        handlePageOptions();
    };

    return (
        <div className="header-container">
            <div
                className="logo"
                onClick={() => {
                    handleShowProjectsHome();
                }}
            >
                <h2 className="go-home">Home ⬇</h2>
                <img className="logo-image" src={Logo} alt="Logo" draggable="false" />
            </div>
            <div
                className={`${showPageOptions ? " change change-hamburger" : "hamburger"}`}
                onClick={handleChange}
            >
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
        </div>
    );
};

export default Header;
