import React from "react";
import AgroBot from "./AgroBot";
import "../styles/Experiences.css";

const Experiences = (props) => {
    const { handleShowProjects } = props;

    return (
        <div className="experiences-wrapper">
            <div className="agrobot">
                <AgroBot></AgroBot>
            </div>
            <h2 className="projects-heading">To see more Projects click the button below</h2>
            <button
                type="button"
                className="projects-button-experience-section"
                onClick={() => {
                    handleShowProjects();
                }}
            >
                Projects
            </button>
        </div>
    );
};

export default Experiences;
