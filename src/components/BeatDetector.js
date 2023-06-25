import React from "react";
import "../styles/BeatDetector.css";
import BeatDetectorImage from "../images/Beat_detector.png";

const BeatDetector = () => {
    return (
        <div className="beat-detector-container">
            <div className="beat-detector-title">
                <h1 className="beat-detector-title-text">Beat Detector for LED Lights</h1>
            </div>
            <div className="beat-detector-content">
                <div className="beat-detector-text">
                    <p className="beat-detector-text-paragraph">
                        This is a python program that detects bass and claps in music. I created and tested my
                        algorithm (not using CNN's or other machine learning) using rap and hip-hop music.
                        <br></br>
                        <br></br>
                        The goal with this detector is to use its algorithm to control LED's s that they
                        reliably flow with the music. Current music tracking LED's such as Govee lights seem
                        inconsistent in their detection and do not provide interesting color changes.{" "}
                        <br></br>
                        <br></br>
                        Please click on the image for a sample and more information
                    </p>
                </div>
                <div className="beat-detector-image-container">
                    <a
                        href="
                        https://github.com/AarjavJain101/Bass-Detector"
                        target="_blank"
                    >
                        <img
                            src={BeatDetectorImage}
                            alt="Beat Detector Terminal"
                            className="beat-detector-image"
                            draggable="false"
                        />
                    </a>
                    <h4 className="image-caption-beat">(Click on image)</h4>
                </div>
            </div>
        </div>
    );
};

export default BeatDetector;
