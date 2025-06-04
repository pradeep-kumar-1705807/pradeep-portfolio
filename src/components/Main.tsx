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
            <a href="https://www.linkedin.com/in/pradeep-kumar-6124a3145/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Pradeep Kumar</h1>
          <p>Backend Software Engineer</p>
          <div style={{ marginTop: '20px' }}>
            <a 
              href="https://drive.google.com/uc?export=download&id=1-djjYDEeu2MPpzs6QBtYCQAwJQJgrUbp" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(to right, #7c3aed, #4f46e5)',
                color: 'white',
                fontWeight: 600,
                padding: '12px 32px',
                borderRadius: '8px',
                textDecoration: 'none',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                transition: 'all 0.3s ease',
                transform: 'translateY(0)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to right, #6d28d9, #4338ca)';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to right, #7c3aed, #4f46e5)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-icons" style={{ marginRight: '8px' }}>download</span>
              Download Resume
            </a>
          </div>

          <div className="mobile_social_icons">
            <a href="https://github.com/pradeep-kumar-1705807" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/pradeep-kumar-6124a3145/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;