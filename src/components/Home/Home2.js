import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaDev } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I am a software development engineer with several years of experience working with a variety of languages and technologies, especially in the web stack… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Node.js, </b>
                React,
                <b className="purple"> Javascript, </b>
                Typescript, 
                <b className="purple"> and Go. </b>
              </i>
              <br />
              <br />
              I've been designing and building &nbsp;
              <i>
                <b className="purple">backend services, cloud native solutions and web applications </b> and
                also fiddling with{" "}
                <b className="purple">
                  Distributed systems, Cloud, DevOps and Kubernetes.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with with <b className="purple">microservice architecture, distributed systems, serverless</b>, scaling with cost reduction in mind, mentoring, and establishing engineering organizations with a culture aligned with corporate objectives are some of the fields that attract me.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
              <a
                href="https://dev.to/superiqbal7"
                target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
              >
                <FaDev />
              </a>
            </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/superiqbal7/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/superiqbal7"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
