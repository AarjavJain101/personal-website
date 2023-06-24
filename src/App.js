import "./styles/App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import PageOptions from "./components/PageOptions";
import DividerParallax1 from "./images/space.jpg";
import DividerParallax2 from "./images/UBC.png";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";

function App() {
    const [showPageOption, setShowPageOptions] = useState(false);

    const handlePageOptions = () => {
        setShowPageOptions(!showPageOption);
    };

    return (
        <Router>
            <div className="App">
                <PageOptions
                    showPageOptions={showPageOption}
                    handlePageOptions={handlePageOptions}
                ></PageOptions>
                <div className="header">
                    <Header showPageOptions={showPageOption} handlePageOptions={handlePageOptions}></Header>
                </div>
                <Routes>
                    <Route
                        exact
                        path="/personal-website/"
                        element={
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
                                    <AboutMe></AboutMe>
                                </div>
                                <div className="experiences">
                                    <Experiences></Experiences>
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
                        }
                    ></Route>
                    <Route path="/projects" element={<Projects></Projects>}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
