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
                        I have always been a mentor for others. Early in high school as an Air Cadet 
                        to being the Electrical Director at UBC Solar, I strive
                        to bring out the best in myself and others. <strong>"If you want to go fast, go alone;
                        if you want to go far, go together"</strong>. I want my team and I to go far. 
                    </p>
                    <p className="about-me-profile-picture-text">
                        Hey! <strong>I am Aarjav Jain</strong>, a computer engineer studying at UBCV. Whether
                        its in my academics or personal life I enjoy tackling challenges I set for myself. Most notably I love 
                        working on my design team, UBC Solar, because its the perfect place for challenging yourself to your limits. 
                        Overall, I desire to use my critical thinking
                        skills, resiliency, and innovative nature to push myself and others. View my projects
                        so far on the Projects page!
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
                        I see the time until 2027's competition as a rare, self-directed challenge. 
                        A chance to forge my own path and push my limits. As such I
                        treat UBC Solar <strong>like a startup</strong>.
                        So, my priority is to <strong>learn how to build a high-performing team that will go to World Solar Challenge one day.</strong>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
