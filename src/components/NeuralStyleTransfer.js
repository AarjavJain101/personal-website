import React from "react";
import "../styles/NeuralStyleTransfer.css";
import NSTImage from "../images/nst.png";

const NeuralStyleTransfer = () => {
    return (
        <div className="nst-container">
            <div className="nst-title">
                <h2 className="nst-title-text">Neural Style Transfer</h2>
            </div>
            <img src={NSTImage} alt="Neural Style Trasnfer" className="nst-image" draggable="false" />
            <p className="nst-text">
                Through the Convolutional Neural Networks course offered by DeepLearning AI, one of the many
                concepts I learned was <strong>Neural Style Transfer</strong>. Using this technique I
                generated the (middle) image using the two side images ​(left = context image, right = style
                image). This was done using a{" "}
                <strong>
                    loss function defined based on a pre-trained VGG-19 CNN and then optimized in Python
                </strong>{" "}
                to obtain the most closely related image possible.
            </p>
        </div>
    );
};

export default NeuralStyleTransfer;
