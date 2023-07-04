import React from "react";
import "../styles/AboutMe.css";
import Leader from "../images/leader.png";
import Learner from "../images/Learner.png";
import profilePicture from "../images/Profile_Picture.jpg";

const AboutMe = (props) => {
    const { handleShowProjects } = props;

    return (
        <div className="about-me">
            <div className="about-me-title-container">
                <h1 className="about-me-title-text">About Me</h1>
            </div>
            <hr className="about-me-line" />
            <div className="about-me-info">
                <div className="about-me-images">
                    <div className="about-me-leader">
                        <img className="about-me-leader-image" src={Leader} alt="Leader" draggable="false" />
                        <h3 className="subheading">I am a Mentor</h3>
                    </div>
                    <div className="about-me-profile-picture">
                        <img
                            className="about-me-profile-picture-image"
                            src={profilePicture}
                            alt="Aarjav headshot"
                            draggable="false"
                        />
                    </div>
                    <div className="about-me-learner">
                        <img
                            className="about-me-learner-image"
                            src={Learner}
                            alt="Learner"
                            draggable="false"
                        />
                        <h3 className="subheading">I am an avid Learner</h3>
                    </div>
                </div>
                <div className="about-me-text">
                    <p className="about-me-leader-text">
                        From experience gained as an Air Cadet to various volunteering oppurtunities, I strive
                        to bring out the best in myself and others because doing so produces mutual growth.
                        This means working diligently as a role model and being a reliable source for my
                        peers.
                    </p>
                    <p className="about-me-profile-picture-text">
                        Hey! <strong>I am Aarjav Jain</strong>, a student at UBCV. Whether its in my academics
                        or personal life I always aspire to tackle challenges I set for myself. From creating
                        personal projects in Python, C/C++, and React.js to working with my design team (UBC
                        AgroBot) on our Convolutional Neural Network and other projects, I strive to expand my
                        knowledge in the computer engineering world. Overall, I desire to use my critical
                        thinking skills, resiliency, and innovative nature to push myself and others. So far
                        in my programming journey,
                        <strong> I have created projects with UBC AgroBot and on the Projects page!</strong>
                        <br />
                        <button
                            type="button"
                            className="projects-button"
                            onClick={() => {
                                handleShowProjects();
                            }}
                        >
                            Projects
                        </button>
                    </p>
                    <p className="about-me-learner-text">
                        If I am not studying then I enjoy learning languages, programming (currently React.js
                        and other Web Development), or teaching myself future math and physics course content.
                        In doing so I can continue learning and aim for academic excellence!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
