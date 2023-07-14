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
                        Beat detection algorithm to detect bass, claps, and hi-hats in hip-hop/rap music.
                        <br />
                        <br />
                        The <strong>Python</strong> implementation utilizes <strong>PyAudio</strong>,{" "}
                        <strong>OpenCV</strong>, and <strong>Matplotlib</strong>, and <strong>Numpy</strong>{" "}
                        to perform and display the detection. Additionally, the <strong>TKinter</strong>{" "}
                        module is used to create the Lightroom experience. Note that the program which creates
                        videos utilizes <strong>FFmpeg</strong>.
                        <br />
                        <br />
                        The <strong>C/C++</strong> implementation utilizes libraries such as{" "}
                        <strong>portaudio.h</strong> and <strong>fftw3.h</strong> among other standard
                        libraries.
                        <br />
                        <br />
                        The Web Browser implementation was created using <strong>React.js</strong> and{" "}
                        <strong>Web Audio API</strong>, however, does not perform as well as the C++ or Python
                        versions due to parameter constraints by Web Audio API.
                        <br />
                        <br />
                        Please click on the image to see the web version. From there access the github.
                    </p>
                </div>
                <div className="beat-detector-image-container">
                    <a
                        href="
                        https://beat-detector.netlify.app/"
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
