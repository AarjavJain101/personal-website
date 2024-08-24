import React from "react";
import "../styles/BeatDetector.css";
import CBeatDetectorGif from "../images/C_Version_I-Won.gif";
import PythonBeatDetectorGif from "../images/Python_Version_I-Won.gif";
import LEDDetectorGif from "../images/LED_Detector.gif";

const BeatDetector = () => {
    return (
        <div className="beat-detector-container">
            <div className="beat-detector-title">
                {/* <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://beat-detector.netlify.app/"
                    className="beat-detector-link"
                >
                    <h1 className="beat-detector-title-text">Beat Detector for LED Lights</h1>
                </a> */}
                <h1 className="beat-detector-title-text">Beat Detector for LED Lights</h1>
            </div>
            <div className="beat-detector-content">
                <div className="beat-detector-text">
                    <p className="beat-detector-text-paragraph">
                        Beat detection algorithm to detect bass, claps, and hi-hats in hip-hop/rap music. 
                        First developed in Python to prototype algorithms and for  <strong>synched lyrics</strong>.
                        Utilizes <strong>PyAudio</strong>,{" "}
                        <strong>Matplotlib</strong> for live testing, <strong>Numpy</strong>, <strong>TKinter</strong> for GUI.{" "}
                        <strong>Spotify</strong>, and <strong>synched lyrics</strong> API for the 'Lyrics-Light-Room' experience.
                        <br />
                        <br />
                        A 5MB C\C++ distributable version was to unlock creative potential on the GUI end for
                        <strong>fade effects.</strong> The <strong>C/C++</strong> implementation utilizes libraries such as{" "}
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
                        for helping to develop the GUI.
                        <br />
                        <br />
                        I then had hopes to make my project more accessible by creating a web browser version.
                        To do this I used <strong>React.js</strong> and{" "}
                        <strong>Web Audio API</strong>, however, Web Audio API's parameter constraints made it
                        overly difficult to make the algorithm perform anywhere as well as the C++ or Python versions.
                        <br />
                        <br />
                        Finally, I used an <strong>STM32F407G-DISC1</strong> to flash a <strong>WS2812B LED strip</strong>. 
                        To do this, I controlled the LEDs with a <strong>PWM</strong> signal, read audio data with an 
                        <strong>Adafruit I2S MEMS microphone (SPH0645LM4H)</strong>. Also using <strong>DMA</strong> to offload the CPU. 
                        A <strong>UART</strong> peripheral was used with an <strong>Adafruit UART to USB A converter</strong> into my computer for Python's 
                        visualization and data analysus.
                        <br />
                        <br />
                        <strong>Please click on the GIFs to see the STM32 Project's GitHub.</strong>

                    </p>
                </div>
                <div className="beat-detector-image-container">
                    <a
                        href="
                        https://github.com/AarjavJain101/STM32F407G_DISCO_Beat_Detector"
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
                                {/* <div className="image-caption-beat">
                                    <span className="description">
                                        Python Beat Detector with Synced Lyrics
                                    </span>
                                </div> */}
                            </div>
                            <div className="image-container">
                                <img
                                    src={LEDDetectorGif}
                                    alt="LED Detector"
                                    className="c-gif"
                                    draggable="false"
                                />
                                {/* <div className="image-caption-beat">
                                    <span className="description">Embedded Beat Detector with WS2812B LEDs</span>
                                </div> */}
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BeatDetector;
