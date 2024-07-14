import "./styles/App.css";
import { useState } from "react";
import Header from "./components/Header";
import PageOptions from "./components/PageOptions";
import DividerParallax1 from "./images/space.jpg";
import DividerParallax2 from "./images/UBC.png";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import React from "react";

function App() {
    const [showPageOption, setShowPageOptions] = useState(false);
    const [showProjects, setShowProjects] = useState(false);

    const handlePageOptions = () => {
        setShowPageOptions(!showPageOption);
    };

    const handleShowProjects = () => {
        setShowProjects(true);
    };

    const handleShowProjectsHome = () => {
        setShowProjects(false);
    };

    return (
        <div className="App">
            <PageOptions
                showPageOptions={showPageOption}
                handlePageOptions={handlePageOptions}
                handleShowProjects={handleShowProjects}
                handleShowProjectsHome={handleShowProjectsHome}
            ></PageOptions>
            <div className="header">
                <Header
                    showPageOptions={showPageOption}
                    handlePageOptions={handlePageOptions}
                    handleShowProjectsHome={handleShowProjectsHome}
                ></Header>
            </div>
            {!showProjects ? (
                <div className="wrapper">
                    <div className="hero">
                        <Hero></Hero>
                    </div>
                    <div className="divider-1">
                        <img
                            className="divider-image"
                            src={DividerParallax1}
                            alt="Galaxy divider"
                            draggable="false"
                        />
                    </div>
                    <div className="about-me-page">
                        <AboutMe handleShowProjects={handleShowProjects}></AboutMe>
                    </div>
                    <div className="experiences">
                        <Experiences handleShowProjects={handleShowProjects}></Experiences>
                    </div>
                    <div className="divider-2">
                        <img
                            className="divider-image"
                            src={DividerParallax2}
                            alt="UBC divider"
                            draggable="false"
                        />
                    </div>
                </div>
            ) : (
                <Projects></Projects>
            )}
        </div>
    );
}

export default App;
