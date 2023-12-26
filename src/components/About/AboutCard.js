import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  const sectionTitleStyle = {
    // fontWeight: "bold",
    // fontSize: "1.2em",
    color: "#6A5ACD",
    textAlign: "left",
    marginLeft: 0,
    marginTop: 20
  };

  const experienceItemStyle = {
    listStyleType: "none",
    marginBottom: "16px",
  };

  const techColor = "#B0C4DE"; // Programming Tools
  const webTechColor = "#F5FFFA"; // Web Technologies
  const dbColor = "#B0C4DE"; // Database
  const cloudColor = "#F5FFFA"; // Cloud Providers
  const infraColor = "#B0C4DE"; // Infrastructure Provisioning
  const logsColor = "#F5FFFA"; // Logs Management

  const buttonStyle = {
    display: "inline-block",
    padding: "6px 12px",
    margin: "4px",
    borderRadius: "20px",
    border: "1px solid #ccc",
    backgroundColor: "#f8f9fa", // Background color
    color: "#333", // Text color
  };

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", lineHeight: "1.6" }}>
            Hi, I am <span className="purple">Md Rahim Iqbal.</span> I'm a Software Development Engineer based in <span className="purple">Australia,</span> with 4 years of experience working in the media industry, project management systems, financial service industry, and health tech. I am skilled in designing and building backend services and web applications using a range of technology stacks.
          </p>
          <p style={{ textAlign: "justify", lineHeight: "1.6" }}>
            My areas of interest include:
          </p>
          <ul>
            <div style={{ ...sectionTitleStyle, marginBottom: "8px" }}>Programming Tools</div>
            <li className="about-activity" style={{ color: techColor }}>
              <span style={{ ...buttonStyle, backgroundColor: techColor }}>Node.js</span>{" "}
              <span style={{ ...buttonStyle, backgroundColor: techColor }}>Nest.js</span>{" "}
              <span style={{ ...buttonStyle, backgroundColor: techColor }}>Golang</span>{" "}
              <span style={{ ...buttonStyle, backgroundColor: techColor }}>Typescript</span>{" "}
              <span style={{ ...buttonStyle, backgroundColor: techColor }}>React.js</span>{" "}
              <span style={{ ...buttonStyle, backgroundColor: techColor }}>Javascript</span>
            </li>
            <div style={{ ...sectionTitleStyle, marginBottom: "8px" }}>Web Technologies</div>
            <li className="about-activity" style={{ color: webTechColor }}>
              <span style={{ ...buttonStyle, backgroundColor: webTechColor }}>Docker</span>{" "}
              <span style={{ ...buttonStyle, backgroundColor: webTechColor }}>Kubernetes</span>{" "}
              <span style={{ ...buttonStyle, backgroundColor: webTechColor }}>Nats</span>{" "}
              <span style={{ ...buttonStyle, backgroundColor: webTechColor }}>Kafka</span>{" "}
              <span style={{ ...buttonStyle, backgroundColor: webTechColor }}>SQS</span>{" "}
              <span style={{ ...buttonStyle, backgroundColor: webTechColor }}>Rabbitmq</span>{" "}
              <span style={{ ...buttonStyle, backgroundColor: webTechColor }}>Rest API</span>{" "}
              <span style={{ ...buttonStyle, backgroundColor: webTechColor }}>gRPC</span>{" "}
              <span style={{ ...buttonStyle, backgroundColor: webTechColor }}>Git</span>{" "}
              <span style={{ ...buttonStyle, backgroundColor: webTechColor }}>Github</span>{" "}
              <span style={{ ...buttonStyle, backgroundColor: webTechColor }}>CI/CD</span>{" "}
              <span style={{ ...buttonStyle, backgroundColor: webTechColor }}>JEST</span>
            </li>
            <div style={{ ...sectionTitleStyle, marginBottom: "8px" }}>Database</div>
            <li className="about-activity" style={{ color: dbColor }}>
              <span style={{ ...buttonStyle, backgroundColor: dbColor }}>Dynamodb</span>{" "}
              <span style={{ ...buttonStyle, backgroundColor: dbColor }}>MongoDB</span>{" "}
              <span style={{ ...buttonStyle, backgroundColor: dbColor }}>PostgreSQL</span>{" "}
              <span style={{ ...buttonStyle, backgroundColor: dbColor }}>Redis</span>{" "}
              <span style={{ ...buttonStyle, backgroundColor: dbColor }}>MySQL</span>{" "}
              <span style={{ ...buttonStyle, backgroundColor: dbColor }}>Prisma</span>{" "}
              <span style={{ ...buttonStyle, backgroundColor: dbColor }}>Sequelize</span>
            </li>
            <div style={{ ...sectionTitleStyle, marginBottom: "8px" }}>Cloud Providers</div>
            <li className="about-activity" style={{ color: cloudColor }}>
              <span style={{ ...buttonStyle, backgroundColor: cloudColor }}>AWS</span>{" "}
              <span style={{ ...buttonStyle, backgroundColor: cloudColor }}>GCP</span>
            </li>
            <div style={{ ...sectionTitleStyle, marginBottom: "8px" }}>Infrastructure Provisioning</div>
            <li className="about-activity" style={{ color: infraColor }}>
              <span style={{ ...buttonStyle, backgroundColor: infraColor }}>Terraform</span>
            </li>
            <div style={{ ...sectionTitleStyle, marginBottom: "8px" }}>Logs Management</div>
            <li className="about-activity" style={{ color: logsColor }}>
              <span style={{ ...buttonStyle, backgroundColor: logsColor }}>Elastic Search</span>{" "}
              <span style={{ ...buttonStyle, backgroundColor: logsColor }}>Fluentd</span>
            </li>
          </ul>
          <p style={{ textAlign: "justify", lineHeight: "1.6" }}>
            Apart from coding, some other interests that I have!
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
          <p style={{ textAlign: "justify", lineHeight: "1.6" }}>
            I am open to collaborating on software projects and social welfare organizations and can be reached at <span className="purple">mdrahimiqbal7@gmail.com</span>. Let's connect and see how we can work together to create something great!
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
