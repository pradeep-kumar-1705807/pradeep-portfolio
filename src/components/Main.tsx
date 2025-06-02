import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={`${process.env.PUBLIC_URL}/images/pradeep-image.jpeg`} alt="Pradeep Kumar" className="profile-image" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/pradeep-kumar-1705807" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://linkedin.com/in/pradeep-kumar-profile" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Pradeep Kumar</h1>
          <p>Backend Software Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/pradeep-kumar-1705807" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://linkedin.com/in/pradeep-kumar-profile" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;