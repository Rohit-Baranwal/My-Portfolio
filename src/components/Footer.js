import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from "@material-ui/icons/Twitter";

import "../styles/footer.css";

const Footer = () => {
    return (
        <div className="footer" >
            <div className="socialMedia" >
                <EmailIcon />
                <LinkedInIcon />
                <TwitterIcon />    
                <GitHubIcon />
            </div>
            <p> &copy; 2022 rohit.baranwal2020@gmail.com</p>
        </div>
        );
}

export default Footer;