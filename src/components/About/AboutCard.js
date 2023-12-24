import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Md Rahim Iqbal </span>
            I'm a software engineer based in <span className="purple"> New South Wales, Australia.</span>
            {/* <br /> I am working as a Software Developer Engineer - II at Craftsmen Ltd. */}
            <br />
            Apart from coding, some other interest that I have!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
            <li className="about-activity">
              <ImPointRight /> Classic Musics
            </li>
            <li className="about-activity">
              <ImPointRight /> Soccer
            </li>
          </ul>

          <p style={{ textAlign: "justify" }}>I am open to collaborating on software projects and social welfare organizations and can be reached at <span className="purple">mdrahimiqbal7@gmail.com</span>. Let's connect and see how we can work together to create something great!</p>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer"></footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
