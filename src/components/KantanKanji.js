import React from "react";
import KKImage from "../images/Kanji_repl_icon.png";
import GitHubImage from "../images/github.png";
import "../styles/KantanKanji.css";

const KantanKanji = () => {
    return (
        <div className="kk-wrapper">
            <div className="kk-title">
                <h1 className="kk-title-text">KanTan Kanji</h1>
            </div>
            <div className="kk-content">
                <div className="kk-text">
                    <p className="kk-text-paragraph">
                        ​In my first version of KANTAN Kanji, I created a terminal-run program which provides
                        an opportunity to review Japanese Kanji. I was motivated to make this project because
                        I wanted to satisfy a need that was not met by the current app I use for learning
                        Japanese (called WaniKani).{" "}
                        <strong>
                            In the process of developing this program I learned much about C and what makes an
                            effective reviewing application.
                        </strong>{" "}
                        Click on either image to visit my project on Replit.
                    </p>
                </div>
                <div className="kk-image-container">
                    <a
                        href="
                        https://github.com/AarjavJain101/KANTAN-Kanji"
                        target="_blank"
                    >
                        <img src={KKImage} alt="Kantan Kanji Logo" className="kk-image" draggable="false" />
                    </a>
                    <h4 className="image-caption">(Click on image)</h4>
                </div>
            </div>
            <div className="github-container">
                <hr className="kk-line" />
                <a
                    href="
                        https://github.com/AarjavJain101"
                    target="_blank"
                >
                    <img src={GitHubImage} alt="GitHub" className="github-image" draggable="false" />
                </a>
                <h4 className="github-caption">(Click image to view my GitHub!)</h4>
            </div>
        </div>
    );
};

export default KantanKanji;
