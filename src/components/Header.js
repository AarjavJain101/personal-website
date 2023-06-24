import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../images/Logo.png";
import "../styles/Header.css";

const Header = (props) => {
    const { showPageOptions, handlePageOptions } = props;

    const history = useNavigate();

    const handleChange = () => {
        handlePageOptions();
    };

    const goToHomePage = () => {
        history("/");
        window.location.reload();
    };

    return (
        <div className="header-container">
            <div className="logo" onClick={goToHomePage}>
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
