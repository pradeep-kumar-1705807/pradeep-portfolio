import React from "react";
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://github.com/pradeep-kumar-1705807/loan-application" target="_blank" rel="noreferrer">
                        <div className="project-image-placeholder">Loan App</div>
                    </a>
                    <a href="https://github.com/pradeep-kumar-1705807/loan-application" target="_blank" rel="noreferrer">
                        <h2>Loan Processing System</h2>
                    </a>
                    <p>A web application that processes loan applications based on applicant's score, age, and salary. Built with Java Spring Boot, Hibernate, JSP, and MySQL. Implements CRUD operations and search functionality.</p>
                    <div className="tech-stack">
                        <span>Java</span>
                        <span>Spring Boot</span>
                        <span>Hibernate</span>
                        <span>MySQL</span>
                    </div>
                </div>

                <div className="project">
                    <a href="https://criodo.github.io/Crio-Launch-Feb-2020-kumarpradeep2008-1/" target="_blank" rel="noreferrer">
                        <div className="project-image-placeholder">QMoney</div>
                    </a>
                    <a href="https://criodo.github.io/Crio-Launch-Feb-2020-kumarpradeep2008-1/" target="_blank" rel="noreferrer">
                        <h2>QMoney Stock Portfolio Analyzer</h2>
                    </a>
                    <p>A visual stock portfolio analyzer that helps users track and analyze their stock investments. Implemented core portfolio management logic and refactored the code to support multiple stock quote services.</p>
                    <div className="tech-stack">
                        <span>Java</span>
                        <span>REST APIs</span>
                        <span>JSON</span>
                        <span>JUnit</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
