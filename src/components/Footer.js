import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
//import TwitterIcon from "@material-ui/icons/Twitter";

import "../styles/footer.css";

const Footer = () => {
    return (
        <div className="footer" >
            <div className="socialMedia" >
                <a href="https://mail.google.com/mail/u/0/#all?compose=GTvVlcSDZBSnBBKcTCcZTdRlwdxpjFQkKKjDBjVQHzqMLzGZBWMvpPNjNsZWKGfsPqRfgQsFGGdGg" target="_blank">
                    <EmailIcon />
                </a>
                <a href="https://www.linkedin.com/in/rohit-baranwal-8a3aa4220/" target="_blank">
                    <LinkedInIcon />
                </a>
                <a href="https://github.com/Rohit-Baranwal" target="_blank">    
                    <GitHubIcon />
                </a> 
            </div>
            <p> &copy; 2023 my-portfolio-rohit.netlify.app</p>
        </div>
        );
}

export default Footer;