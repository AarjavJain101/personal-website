import React from "react";
import BeatDetector from "./BeatDetector";
import NeuralStyleTransfer from "./NeuralStyleTransfer";
import DFFT from "./DFFT";
import KantanKanji from "./KantanKanji";
import "../styles/Projects.css";
import DividerParallax3 from "../images/images.png";
import DividerParallax4 from "../images/DFFT.png";
import DividerParallax5 from "../images/KANTAN_Kanji_LOGO.png";

const Projects = () => {
    return (
        <div className="projects-container">
            <div className="heading">
                <h1 className="heading-text">Personal Projects</h1>
            </div>
            <BeatDetector></BeatDetector>
            <div className="projects-divider-1">
                <img
                    className="divider-image"
                    src={DividerParallax3}
                    alt="Neural Style Transfer divider"
                    draggable="false"
                />
            </div>
            <div className="nst-container">
                <NeuralStyleTransfer></NeuralStyleTransfer>
            </div>
            <div className="projects-divider-2">
                <img className="divider-image" src={DividerParallax4} alt="DFFT divider" draggable="false" />
            </div>
            <div className="dfft-container">
                <DFFT></DFFT>
            </div>
            <div className="projects-divider-3">
                <img
                    className="divider-image"
                    src={DividerParallax5}
                    alt="KanTan Kanji divider"
                    draggable="false"
                />
            </div>
            <div className="kk-container">
                <KantanKanji></KantanKanji>
            </div>
        </div>
    );
};

export default Projects;
