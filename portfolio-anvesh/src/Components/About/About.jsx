import React from 'react';
import '../../Styles/About.css';
import { Header } from '../Header/Header';
import Button from '@mui/material/Button';

export const About = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/resume.pdf'; // Adjust the file name and extension as necessary
    link.download = 'Kuncham_Anvesh_Resume.pdf'; // The name the file will have when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='bga'>
      <Header />
      <div className='container mt-5'>
        <div className='justify-content pg' style={{ color: '#fff' }}>
          I am Kuncham Anvesh, a passionate Full Stack Developer with a strong foundation in <span style={{ fontWeight: 'bold' }}> HTML, CSS, Bootstrap, Material-UI, Java, React js, Spring Boot, and MySQL</span>. Currently, I am honing my skills as an Associate Software Engineer at Virtusa. I am dedicated to creating innovative web solutions and continuously improving my technical expertise while staying abreast of industry advancements.
        </div>
        <div className='text-center mt-5' style={{ color: 'white' }}>
          <h1>My Skills</h1>
          <div className='d-flex justify-content-center flex-wrap mt-4'>
            <img className='skill-icon' src="../assets/html.png" alt="HTML" />
            <img className='skill-icon' src="../assets/css.png" alt="CSS" />
            <img className='skill-icon' src="../assets/bootstrap.png" alt="Bootstrap" />
            <img className='skill-icon' src="../assets/javascript.png" alt="JavaScript" />
            <img className='skill-icon' src="../assets/react.png" alt="React.js" />
            <img className='skill-icon' src="../assets/java.png" alt="Java" />
            <img className='skill-icon' src="../assets/spring.svg" alt="Spring Boot" />
            <img className='skill-icon' src="../assets/mysql.png" alt="MySQL" />
          </div>
        </div>
      </div>
      <div className='container mt-5'>
        <div className='row sfv'>
          <div className='col text-center'>
            <div>
              <img className='img-fluid im' src="../assets/resumesv.svg" alt="" />
              <Button
                className='cv-button mt-5'
                style={{
                  position: 'relative',
                  left: '10px',
                  border: '2px solid #003656',
                  fontWeight: 'bold',
                  color: '#003656'
                }}
                variant='outlined'
                onClick={handleDownload}
              >
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
