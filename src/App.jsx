import React from "react";
import './App.css';

export default function Portfolio() {
  return (
    <div className="portfolio">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Pradeep Kumar</h1>
          <p className="hero-subtitle">Backend Software Engineer</p>
          <p className="hero-description">Java | Spring Boot | AWS | Kafka | 4+ Years Experience</p>
          <div className="hero-links">
            <a href="https://github.com/pradeep-kumar-1705807" target="_blank" rel="noopener noreferrer" className="hero-link">
              GitHub
            </a>
            <a href="https://linkedin.com/in/pradeep-kumar-6124a3145" target="_blank" rel="noopener noreferrer" className="hero-link">
              LinkedIn
            </a>
            <a href="mailto:kumarpradeep2008.1@gmail.com" className="hero-link">
              Email
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            Software Engineer with 4 years of experience in Backend Development, specializing in 
            building robust, scalable systems using Java, Spring Boot, and cloud technologies. 
            Proven track record of optimizing performance, implementing security measures, and 
            delivering high-quality solutions at scale. Currently working at BukuWarung, where I've 
            contributed to significant improvements in API security, cost optimization, and system reliability.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Work Experience</h2>
          <div className="experience-grid">
            <div className="experience-card">
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">Software Engineer (Backend)</h3>
                  <p className="experience-company">BukuWarung, India</p>
                </div>
                <span className="experience-date">Nov 2021 - Present</span>
              </div>
              <ul className="experience-list">
                <li>Implemented server-side rate limiting in Spring Cloud Gateway to enhance API security and prevent resource starvation</li>
                <li>Designed centralized audit trails system for Panacea, consolidating activity logs from multiple dashboards</li>
                <li>Strengthened Open API security by implementing Blacklist-Service, enhancing defense against malicious requests</li>
                <li>Developed switching mechanism for message providers, optimizing delivery rates up to 85% with minimal manual intervention</li>
                <li>Automated B2B CompanyID/Secret upload to Redis for App Gateway authentication with database fallback</li>
                <li>Improved unit test coverage to 90% across multiple services, elevated code quality and resolved production issues</li>
                <li>Optimized Datadog logging configuration, resulting in 50% cost reduction across multiple services</li>
                <li>Engineered automated retry disbursement solution for failed transactions, integrating AJ's system</li>
                <li>Developed script using Google Drive API and AWS SDK (boto3) for seamless file transfer between Google Drive and S3</li>
                <li>Implemented Komisi Agen cashback withdrawal and transaction history features for merchant revenue tracking</li>
                <li>Implemented device-level login blocking using Bureau Fingerprint ID to prevent fraud and enhance security</li>
              </ul>
            </div>

            <div className="experience-card">
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">SDE - Intern + Associate</h3>
                  <p className="experience-company">Fair Isaac Corporation (FICO)</p>
                </div>
                <span className="experience-date">Jan 2021 - Nov 2021</span>
              </div>
              <ul className="experience-list">
                <li>Developed business logic and Java backend code for enterprise applications</li>
                <li>Contributed to improving code coverage up to 85% across project modules</li>
                <li>Gained experience in enterprise-level software development practices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-header">
                <h3 className="project-title">Loan Processing System</h3>
                <a href="https://github.com/pradeep-kumar-1705807/loan-application" target="_blank" rel="noopener noreferrer" className="project-link">
                  View Project
                </a>
              </div>
              <p className="project-description">
                Simple web application that accepts loan applications based on score, age, and salary. 
                Created CRUD operations with search functionality using Java Spring Framework.
              </p>
              <div className="project-tags">
                <span className="tag">Java</span>
                <span className="tag">Spring Boot</span>
                <span className="tag">MySQL</span>
                <span className="tag">REST API</span>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3 className="project-title">QMoney Portfolio Manager</h3>
                <a href="https://github.com/pradeep-kumar-1705807/QMoney" target="_blank" rel="noopener noreferrer" className="project-link">
                  View Project
                </a>
              </div>
              <p className="project-description">
                Visual stock portfolio analyzer with insights on portfolio performance. Features include 
                portfolio creation, real-time stock data integration, and performance analytics.
              </p>
              <div className="project-tags">
                <span className="tag">Java</span>
                <span className="tag">Spring Boot</span>
                <span className="tag">REST API</span>
                <span className="tag">Jackson</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="skill-category-title">Programming Languages</h3>
              <div className="skill-tags">
                <span className="skill-tag">Java</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">C++</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-category-title">Frameworks & Libraries</h3>
              <div className="skill-tags">
                <span className="skill-tag">Spring Boot</span>
                <span className="skill-tag">Spring Cloud Gateway</span>
                <span className="skill-tag">Spring Security</span>
                <span className="skill-tag">JUnit</span>
                <span className="skill-tag">Mockito</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-category-title">Databases</h3>
              <div className="skill-tags">
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">Redis</span>
                <span className="skill-tag">MongoDB</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-category-title">Cloud & DevOps</h3>
              <div className="skill-tags">
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Kubernetes</span>
                <span className="skill-tag">Datadog</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-category-title">Message Queues</h3>
              <div className="skill-tags">
                <span className="skill-tag">Apache Kafka</span>
                <span className="skill-tag">RabbitMQ</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-category-title">Testing & Tools</h3>
              <div className="skill-tags">
                <span className="skill-tag">JUnit</span>
                <span className="skill-tag">Mockito</span>
                <span className="skill-tag">Postman</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Maven</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-card">
            <div className="education-header">
              <div>
                <h3 className="education-degree">Bachelor of Technology in Computer Science & Engineering</h3>
                <p className="education-school">Kalinga Institute of Industrial Technology (KIIT), Bhubaneswar</p>
              </div>
              <div className="education-details">
                <span className="education-date">2017 - 2021</span>
                <span className="education-gpa">CGPA: 8.7/10</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Achievements</h2>
          <div className="achievements-grid">
            <div className="achievement-card">
              <h3 className="achievement-title">AWS Certified Cloud Practitioner</h3>
              <p className="achievement-description">Certified in AWS cloud fundamentals and best practices</p>
            </div>
            <div className="achievement-card">
              <h3 className="achievement-title">Competitive Programming</h3>
              <p className="achievement-description">
                CodeChef: Max Rating 1613 (3 Star)<br/>
                HackerRank: 5 Star in Java, 4 Star in Problem Solving<br/>
                LeetCode: Solved 350+ problems
              </p>
            </div>
            <div className="achievement-card">
              <h3 className="achievement-title">Academic Excellence</h3>
              <p className="achievement-description">Graduated with 8.7 CGPA from KIIT University</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-info">
            <div className="contact-item">
              <strong>Email:</strong> kumarpradeep2008.1@gmail.com
            </div>

            <div className="contact-item">
              <strong>Location:</strong> Bhubaneswar, Odisha, India
            </div>
            <div className="contact-links">
              <a href="https://github.com/pradeep-kumar-1705807" target="_blank" rel="noopener noreferrer" className="contact-link">
                GitHub
              </a>
              <a href="https://linkedin.com/in/pradeep-kumar-6124a3145" target="_blank" rel="noopener noreferrer" className="contact-link">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
