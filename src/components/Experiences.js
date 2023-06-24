import React from "react";
import { useNavigate } from "react-router-dom";
import AgroBot from "./AgroBot";
import "../styles/Experiences.css";

const Experiences = () => {
    const navigate = useNavigate();

    const handleProjectsButton = () => {
        navigate("/projects");
    };

    return (
        <div className="experiences-wrapper">
            <div className="agrobot">
                <AgroBot></AgroBot>
            </div>
            <h2 className="projects-heading">To see more Projects click the button below</h2>
            <button
                type="button"
                className="projects-button-experience-section"
                onClick={handleProjectsButton}
            >
                Projects
            </button>
        </div>
    );
};

export default Experiences;
