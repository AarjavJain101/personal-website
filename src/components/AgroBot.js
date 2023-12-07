import React from "react";
import "../styles/AgroBot.css";
import SolarLogo from "../images/solar.png";
import AgroBotLogo from "../images/website.png";
import ContouringImage from "../images/contouring_plants_website.png";
import BoundingBoxImage from "../images/bounding_boxes.png";

const AgroBot = () => {
    return (
        <div className="agrobot">
            <div className="solar">
                <h1 className="agrobot-title">UBC Solar: Embedded Systems Engineer</h1>
                <img src={SolarLogo} alt="Solar logo" className="agrobot-logo" draggable="false" />
                <p className="agrobot-contouring-text">
                    As an Embedded Systems Engineer at UBC Solar since September 2023, At UBC Solar, I have
                    worked on both firmware and testing related projects. In particular, I wrote a library to
                    create an abstraction for logging messages on an SD Card. Using C/C++, the STM32Cube IDE,
                    and a Nucleo board, I developed protocols to open, append to, and close files on the SD
                    Card with a FATFS file system. providing essential functions for opening, appending, and
                    closing files on a FATFS file system on an SD card. My library allowed my embedded team
                    and the vehicle dynamics team to have an easy-to-use abstraction at their hands without
                    having to worry about nuances in appending to files on the SD Card. Overall, in the
                    project I sharpened my C/C++ skills, familiarity with debugging in the STM32Cube IDE, and
                    connecting an SPI peripheral.
                </p>
                <p className="agrobot-contouring-text">
                    In terms of my testing project, I developed a Python script to check through a PCAN view
                    log and check for any errors in data or ID's passed. Additionally, my script implements
                    jitter analysis by checking the CAN bus load as a result of the sent messages. This script
                    allowed us to quickly test the received messages from our boards to rapidly develop them
                    as well as provide a flexible test suite. Overall, through this project I learned the
                    standard frame of a CAN message, how interference occurs on the CAN bus, using DBC files,
                    and using the cantools library.
                </p>
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
