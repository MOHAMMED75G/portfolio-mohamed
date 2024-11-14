import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, my name is <span className="yellow">Mohamed Gharab</span>
              , and I'm from <span className="yellow">Tunisia.</span>
              <br />
              <br />
              I am currently pursuing a Master's Degree in Smart Systems and IoT at the 
              <span className="yellow"> National School of Computer Science (ENSI).</span>
              <br />
              <br />
              As a
              <b className="yellow"> Full-Stack Developer </b> and Embedded Systems Engineer,
              I specialize in building cutting-edge solutions for diverse applications.
              <br />
              <br />
              My technical expertise includes
              <b className="yellow"> Rust, C/C++, JavaScript, Python, </b>
              and frameworks such as React.js, Node.js, and Flutter.
              <br />
              <br />
              I have hands-on experience with
              <b className="yellow"> embedded systems </b>
              such as nRF52, ESP32, and STM32, focusing on
              <b className="yellow"> UART, SPI, and BLE </b> protocols.
              <br />
              <br />
              I enjoy exploring new technologies and working on
              <i>
                <b className="yellow"> innovative projects </b>
                in areas like robotics, IoT, and web development.
              </i>
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={LaptopImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Please feel free to <span className="yellow">connect</span> with me.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:mohamed.gharab@ensi-uma.tn"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="email"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/MOHAMMED75G"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/mohamed-gharab-4a4b0825a"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
