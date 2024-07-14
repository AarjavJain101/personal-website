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
import HappyAarjav from "../images/happy_aarjav.png";
import GrafanaGoodData from "../images/grafana_good_data.png";
import SolarCar from "../images/solar_car.png";

const AgroBot = () => {
    return (
        <div className="agrobot">
            <div className="solar">
                <h1 className="agrobot-title">UBC Solar</h1>
                <img src={SolarLogo} alt="Solar logo" className="agrobot-logo" draggable="false" />
                <h2 className="agrobot-title-2">Embedded Systems Tead Lead (June 2024 - Present)</h2>
                <p className="agrobot-contouring-text">
                    As the Embedded Systems Team Lead I organize, manage, and oversee our team projects such integrating the
                    Xbee Radio API Diagnoistics Mode. Also, to maintain a readable and scalable code-base as well as improve our member's embedded skills, I 
                    review and approve all PR's to reduce production bugs in our firmware and to provide feedback on bettering our system. 
                    Some projects we plan on completeing this year are refactoring and optimizing Sunlink to use Rust, migrating from Grafana to a real-time (1ms refresh)
                    data visualization tool, improving our hardware to use multicore ARM Cortex processors, 
                    potentially switching our communications from CAN to EtherCan, migrating from monday.com to Jira (for its advanced search and management features),
                    and many more.
                </p>
                <img
                        src={SolarCar}
                        alt="Solar Car in the Sun"
                        class="happy-aarjav-image"
                        draggable="false"
                />
                <h2 className="agrobot-title-2">Embedded Systems Engineer (September 2023 - June 2024)</h2>
                <p className="agrobot-contouring-text">
                    As an Embedded Systems Engineer at UBC Solar I have
                    worked on desiging our telemetry system both on our Python backend and our firmware side, 
                    integrating a high time resolution data logger (Kvaser Memorator Pro 2xHs v2), 
                    various other Embedded C and Python related projects. 
                    Below is a picture of me calibrating our Main Control Board's ADC reading from the pedal to determine a natural acceleration curve 
                    for our drivers: 
                </p>
                <img
                        src={HappyAarjav}
                        alt="Picture of Aarjav working on pedal on Solar Car"
                        class="happy-aarjav-image"
                        draggable="false"
                />
                <p className="agrobot-contouring-text">
                    My recent work was dedicated to designing and improving our telemetry system. This includes sunlink, a robust system for collecting,
                    parsing, and storing data from our various peripherals such as CAN, GPS, and the IMU. This
                    involved parsing any type of message received either from our XBee radio module, random
                    message generator, or CAN bus. Furthermore, we chose to store our data on InfluxDB and
                    stream it to Grafana so we can quickly analyze and visualize our measurements as we are driving. 
                    Below is a small example of our Pack Current reaching negative values which indicates Regen Braking! 
                </p>
                <img
                        src={GrafanaGoodData}
                        alt="Good data we got on Grafana when racing"
                        class="happy-aarjav-image"
                        draggable="false"
                />
                    
                <p className="agrobot-contouring-text">
                    I also added numerous features such as the ability to specify what data to live
                    stream, randomization of all message types (testing tool), a custom error message
                    generator for efficient testing, and many others. To bring this all together, we sent CAN messages from our
                    Solar car’s battery using a PCAN to a local instance of sunlink (during production we run
                    sunlink on a main server in our Vancouver workspace to have a standard for where our system will run). The result is
                    the video on the right displaying the data on one of our Grafana dashboards and a flurry
                    of pretty printed tables.
                </p>
                <div class="image-container">
                    <img
                        src={ExampleDebug}
                        alt="Example debug message from custom exception generator"
                        class="debug-image"
                        draggable="false"
                    />
                    <img
                        src={SunlinkGIF}
                        alt="Gif of sunlink in action"
                        class="gif-image"
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
                    the CAN bus{" "}
                    <a
                        href="https://mdh.diva-portal.org/smash/get/diva2:1735813/FULLTEXT01.pdf"
                        class="paper-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        (paper)
                    </a>
                    .
                </p>
                <img
                    src={ExampleCANLoad}
                    alt="Example CAN bus load calculation"
                    className="can-load-image"
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
        </div>
    );
};

export default AgroBot;
