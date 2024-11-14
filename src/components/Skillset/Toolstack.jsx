import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiAndroidstudio,
  SiLinux,
  SiWindows,
  SiGithub,
} from "react-icons/si";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      {/* Placeholder for Altium 
      <Col xs={4} md={2} className="tech-icons">
       
        <img
          src="https://e7.pngegg.com/pngimages/194/758/png-clipart-altium-designer-printed-circuit-board-pcb-computer-software-eagle-electronics-animals-thumbnail.png"
          alt="Altium"
          style={{ width: "60px", height: "60px" }}
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
  
        <img
        
          src="https://wiki.stmicroelectronics.cn/stm32mpu/nsfr_img_auth.php/e/e2/ST16333_Label_STM32CubeMX.png"
          alt="CubeMX"
          style={{ width: "60px", height: "60px" }}
        />
      </Col>*/}
    </Row>
  );
};

export default Toolstack;
