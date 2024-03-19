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
            A software developer with a passion for learning and creating!!
          </p>
          <a href='https://www.linkedin.com/in/rohit-baranwal-8a3aa4220/' target='_blank'>
            <button className='hireMe_btn' type='submit' >Hire Me!!</button>
          </a>
        </div>
      </div>

      <div className='skills'>
          <h1>Skills</h1>
          <ol className='list'>
            <li className='item'>
              <h2>Front-end: </h2>
              <span>
                ReactJS, HTML, CSS, BootStrap,
                MaterialUI, ChakraUI, StyledComponents
              </span>
            </li>
            <li className='item'>
              <h2>Backend: </h2>
              <span>
                 ASP.NET, ASP.NET MVC, MySQL, MongoDB, MS-SQL, DBMS
              </span>
            </li>
            <li className='item'>
              <h2>Languages: </h2>
              <span>
                Java, C#, DBMS, ReactJS, JavaScript, Windows Form, Socket Programming
              </span>
            </li>
          </ol>
      </div>
    </div>
  );
}

export default Home;