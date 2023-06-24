import React from "react";
import "../styles/DFFT.css";
import DFFTImage from "../images/DFFT_replit_icon.png";

const DFFT = () => {
    return (
        <div className="dfft-wrapper">
            <div className="dfft-title">
                <h1 className="dfft-title-text">My Discrete Fast Fourier Transform Algorithm</h1>
            </div>
            <div className="dfft-content">
                <div className="dfft-image-container">
                    <a
                        href="
                        https://github.com/AarjavJain101/DFFT-and-Convolution"
                        target="_blank"
                    >
                        <img src={DFFTImage} alt="DFFT icon" className="dfft-image" draggable="false" />
                    </a>
                    <h4 className="image-caption">(Click on image)</h4>
                </div>
                <div className="dfft-text">
                    <p className="dfft-text-paragraph">
                        ​This program contains algorithms to compute the DFT, DFFT, Inverse DFFT, and
                        convolution using DFFT's. The two-fold goal of this project was to learn the
                        mathematical concept of Fourier Transformations in a discrete and analytic sense, as
                        well as learn more about C. To visit my month-long Fourier journey click on either
                        image or check out my GitHub!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DFFT;
