import React from "react";
import "./App.css";

export default function Portfolio() {
  return (
    <main className="portfolio">
      <div className="container">
        <header className="header">
          <h1>Pradeep Kumar</h1>
          <p className="subtitle">Backend Software Engineer | Java | Spring Boot | AWS | Kafka</p>
          <div className="social-links">
            <a href="https://github.com/pradeep-kumar-1705807" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/pradeep-kumar-6124a3145" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="mailto:kumarpradeep2008.1@gmail.com">
              Email
            </a>
          </div>
        </header>

        <section className="about">
          <h2>About Me</h2>
          <p>
            I'm a backend engineer with 4 years of experience building scalable, reliable systems using Java, Spring Boot, PostgreSQL, Kafka, and AWS. I enjoy solving real-world problems and have worked on secure API gateways, automated retry disbursal mechanisms, and cost-saving log optimizations.
          </p>
        </section>

        <section className="projects">
          <h2>Projects</h2>
          <div className="project-grid">
            <div className="project-card">
              <h3>Retry Disbursement System</h3>
              <p>
                Automated failed transaction retries by integrating with AJ's system, reducing manual intervention and delays.
              </p>
            </div>
            <div className="project-card">
              <h3>Audit Trail Platform</h3>
              <p>
                Centralized log system for multiple dashboards, enhancing visibility for audits and debugging.
              </p>
            </div>
            <div className="project-card">
              <h3>QMoney Portfolio Manager</h3>
              <p>
                Visual stock portfolio tool supporting multiple quote services; focused on clean design and refactoring.
              </p>
            </div>
          </div>
        </section>

        <section className="skills">
          <h2>Skills</h2>
          <div className="skills-grid">
            <span>Java, Spring Boot</span>
            <span>PostgreSQL, Redis</span>
            <span>Kafka, AWS S3</span>
            <span>Junit, Mockito, Datadog</span>
            <span>Git, GitHub</span>
            <span>System Design, OOPs</span>
          </div>
        </section>

        <section className="resume-section">
          <a 
            href="https://drive.google.com/file/d/1zG-7c-9Rnkm3jrKfbzyAm2-igfN1BOOP/view?usp=sharing" 
            target="_blank"
            className="resume-button"
          >
            View Resume
          </a>
        </section>
      </div>
    </main>
  );
}
