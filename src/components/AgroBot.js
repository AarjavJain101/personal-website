import React from "react";
import "../styles/AgroBot.css";
import AgroBotLogo from "../images/website.png";
import ContouringImage from "../images/contouring_plants_website.png";
import BoundingBoxImage from "../images/bounding_boxes.png";

const AgroBot = () => {
    return (
        <div className="agrobot">
            <h1 className="agrobot-title">UBC AgroBot: Applied AI Developer</h1>
            <img src={AgroBotLogo} alt="Agro bot logo" className="agrobot-logo" draggable="false" />
            <p className="agrobot-contouring-text">
                As a first year developer at UBC AgroBot I work mainly in Python create practical algorithms
                for image recognition. I am learning OpenCV and machine learning to fulfill my role in
                developing a leaf area estimation model for our robot. My current task is developing a program
                that identifies contours of plants while disregarding weeds.
            </p>
            <img
                src={ContouringImage}
                alt="Contouring Plants"
                className="agrobot-contouring-image"
                draggable="false"
            />
            <p className="crop-detection">
                More recently, I have been working on training a YOLOv8 to perform object detection on plant
                images provided in the 2nd ACRE Cascade Competition. The image below is an example of a
                prediction generated during inference:
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
