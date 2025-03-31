
import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ashish Bisht </span>
            from <span className="purple"> UttarPradesh, India.</span>
            <br />
            I am an Infrastructure Support Engineer with 2.7+ years of experience in cloud technologies, automation, and performance optimization.
            <br />
            I have completed Bachelors of Computer Application at IMS UC
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Manga
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ashish</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
