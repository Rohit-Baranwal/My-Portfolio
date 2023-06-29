import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import "../styles/Home.css";

import React from 'react';

const Home = () => {
  return (
    <div className='home' >
      <div className='about'>
        <h2>Hi, My Name is Rohit Baranwal</h2>
        <div className='prompt'>
          <p>
            A software developer with a passion for learning and creating.
          </p>
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
        </div>
      </div>

      <div className='skills'>
          <h1>Skills</h1>
          <ol className='list'>
            <li className='item'>
              <h2>Front-end</h2>
              <span>
                ReactJS, HTML, CSS, BootStrap,
                MaterialUI, ChakraUI, StyledComponents
              </span>
            </li>
            <li className='item'>
              <h2>Databases</h2>
              <span>
                 MySQL, MongoDB, MS-SQL
              </span>
            </li>
            <li className='item'>
              <h2>Languages</h2>
              <span>
                Core Java, SQL, DBMS, ReactJS, JavaScript
              </span>
            </li>
          </ol>
      </div>
    </div>
  );
}

export default Home;