import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (name !== '' && email !== '' && message !== '') {
      // Create mailto link with form data
      const subject = `Portfolio Contact from ${name}`;
      const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
      const mailtoLink = `mailto:kumarpradeep2008.1@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
      
      // Open default email client
      window.location.href = mailtoLink;
      
      // Show success message
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
      
      // Reset form
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          
          {/* Contact Information */}
          <div className="contact-info">
            <div className="contact-item">
              <EmailIcon />
              <a href="mailto:kumarpradeep2008.1@gmail.com">kumarpradeep2008.1@gmail.com</a>
            </div>

            <div className="contact-item">
              <LinkedInIcon />
              <a href="https://www.linkedin.com/in/pradeep-kumar-6124a3145/" target="_blank" rel="noreferrer">LinkedIn Profile</a>
            </div>
            <div className="contact-item">
              <GitHubIcon />
              <a href="https://github.com/pradeep-kumar-1705807" target="_blank" rel="noreferrer">GitHub Profile</a>
            </div>
            <div className="contact-item">
              <LocationOnIcon />
              <span>Bengaluru, Karnataka, India</span>
            </div>
          </div>

          {/* Contact Form */}
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            {showSuccess && (
              <div className="success-message">
                Your email client should open with a pre-filled message. If it doesn't, please email me directly at kumarpradeep2008.1@gmail.com
              </div>
            )}
            <div className='form-flex'>
              <TextField
                required
                id="outlined-required"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                id="outlined-required"
                label="Email"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={emailError ? "Please enter your email" : ""}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
              Send Email
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;