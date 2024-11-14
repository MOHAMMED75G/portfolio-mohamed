import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import hexapod from "../assets/projects/hexapod.png";
import multiprotocol from "../assets/projects/multiprotocol.png";
import wanderz from "../assets/projects/wanderz.png";
import livret from "../assets/projects/livret.png";
import robopay from "../assets/projects/robopay.png";
import lineFollower from "../assets/projects/linefollower.png";
import crypto from "../assets/projects/crypto.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the significant projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hexapod}
              isBlog={false}
              title="Hexapod Robot"
              description="Developed a six-legged hexapod robot capable of traversing various terrains and performing automated delivery tasks. Integrated a Raspberry Pi for central control and an Arduino Mega for precise leg movement, with remote control facilitated by a Flutter app."
              ghLink="https://github.com/MOHAMMED75G/hexapod-robot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={multiprotocol}
              isBlog={false}
              title="Multi-Protocol Communication in Rust"
              description="Implemented UART, SPI, and BLE protocols for the nRF52832 microcontroller in Rust. Enabled seamless data exchange across devices, improving embedded system interoperability and real-time data processing."
              ghLink="https://github.com/MOHAMMED75G/multi-protocol-communication"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wanderz}
              isBlog={false}
              title="Wanderz for Partners Website"
              description="Developed a dynamic, responsive frontend for Wanderz’s partner platform using React.js. Enhanced user experience through interactive components and adaptive design."
              ghLink="https://github.com/MOHAMMED75G/wanderz-partner-platform"
              demoLink="https://wanderz-partners.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={livret}
              isBlog={false}
              title="Digital Livret"
              description="Developed a web application using React.js, Node.js, and MongoDB to create a digital booklet allowing clients to share information with customers by scanning a QR code."
              ghLink="https://github.com/MOHAMMED75G/digital-livret"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={robopay}
              isBlog={false}
              title="ROBOPAY"
              description="Created an interactive website that uses machine learning to automatically detect the value of money in payment photos, using React.js for the frontend."
              ghLink="https://github.com/MOHAMMED75G/robopay"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lineFollower}
              isBlog={false}
              title="Line Follower Robot TESLA"
              description="Designed and built a line-following robot for competitions. Used PID control for stability and accuracy to create a robot capable of navigating challenging courses with precision."
              ghLink="https://github.com/MOHAMMED75G/line-follower-tesla"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto}
              isBlog={false}
              title="Crypto-Monnaies Website"
              description="Developed a cryptocurrency price prediction website using React.js for the frontend, Flask for the backend, and a deep learning model for predictions."
              ghLink="https://github.com/MOHAMMED75G/crypto-monnaies"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
