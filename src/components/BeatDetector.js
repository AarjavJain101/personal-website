import React from "react";
import "../styles/BeatDetector.css";
import CBeatDetectorGif from "../images/C_Version_I-Won.gif";
import PythonBeatDetectorGif from "../images/Python_Version_I-Won.gif";

const BeatDetector = () => {
    return (
        <div className="beat-detector-container">
            <div className="beat-detector-title">
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://beat-detector.netlify.app/"
                    className="beat-detector-link"
                >
                    <h1 className="beat-detector-title-text">Beat Detector for LED Lights</h1>
                </a>
            </div>
            <div className="beat-detector-content">
                <div className="beat-detector-text">
                    <p className="beat-detector-text-paragraph">
                        Beat detection algorithm to detect bass, claps, and hi-hats in hip-hop/rap music.
                        Python speciality is <strong>synched lyrics</strong>. C\C++ speciality is{" "}
                        <strong>fade effect and creative potential.</strong>
                        <br />
                        <br />
                        The <strong>Python</strong> implementation utilizes <strong>PyAudio</strong>,{" "}
                        <strong>OpenCV</strong>, <strong>Matplotlib</strong>, and <strong>Numpy</strong> to
                        compute the detection. Additionally, the <strong>TKinter</strong> module,{" "}
                        <strong>Spotify API</strong>, and <strong>synched lyrics API</strong> was used to
                        create the Lyrics-Light-Room experience. Note that the data visualization program
                        utilizes <strong>FFmpeg</strong>.
                        <br />
                        <br />
                        The <strong>C/C++</strong> implementation utilizes libraries such as{" "}
                        <strong>portaudio.h</strong>, <strong>fftw3.h</strong>, <strong>windows.h</strong>,
                        and other standard libraries to create a GUI for the light room experience. Credit to{" "}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/rhys-byers-b54162261/"
                            className="rhys-credit"
                        >
                            Rhys Byers
                        </a>{" "}
                        for developing the GUI.
                        <br />
                        <br />
                        The Web Browser implementation was created using <strong>React.js</strong> and{" "}
                        <strong>Web Audio API</strong>, however, does not perform nearly as well as the C++ or
                        Python versions due to parameter constraints by Web Audio API.
                        <br />
                        <br />
                        <strong>
                            Please click on the GIFS to see the github. Click the title to see the website.
                        </strong>
                    </p>
                </div>
                <div className="beat-detector-image-container">
                    <a
                        href="
                        https://github.com/AarjavJain101/Beat-Detector"
                        target="_blank"
                        rel="noreferrer"
                        className="beat-detector-image-links"
                    >
                        <div className="beat-detector-images">
                            <div className="image-container">
                                <img
                                    src={PythonBeatDetectorGif}
                                    alt="Python Beat Detector Terminal"
                                    className="python-gif"
                                    draggable="false"
                                />
                                <div className="image-caption-beat">
                                    <span className="description">
                                        Python Beat Detector with Synced Lyrics
                                    </span>
                                </div>
                            </div>
                            <div className="image-container">
                                <img
                                    src={CBeatDetectorGif}
                                    alt="C Beat Detector Terminal"
                                    className="c-gif"
                                    draggable="false"
                                />
                                <div className="image-caption-beat">
                                    <span className="description">C/C++ Beat Detector with Fade Effect</span>
                                </div>
                            </div>
                        </div>
                        <h4 className="beat-detector-caption">(Click on GIFs)</h4>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BeatDetector;
