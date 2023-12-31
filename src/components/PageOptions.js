import React from "react";
import "../styles/PageOptions.css";

const PageOptions = (props) => {
    const { showPageOptions, handlePageOptions, handleShowProjects, handleShowProjectsHome } = props;

    return (
        <div className={`page-options ${showPageOptions ? "show" : ""}`}>
            <div className="options">
                <h2
                    to="/personal-website/"
                    className="home"
                    onClick={() => {
                        handlePageOptions();
                        handleShowProjectsHome();
                    }}
                >
                    Home
                </h2>
                <h2
                    exact
                    to="/personal-website/projects"
                    className="projects"
                    onClick={() => {
                        handlePageOptions();
                        handleShowProjects();
                    }}
                >
                    Projects
                </h2>
                <a
                    href="https://www.linkedin.com/in/aarjav-jain-734b8b204/"
                    className="linked-in"
                    target="_blank"
                    rel="noreferrer"
                >
                    <h2 className="linked-in-heading">Message me on LinkedIn</h2>
                </a>
                <a
                    href="https://www.linkedin.com/in/aarjav-jain-734b8b204/"
                    className="linked-in-btn"
                    target="_blank"
                    rel="noreferrer"
                >
                    <button type="button" className="linked-in-btn">
                        in
                    </button>
                </a>
            </div>
        </div>
    );
};

export default PageOptions;
