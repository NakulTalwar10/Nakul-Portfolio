import React, { useState } from 'react';
import { Card, Col, Container, Row, Form, Button } from 'react-bootstrap';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import axios from 'axios';
import './Contact.css'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const messageData = {
      name,
      email,
      message,
    };

    axios
      .post('http://localhost:8000/addmessage', messageData)
      .then((response) => {
        setName('');
        setEmail('');
        setMessage('');
        setSubmitted(true);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className='py-4 contact-container'id='Contact'>
      <Container fluid>
        <Row>
          <Col lg={8}>
            <Card>
              <Card.Body>
                <h1 className='text-center font-bold text-2xl my-3'>Send Message</h1>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId='name'>
                    <Form.Label className='font-bold text-xl'>Name</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter your name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId='email'>
                    <Form.Label className='font-bold text-xl'>Email</Form.Label>
                    <Form.Control
                      type='email'
                      placeholder='Enter your email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId='message'>
                    <Form.Label className='font-bold text-xl'>Message</Form.Label>
                    <Form.Control
                      as='textarea'
                      rows={3}
                      placeholder='Enter your message'
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </Form.Group>

                  <Button className='font-bold text-white bg-[#1e7aac] my-3' type='submit'>
                    Submit
                  </Button>
                  <div className='my-4'>
                    {submitted && (
                      <Card>
                        <Card.Body>
                          <h2 className='font-bold text-[red]'>Thank you for your message!</h2>
                          <p className='font-bold text-[red]'>We will get back to you soon.</p>
                        </Card.Body>
                      </Card>
                    )}
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            <Card>
              <Card.Body>
                <div className=''>
                  <h1 className='font-bold text-2xl my-3'>Get In Touch</h1>
                  <ul className='my-12'>
                    <li>
                      <span className='font-bold mx-2'>Email:</span>tnakult@gmail.com
                    </li>
                    <li>
                      <span className='font-bold mx-2'>Contact:</span>9213992300
                    </li>
                    <li>
                      <span className='font-bold mx-2'>Address:</span>Mayur Vihar Phase-1, Delhi-110091
                    </li>
                  </ul>
                  <ul className='flex text-black container'>
                    <li className='mx-4 font-bold text-2xl'>
                      <a href='https://www.linkedin.com/in/nakul-talwar-6b2566211/' target='_blank' rel='noreferrer' className='hover:text-[grey]'>
                        <FaLinkedin />
                      </a>
                    </li>
                    <li className='mx-4 font-bold text-2xl'>
                      <a href='https://github.com/NakulTalwar10' target='_blank' rel='noreferrer' className='hover:text-[grey]'>
                        <FaGithubSquare />
                      </a>
                    </li>
                    <li className='mx-4 font-bold text-2xl'>
                      <a href='https://www.instagram.com/nakulll.10/' target='_blank' rel='noreferrer' className='hover:text-[grey]'>
                        <FaInstagram />
                      </a>
                    </li>
                    <li className='mx-4 font-bold text-2xl'>
                      <a href='https://twitter.com/TalwarNakul' target='_blank' rel='noreferrer' className='hover:text-[grey]'>
                        <FaTwitter />
                      </a>
                    </li>
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
