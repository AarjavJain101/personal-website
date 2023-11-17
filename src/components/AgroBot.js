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
                    As an Embedded Systems Engineer at UBC Solar since September 2023, I have developed the
                    firmware for our MCB, AMB, DID, and TEL boards. Through my experience I gained proficiency
                    in C/C++ and with using the STM32Cube IDE. In terms of RTOS, I learned and implemented
                    various firmware using FreeRTOS for storing data in our SD card logger on our Solar Car.
                    Also, I am to continuously expand my skill set by actively learning CAN bus communication
                    protocols, the PCAN software, and using and writing DBC files. In addition to firmware, I
                    created a Python script using the cantools library, to provide a flexible and robust
                    method for rapid unit testing of our PCBs. Overall, my role as an Embedded Systems
                    Engineer at UBC Solar enabled me to contribute to our solar car's embedded systems in our
                    solar car and to learn C/C++, Python, STM32Cube IDE, FreeRTOS, and CAN communication.
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
