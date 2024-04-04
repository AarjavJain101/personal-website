import React from "react";
import "../styles/AgroBot.css";
import SolarLogo from "../images/solar.png";
import AgroBotLogo from "../images/website.png";
import ContouringImage from "../images/contouring_plants_website.png";
import BoundingBoxImage from "../images/bounding_boxes.png";
import SDLoggerImage from "../images/SDLogger.png";
import SunlinkGIF from "../images/sunlink.gif";
import ExampleCANLoad from "../images/example_can_load.png";
import ExampleDebug from "../images/example_debug.png";

const AgroBot = () => {
    return (
        <div className="agrobot">
            <div className="solar">
                <h1 className="agrobot-title">UBC Solar: Embedded Systems Engineer</h1>
                <img src={SolarLogo} alt="Solar logo" className="agrobot-logo" draggable="false" />
                <p className="agrobot-contouring-text">
                    As an Embedded Systems Engineer at UBC Solar since September 2023, At UBC Solar, I have
                    worked on system design, firmware, and automated testing projects.
                </p>
                <p className="agrobot-contouring-text">
                    My recent work was dedicated to designing sunlink, a robust system for collecting,
                    parsing, and storing data from our various peripherals such as CAN, GPS, and the IMU. This
                    involved parsing any type of message received either from our XBee radio module, random
                    message generator, or CAN bus. Furthermore, we chose to store our data on InfluxDB and
                    stream it to Grafana so we can quickly analyze and visualize our measurements as they
                    happen. I also added numerous features such as the ability to specify what data to live
                    stream, randomization of all message types (testing tool), and a custom error message
                    generator for efficient testing. To bring this all together, we sent CAN messages from our
                    Solar car’s battery using a PCAN to a local instance of sunlink (during races we run
                    sunlink on Digital Ocean to have a standard for where our system will run). The result is
                    the video on the right displaying the data on one of our Grafana dashboards and a flurry
                    of pretty printed tables.
                </p>
                <div class="image-container">
                    <img
                        src={SunlinkGIF}
                        alt="Gif of sunlink in action"
                        class="gif-image"
                        draggable="false"
                    />
                    <img
                        src={ExampleDebug}
                        alt="Example debug message from custom exception generator"
                        class="debug-image"
                        draggable="false"
                    />
                </div>
                <p className="agrobot-contouring-text">
                    In terms of FW I wrote a library for logging messages on an SD Card, which we used in our
                    FreeRTOS CAN, GPS, and IMU message transmission tasks. Using C/C++, the STM32Cube IDE, and
                    a Nucleo board, I developed protocols to open, append to, and close files on the SD Card
                    with a FATFS file system. My library allowed my embedded team and the VDX team to easily
                    interact with our SD card without worrying about FATFS system nuances and familiarized me
                    with debugging in STM32Cube IDE and connecting an SPI peripheral.
                </p>
                <img
                    src={SDLoggerImage}
                    alt="Nucleo board connected to SPI peripheral"
                    className="sd-logger"
                    draggable="false"
                />
                <p className="agrobot-contouring-text">
                    Aside from various testing features I implemented on Sunlink, I also wrote an automated
                    PCAN log verifier. Its purpose is to not only validate the data in each of the messages in
                    the log but als to calculate the CAN bus load at different points in time and report any
                    potential bus overload issues. This is crucial for deciding if we can add more CAN
                    messages without maxing out the bitrate of the bus. Furthermore, the test script performed
                    jitter analysis on the log by determining the extent of message delays due to the physical
                    length of the bus and the rules for CAN messages winning arbitration to then be queued on
                    the CAN bus [paper](https://mdh.diva-portal.org/smash/get/diva2:1735813/FULLTEXT01.pdf).
                </p>
                <img
                    src={ExampleCANLoad}
                    alt="Example CAN bus load calculation"
                    className="sd-logger"
                    draggable="false"
                />
            </div>
            <h1 className="agrobot-title">UBC AgroBot: Applied AI Developer</h1>
            <h1 className="agrobot-title-2">January 2023 — May 2023</h1>
            <img src={AgroBotLogo} alt="Agro bot logo" className="agrobot-logo" draggable="false" />
            <p className="agrobot-contouring-text">
                As a first year developer at UBC AgroBot I worked mainly in Python to create practical
                algorithms for image recognition. I learned OpenCV and machine learning to fulfill my role in
                developing a leaf area estimation model for our robot. Specifically, I developed a program
                that identifies contours of plants while disregarding weeds.
            </p>
            <img
                src={ContouringImage}
                alt="Contouring Plants"
                className="agrobot-contouring-image"
                draggable="false"
            />
            <p className="crop-detection">
                Additionally, I have worked on training a YOLOv8 to perform object detection on plant images
                provided in the 2nd ACRE Cascade Competition. The image below is an example of a prediction
                generated during inference:
            </p>
            <img
                src={BoundingBoxImage}
                alt="Crop Detection"
                className="bounding-boxes-image"
                draggable="false"
            />
            <hr className="experiences-line" />
        </div>
    );
};

export default AgroBot;
