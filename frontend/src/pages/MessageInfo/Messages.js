import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Card, Row, Col } from 'react-bootstrap';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = () => {
    axios
      .get('http://localhost:8000/getmessage')
      .then((response) => {
        setMessages(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setError('Failed to fetch messages');
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return <p>Loading messages...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <Navbar className="bg-body-tertiary p-3 md:shadow">
        <Container fluid>
          <Navbar.Brand className='font-bold text-2xl'>Messages</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
      <div className='my-4'>
      <Row>
          {messages.map((message) => (
            <Col key={message._id} lg={4}>
              <Card>
                <Card.Body>
                  <h3>{message.name}</h3>
                  <p>{message.email}</p>
                  <p>{message.message}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
        
      </Container>
    </div>
  );
};

export default Messages;
