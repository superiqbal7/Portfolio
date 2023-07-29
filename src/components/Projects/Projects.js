import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import meed from "../../Assets/Projects/meed.webp";
import bscdp from "../../Assets/Projects/bscdp.png";
import dina from "../../Assets/Projects/dinar.webp";
import offsight from "../../Assets/Projects/offsight2.png";
import persib from "../../Assets/Projects/persib.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dina}
              isBlog={false}
              title="Dina"
              description="Dina is a cloud-native story-centric rundown tool and newsroom system that checks off all you need for a modern newsroom workflow tool including Story planning, creation, collaboration, and go-live in one unified tool."
              demoLink="https://7mountains.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={offsight}
              isBlog={false}
              title="Offsight"
              description="Manufacturing project management software for the offsite construction & building products industry. Offsight helps solve the delivery, quality, traceability and communication challenges of offsite construction and project-based manufacturing with our easy to use manufacturing project management software."
              demoLink="https://www.offsight.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bscdp}
              isBlog={false}
              title="BSCDP"
              description="BSCDP is the first customer data platform that enables pharmaceutical companies to market their products in a targeted and compliant way with a much better understanding of their stakeholders to provide personalized content and services at the right time of the customer journey."
              demoLink="https://brainstation-51.com/bscdp/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={persib}
              isBlog={false}
              title="PERSIB Football Club"
              description="A comprehensive web-based platform for Persib Football Club, offering real-time match media, ticket and kit purchases, and a fanzone for supporters to engage and stay updated."
              demoLink="https://persib.co.id/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meed}
              isBlog={false}
              title="Meed Banking Club"
              description="Meed is a digital banking club, which is giving seamless mobile banking experience with convenient money management, goal-oriented savings, and secure transactions."
              demoLink="https://play.google.com/store/apps/details?id=com.prod.meedbankingclub&hl=en&gl=US&pli=1"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
