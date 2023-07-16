import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Loader from '../Loader/Loader'

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [isLoadingProjects, setIsLoadingProjects] = useState(true); // Add isLoading state for projects
  const [isLoadingEducation, setIsLoadingEducation] = useState(true); // Add isLoading state for education
  const [isLoadingSkills, setIsLoadingSkills] = useState(true); // Add isLoading state for skills

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [projectsResponse, educationResponse, skillsResponse] = await Promise.all([
        axios.get('https://portfolio-backend-tp9e.onrender.com/getprojects'),
        axios.get('https://portfolio-backend-tp9e.onrender.com/geteducation'),
        axios.get('https://portfolio-backend-tp9e.onrender.com/getskills'),
      ]);

      setProjects(projectsResponse.data);
      setIsLoadingProjects(false);

      setEducation(educationResponse.data);
      setIsLoadingEducation(false); 

      setSkills(skillsResponse.data);
      setIsLoadingSkills(false); 
    } catch (error) {
      console.log(error)
      setIsLoadingProjects(false); 
      setIsLoadingEducation(false); 
      setIsLoadingSkills(false); 
    }
  };

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
              {isLoadingProjects ? (
                <Loader /> 
              ) : (
                projects.map((project) => (
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
                ))
              )}
            </div>
          </Col>
          <Col md={6} lg={4}>
            <div className='my-5 '>
              <Card.Header>
                <h1 className='my-4 text-3xl font-bold'>My Education</h1>
              </Card.Header>
              {isLoadingEducation ? (
                <Loader /> 
              ) : (
                education.map((education) => (
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
                ))
              )}
            </div>
          </Col>
          <Col md={6} lg={4}>
            <div className='my-5 '>
              <Card.Header>
                <h1 className='my-4 text-3xl font-bold'>My Skills</h1>
              </Card.Header>
              {isLoadingSkills ? (
                <Loader /> 
              ) : (
                skills.map((skill) => (
                  <div key={skill._id}>
                    <Card.Title className='my-3 font-bold'>{skill.skills}</Card.Title>
                    <ProgressBar now={skill.rating} />
                  </div>
                ))
              )}
            </div>

            <div className='my-5 '>
              <Card.Header>
                <h1 className='my-4 text-3xl font-bold'>Language</h1>
              </Card.Header>
              <div>
                <Card.Title className='my-3 font-bold'>English</Card.Title>
                <ProgressBar now={90} />
              </div>
              <div>
                <Card.Title className='my-3 font-bold'>Hindi</Card.Title>
                <ProgressBar now={100} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Project;
