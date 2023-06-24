import React from "react";
import "../styles/Hero.css";
import BackgroundImage from "../images/Better_Weebly_Background.gif";
import Resume from "./AarjavJain_Resume.pdf";

const Hero = () => {
    const openResume = () => {
        console.log("Hello");
        window.open(Resume, "_blank");
    };

    return (
        <div className="hero">
            <div className="hero-image-container">
                <div className="hero-gradient"></div>
                <img className="hero-image" src={BackgroundImage} alt="GIF" draggable="false" />
            </div>
            <div className="hero-text-container">
                <h2 className="hero-title">Aarjav Jain</h2>
                <p className="hero-subtitle hero-subtitle-1">First Year UBCV Student</p>
                <hr className="hero-line" />
                <p className="hero-subtitle hero-subtitle-2">Aspiring Computer Engineering Student</p>
                <button
                    type="button"
                    className="resume-button"
                    onClick={() => {
                        openResume();
                    }}
                >
                    My Resume
                </button>
            </div>
        </div>
    );
};

export default Hero;
