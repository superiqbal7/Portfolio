import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Md Rahim Iqbal </span>
            from <span className="purple"> Dhaka, Bangladesh.</span>
            <br /> I am working as a Software Development Engineer - II at Craftsment Ltd..
            <br />
            Additionally, I am currently employed as a part time consultant at
            Supertal Pte Ltd.
            <br />
            <br />
            Apart from coding, some other interest that I have!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading & Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Football
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
