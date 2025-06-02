import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Nov 2021 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer (Backend)</h3>
            <h4 className="vertical-timeline-element-subtitle">BukuWarung, India</h4>
            <ul>
              <li>Implemented server-side rate limiting in Spring Cloud Gateway to enhance API security and prevent resource starvation</li>
              <li>Designed a centralized audit trails system for Panacea, consolidating activity logs from multiple dashboards</li>
              <li>Optimized Datadog logging configuration, resulting in a 50% cost reduction across multiple services</li>
              <li>Engineered an automated retry disbursement solution for failed transactions, improving transaction reliability</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Jan 2021 - Nov 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">SDE - Intern + Associate</h3>
            <h4 className="vertical-timeline-element-subtitle">Fair Issac Corporation (FICO)</h4>
            <ul>
              <li>Involved in writing business logic and Java code at the backend</li>
              <li>Contributed to improve code coverage of project up to 85%</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Jun 2017 - Jun 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor of Technology (CSE)</h3>
            <h4 className="vertical-timeline-element-subtitle">Kalinga Institute of Industrial Technology</h4>
            <p>CGPA: 8.7</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;