import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import ProgressBar from 'react-bootstrap/ProgressBar';

// import expense from '../../img/expense-management.jpg';
// import weather from '../../img/weather.jpg';

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [education, setEducation] = useState([])
  const [skills, setSkills] = useState([])

  useEffect(() => {
    fetchProjects();
    fetchEducation()
    fetchSkills()
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('https://portfolio-backend-tp9e.onrender.com/getprojects');
      setProjects(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchEducation = async () => {
    try {
      const response = await axios.get('https://portfolio-backend-tp9e.onrender.com/geteducation')
      setEducation(response.data)

    } catch (error) {
      console.log(error);
    }
  }

  const fetchSkills = async () => {
    try {
      const response = await axios.get('https://portfolio-backend-tp9e.onrender.com/getskills')
      setSkills(response.data)
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div className='my-4' id='Resume'>
      <Container fluid>
        <h1 className='font-bold text-4xl'>My Resume</h1>
        <Row>
          <Col md={6} lg={4}>
            <div className='my-5 '>
              <Card.Header>
                <h1 className='my-4 text-3xl font-bold'>My Projects </h1>
              </Card.Header>
              {projects.map((project) => (
                <div key={project._id} className='my-4'>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant='top' src={project.image} />
                    <Card.Body>
                      <Card.Title className='font-bold text-2xl'>{project.title}</Card.Title>
                      <Card.Title className='font-bold my-2'>{project.category}</Card.Title>
                      <Card.Text>{project.description}</Card.Text>
                      <a href={project.link} target='_blank' rel='noreferrer'>
                        <Button className='text-white font-bold bg-blue-800 my-2'>Go to Website</Button>
                      </a>
                    </Card.Body>
                  </Card>
                  
                </div>
              ))}
            </div>
          </Col>
          <Col md={6} lg={4}>
            <div className='my-5 '>
              <Card.Header>
                <h1 className='my-4 text-3xl font-bold'>My Education</h1>
              </Card.Header>
              {education.map((education) => (
                <div key={education._id}>
                  <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title className='my-3 font-bold'>{education.school}</Card.Title>
                      <Card.Subtitle className="font-bold text-xl my-2 text-[#ff6565]">{education.session}</Card.Subtitle>
                      <Card.Subtitle className="font-bold text-xl my-2">{education.course}</Card.Subtitle>
                      <Card.Text className='font-semibold'>
                        {education.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

              ))}

            </div>
          </Col>
          <Col md={6} lg={4}>
            <div className='my-5 '>
              <Card.Header>
                <h1 className='my-4 text-3xl font-bold'>My Skills</h1>
              </Card.Header>
              {skills.map((skill) => (
                <div key={skill._id}>
                  <Card.Title className='my-3 font-bold'>{skill.skills}</Card.Title>
                  <ProgressBar now={skill.rating}  />
                </div>
              ))}
            </div>

            <div className='my-5 '>
              <Card.Header>
                <h1 className='my-4 text-3xl font-bold'>Language</h1>
              </Card.Header>
                <div >
                  <Card.Title className='my-3 font-bold'>English</Card.Title>
                  <ProgressBar now={90}  />
                </div>
                <div >
                  <Card.Title className='my-3 font-bold'>Hindi</Card.Title>
                  <ProgressBar now={100}  />
                </div>

            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Project;
