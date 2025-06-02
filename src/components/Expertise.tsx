import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faDocker, faAws } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Java",
    "Spring Boot",
    "Spring Cloud",
    "Microservices",
    "REST APIs",
    "Hibernate",
    "JPA"
];

const labelsSecond = [
    "PostgreSQL",
    "Redis",
    "Kafka",
    "AWS S3",
    "Docker",
    "Kubernetes",
    "Datadog"
];

const labelsThird = [
    "OOPs",
    "Data Structures",
    "Algorithms",
    "System Design",
    "Design Patterns",
    "CI/CD",
    "Unit Testing"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faJava} size="3x"/>
                    <h3>Backend Development</h3>
                    <p>Experienced in building robust and scalable backend systems using Java and Spring ecosystem. Specialized in designing and implementing microservices architecture, RESTful APIs, and database solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faAws} size="3x"/>
                    <h3>Cloud & DevOps</h3>
                    <p>Skilled in cloud infrastructure, containerization, and CI/CD pipelines. Experienced with AWS services, Docker, Kubernetes, and monitoring tools like Datadog for maintaining high-availability systems.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>System Design & Architecture</h3>
                    <p>Strong foundation in system design principles, distributed systems, and architectural patterns. Experienced in designing high-performance, scalable, and maintainable systems with a focus on reliability and efficiency.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;