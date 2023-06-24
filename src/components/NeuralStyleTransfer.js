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
                concepts I learned was Neural Style Transfer. Using this technique I generated the above
                (middle) image using the two side images ​(left = context image, right = style image). Through
                this project I learned how to define the cost function, optimize it, and implement it in
                python.
            </p>
        </div>
    );
};

export default NeuralStyleTransfer;
