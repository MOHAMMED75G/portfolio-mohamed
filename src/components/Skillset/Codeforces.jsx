import React from "react";
import ReactMarkdown from 'react-markdown';
import { Row } from "react-bootstrap";

const Codeforces = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <strong className="yellow">Codeforces</strong> Stat
      </h1>
      <ReactMarkdown>![Codeforces Stats](https://codeforces-readme-stats.vercel.app/api/card?username=mohammed_gharab)   </ReactMarkdown>
    </Row>
  );
}

export default Codeforces;
