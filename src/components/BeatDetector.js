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
                        First I developed a Python version to prototype with algorithms and also to add <strong>synched lyrics</strong>.
                        The <strong>Python</strong> implementation utilizes <strong>PyAudio</strong>,{" "}
                        <strong>Matplotlib for live debugging and testing</strong>, and <strong>Numpy</strong> to
                        compute the detection. Additionally, the <strong>TKinter</strong> module,{" "}
                        <strong>Spotify API</strong>, and <strong>synched lyrics API</strong> was used to
                        create the Lyrics-Light-Room experience. The data visualization program
                        utilizes <strong>FFmpeg</strong> to create a video of all the frames of data collected when running tests.
                        <br />
                        <br />
                        I then created a C\C++ distributable version that gives me more freedom on the GUI end to add a
                        <strong>fade effect and other creative potential.</strong> The <strong>C/C++</strong> implementation utilizes libraries such as{" "}
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
                        To do this, I created an LED abstraction layer to handle the <strong>PWM</strong> signal needed to interface with the strip. 
                        Additionally, I used an <strong>Adafruit I2S MEMS microphone (SPH0645LM4H)</strong> to get the audio data 
                        and used a <strong>DMA</strong> to offload the CPU from always doing memory operations to read in audio data. 
                        Now the <strong>M5 core</strong> has more clock cycles to perform my beat detection algorithm on every 2048 audio sample chunk, 
                        notably using <strong>ARM math libraries</strong> to perform the FFT.
                        Finally, to further improve the algorithm and to visualize the debugging process, 
                        I configured a <strong>UART</strong> peripheral which goes through an <strong>Adafruit UART to USB converter</strong> into my computer. 
                        From here, I use Python's <strong>Pyserial</strong>, <strong>Matplotlib</strong>, and <strong>Numpy</strong> libraries to perform data analysis. 

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
                                <div className="image-caption-beat">
                                    <span className="description">
                                        Python Beat Detector with Synced Lyrics
                                    </span>
                                </div>
                            </div>
                            <div className="image-container">
                                <img
                                    src={LEDDetectorGif}
                                    alt="LED Detector"
                                    className="c-gif"
                                    draggable="false"
                                />
                                <div className="image-caption-beat">
                                    <span className="description">Embedded Beat Detector with WS2812B LEDs</span>
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
